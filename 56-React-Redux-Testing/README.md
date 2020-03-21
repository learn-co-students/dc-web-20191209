Testing Lecture

Jest is a node-based testing framework that comes out of the box with any React application.

# Opening Jest
After creating a new React app with the 'npm create-react-app <myApp>' command, you can open Jest in your terminal by running 'npm test'

    - for this repository, I've deleted the initial App.test.js file (created for us when we created the repo)

    - for a Redux application, to pass the initial test case in App.test.js (created for you when you created the application folder), simply wrap the <App/> component in a <Provider/> component and give it an instance of store as props (created with the createStore function from redux) - basically, set <App/> up in the test file as you did in the component file

# Organizing Test Files
The way you organize your tests files is completely up to you, but there are two basic options:

    1. Storing them all in a folder
    - by creating a folder named _tests_, Jest will automatically recognize any .js file within that folder as a test - if you have a large project, this may be the better option

    2. Creating individual test files and giving them with a .test.js or .spec.js extension.
    - this option allows you to store your test files right alongside the module files that your tests are testing

For this lecture, we're going to use the second option.

# Testing Vocab
Testing frameworks provide 3 different things:

    1. Test Runners - automated ways to run your tests (i.e. 'npm test')
    2. Assert Libraries - provide functions to declare that some condition should be true (to determine whether your tests pass or fail)
    3. Mocking and Spying - allow you to replace some function or object with dummy data

# Setting up Enzyme 
Enzyme is a plugin, or an extension, that we'll be layering over Jest (developed by Airbnb)
The purpose of Enzyme is to allow us to render only one component at a time (the piece we're testing) while ignoring the rest
Enzyme is NOT INCLUDED with React, so we need to install it

    - npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer

Before we can start using Enzyme, we also need to set up a src/setupTests.js file:

// src/setupTests.js

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//

# Testing Pure Functions
Pure functions are easy to test, because, given the same arguments, they should always return the same results

Reducers are pure functions, so we will test our manageWords reducer first

First, we need to create our test file, placing it in the same directory as the manageWords.js file, and import our reducer file

// src/reducers/manageWords.test.js

import manageWords from './manageWords'

# Jest syntax
    describe
        The describe keyword is used to declare a test suite (a test suite typically tests a module, and contains many test cases)

        describe ('manageWords', () => {
            /* tests go here */
        })

    it 
        The it keyword is used to declare each of our test cases. In the case of our reducer, it can call on three options, 'ADD_WORD', 'DELETE_WORD' and default.

        describe ('manageWords', () => {
            it ('handles @@INIT', () => {

            });
            it ('handles ADD_WORD', () => {

            });
            it ('handles DELETE_WORD', () => {

            });
        })

    expect and toEqual
        expect is an assertion function that allows us to compare the results of our reducer with the result that we'd expect - it returns a true or false value

        toEqual is the matcher
        * Jest provides a lot of other matchers, including toContain, toBeFalsy, toMatch(regexpOrString), and toThrow(error)

        describe ('manageWords', () => {
            it ('initializes state.words to be an empty array', () => {
                expect(manageWords(undefined, action)).toEqual({ words: [] })
            })
        })

# Testing Components
Components become trickier to test because now we have to worry about state, props, etc. - all the things that make our components dynamic. This is where Enzyme comes in

    shallow 
    - shallow is a method provided by Enzyme that allows us to render and test just the target component, NOT any children of that component
    (a shallow render)

    describe('Words', () => {
        it ('renders this.props.words as Word Components', () => {
            let mockProps = {
                word: [
                    { id: 1, img_url: null, word: 'skildpadden', img_url: null },
                    { id: 2, img_url: null, word: 'katten', img_url: null }
                ]
            }

            let wrapper = shallow(<Words {...mockProps} />)
            expect(wrapper.find(Word).length).toBe(mockProps.words.length)
        })
    })

# Snapshot Testing
Many times with a component that is responsible for rendering a lot of information (i.e. a presentational component) we want to perform a check that tells us if the component's UI looks right

A snapshot test does just that, but it works a bit differently... 

It begins with working code (a component), takes a snapshot of that component, and stores the snapshot in a file alongside the test as a future reference for how your code should look

Subsequent tests render a component, take a snapshot of that component, and then compare the new snapshot with the reference snapshot

If they match, your tests will pass; if they fail, then you know that you have unexpected changes happening to your component UI

    Because my Word Component uses connect to connect with my store, I have to provide a mock store or my tests will fail
     This means that I need to import { createStore } from 'redux' and my reducer (manageWords) to initialize a store 

    import Word from './Word';
    import { createStore } from 'redux';
    import manageWords from '../reducers/manageWords';
    import renderer from 'react-test-renderer';

    const mockStore = createStore(manageWords)

    As before, I'll give my test mockProps so that it has a band to render...

    let mockProps = {
        word: {
            id: 1,
            img_url: null,
            word: 'hunden',
            props: jest.fn() 
        }
    }

    Some changes with Jest 24 (previous version was 23)...

    Notice that I'm using renderer here to create an HTML 'tree' to create my snapshot

    describe ('Word', () => {
        it ('renders correctly', () => { 
            const tree = renderer
            .create(<Word {...mockProps} store={mockStore} />)
            .toJSON();
            expect(tree).toMatchSnapshot();
        })
    })

Once my initial snapshot is created, if I change anything about the way my component renders, my tests will fail