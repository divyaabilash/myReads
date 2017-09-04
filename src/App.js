import React from 'react'
import Book from './Books'
import Search from './search'
import {Route} from 'react-router-dom'
import * as BookAPI from './BooksAPI'

class App extends React.Component{
	state={
		books:[]
  }
  render(){
    return (
      <div>
      <Route exact path="/" component={Book}/>
  <Route exact path="/search" component={Search}/>
   </div>
     )
  }
}

export default App;