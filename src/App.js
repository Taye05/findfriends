import React, {Component} from "react";
import './App.css';
import CardList from './components/CardList';
import {superHeroes} from "./components/superHeroes";
import SearchBox from "./components/SearchBox";
import 'animate.css';
import render from "dom-serializer";
import Scroll from './components/Scroll'




class  App extends Component {
  constructor(){
    super()
    this.state = {
      superHeroes: [],
      searchfield: ""

    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>   response.json())
    .then(users => 
      this.setState({superHeroes: users}))
   
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    }
    
  
  render(){
    const {superHeroes, searchfield} = this.state;
    const filteredSuperHeroes = superHeroes.filter(superHero =>{
      return superHero.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !superHeroes.length ?
       <h1>loading....</h1>:
    
    (
      <div class="text-center">
        <div className="main">
        <h1 class="animate__animated animate__tada">FindFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        </div>
          <Scroll>
        <CardList superHeroes={filteredSuperHeroes} />
          </Scroll>
       </div>
     );
  }}
  


export default App;
