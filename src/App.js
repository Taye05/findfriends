import React, {Component} from "react";
import { connect } from 'react-redux';
import './App.css';
import CardList from './components/CardList';
import {superHeroes} from "./components/superHeroes";
import SearchBox from "./components/SearchBox";
import 'animate.css';
import render from "dom-serializer";
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import { setSearchField } from '../src/Action';
// import { dispatch } from "jest-circus/build/state";


const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
     onSearchChange: (event) => dispatch(setSearchField(event.target.value))
   }
}


class  App extends Component {
  constructor(){
    super()
    this.state = {
      superHeroes: []

    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>   response.json())
    .then(users => 
      this.setState({superHeroes: users}))
   
  }

 
  
  render(){
    const {superHeroes} = this.state;
    const { searchField, onSearchChange } = this.props
    const filteredSuperHeroes = superHeroes.filter(superHero =>{
      return superHero.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !superHeroes.length ?
       <h1>loading....</h1>:
    
    (
      <div class="text-center">
        <div className="main">
        <h1 class="animate__animated animate__tada">FindFriends</h1>
        <SearchBox searchChange = {onSearchChange}/>
        </div>
          <Scroll>
            <ErrorBoundary>
        <CardList superHeroes={filteredSuperHeroes} />
            </ErrorBoundary>
          </Scroll>
       </div>
     );
  }}
  


export default connect(mapStateToProps, mapDispatchToProps) (App);
