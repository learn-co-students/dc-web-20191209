import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      loading: true
    }
  }

  componentDidMount(){
    //there is a token or there isn't
    if(localStorage.getItem("jwt")){
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: {
          "Authentication" : localStorage.getItem("jwt"),
          "Accept" : "application/json"
        }
      }).then(res => res.json())
      .then(data => {
        this.setState({currentUser: data, loading: false})
      })
    }else{
      this.setState({loading: false})
    }
  }

  //onLogIng:
  updateCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  render(){
    return (
      <Fragment>
        <Nav
          logged_in={!!this.state.currentUser}
          updateCurrentUser={this.updateCurrentUser}
        />
        {
          this.state.loading ? null :
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/profile" render={() => {
              return this.state.currentUser ? <Profile user={this.state.currentUser}/> :
                <Redirect to="/login"/>
            }} />
            <Route exact path="/login" render={() => {
              return this.state.currentUser ? <Redirect to="/profile"/> : <LoginForm
                updateCurrentUser={this.updateCurrentUser}
              />
            }} />
            <Route component={NotFound} />
          </Switch>
        }
      </Fragment>
    )
  }
}

export default withRouter(App)
