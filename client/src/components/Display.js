import React from "react";

import {useLocalStorage} from './hooks/useLocalStorage.js';


import '../App.css';


class Display extends React.Component {
	constructor(){
		super();
		this.state = {
			players : []
		};
		
	}

	componentDidMount = () => {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(data => this.setState({players : data}))
      .catch(error => console.log('there was a problem', error))
  }

	render(){
		
		return (
			
			<div>
				{this.state.players.map( player => ( 
					<div className='playerDiv' key={player.id}>
						<h3>{player.name}</h3>
						<h3>{player.country}</h3>
						<h3>{player.searches}</h3>
					</div>
				))}
				
				
				
			</div>
		);
	}
}
export default Display;

