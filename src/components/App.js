import React, { Component } from 'react';
import TopBar from './TopBar';
import Page from './Page';
import PeopleService from '../services/PeopleService';

export default class App extends Component {
    constructor () {
        let peopleService = new PeopleService();
        super();

        this.state = { people: [] };
        peopleService.getPeople()
            .then((data) => {
                this.setState({ people: data.results }).bind(this);
            });
    }

    render() {
        return (
        <div className="app">
            <TopBar/>
            <Page people={this.state.people}/>
        </div>
        )
    }
}

/*export default ()=> {
    return (
      <div className="app">
         <TopBar/>
		 <h1 className="headline white-text">I am the main Application</h1>
		 <Card action="greet" subject="people"/>
	  </div>
    )
}*/
