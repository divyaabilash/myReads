import React from 'react'
import Books from './Books'
import Search from './search'
import {Route} from 'react-router-dom'
import './App.css'
class App extends React.Component{
	state={
		books:[]
  }
  render(){
    return (
      <div>
      <Route exact path="/" component={Books}/>
    <Route exact path="/search" component={Search}/>
   </div>
     )
  }
}

export default App;