import React from "react";
import { Button, Form, Header } from "semantic-ui-react";

class MoneyForm extends React.Component {
  state = {
    value: 0
  };

  handleFieldChange = (e, obj) => {
    debugger;
    console.log("changing text field to: ", e.target.value);

    this.setState({ value: parseInt(e.target.value) });
  };

  handleSubmitForm = e => {
    this.props.handleGitMoMoney(e, this.state.value);
  };

  render() {
    return (
      <div>
        <Header as="h1">Money Form</Header>
        <Form onSubmit={this.handleSubmitForm}>
          <Form.Field>
            <label>Amount To Withdraw</label>
            <Form.Input
              type="number"
              value={this.state.value}
              onChange={this.handleFieldChange}
              name="amount"
            />
          </Form.Field>

          <Button type="submit" color="green">
            Git Money
          </Button>
        </Form>
      </div>
    );
  }
}

export default MoneyForm;
