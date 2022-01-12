import React, {Component} from "react";
import './App.css';
import CardList from './CardList';
import {superHeroes} from "./superHeroes";
import SearchBox from "./SearchBox";
import 'animate.css';
import render from "dom-serializer";




class  App extends Component {
  constructor(){
    super()
    this.state = {
      superHeroes: superHeroes,
      searchfield: ""

    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    }
    
  
  render(){
    const filteredSuperHeroes = this.state.superHeroes.filter(superHeroes =>{
      return superHeroes.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div class="text-center">
        <div className="main">
        <h1 class="animate__animated animate__tada">FindFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        </div>
        <CardList superHeroes={filteredSuperHeroes} />
       </div>
     );
  }
  
}

export default App;
