import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from './ErrorBoundary.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json() )
            .then(users => this.setState({ robots:users}) )
    }



    onSearchChange = (event) => {        
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot=> {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        
        return !robots.length ? 
        <h1 className='tc f1 code'>Loading</h1> :
        (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>

            
        )
    }
    
} 

export default App