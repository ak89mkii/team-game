import React, { Component } from 'react'
import { Route } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Divider, Header, Image, Segment } from 'semantic-ui-react'
import NavBar from './components/NavBar/NavBar'
import QuizPage from './pages/QuizPage/QuizPage'
import Login from './pages/QuizPage/QuizPage'
import logo from './images/01.png'

const qNo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const testArray = [
  '',
  'What part of the body helps you move?', 
  'What city is the White House in?', 
  'How many stars on the American Flag?', 
  'Who was the first U.S president?', 
  'They had 40 boxes of pasta sauce in storage and received 47 more boxes last month. How many boxes of pasta sauce are there?', 
  'Lulu has 2 boxes of 10 chocolates each. How many chocolates does she have?', 
  'What is Fe?', 
  'Acceleration due to gravity?', 
  'Force equation.', 
  'Is the Sun a star?'
]

const answerArray = [
  'Answer to the Questions Below:',
  'Answer: Muscles', 
  'Answer: Washington, D.C.', 
  'Answer: 50 for the 50 US states', 
  'Answer: George Washington', 
  'Answer: 87 boxes of pasta sauce', 
  'Answer: 20 chocolates', 
  'Answer: Iron', 
  'Answer: 9.8 meters per second squared', 
  'Answer: Force = Mass x Acceleration', 
  'Answer: Yes'
]

class App extends Component {
  state ={
    quizIdx: 0
  }
  handleSummon = (idx) => {
    this.setState({ quizIdx: idx })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
      return (

      <>
      <NavBar 
      handleItemClick={this.handleItemClick}
      activeItem = {activeItem}
      />
      <div className='App'>
      <Segment inverted color='blue'>
        <Header as='h1' floated='left'>
          Quiz Page
        </Header>

        <Divider clearing />
        <Grid columns={2} centered>
        
          <Grid.Column>
          
            <Image centered
              height='400' 
              src={logo} 
              color='blue'
              />
            <Header className= 'title' as='h1'>
              KidBot: The Student Quiz App
            </Header>
          </Grid.Column> 
          
        </Grid>
      </Segment>
      </div>
      <br></br>
          
      <main>
        

        <QuizPage 
          qNo={qNo}
          quizIdx={this.state.quizIdx}
          handleSummon={this.handleSummon}
          testArray={testArray}
          answerArray={answerArray}
        />
        
      </main>
        

      </>
      )
    }
  }



export default App;



