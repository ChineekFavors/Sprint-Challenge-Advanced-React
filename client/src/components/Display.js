import React, {useState, useEffect} from "react";


import {useDarkMode} from './hooks/useDarkMode.js';

import '../App.css';


const Display = () => {
	const [players, setPlayers] = useState([]);
	const [darkmode, setDarkMode] = useDarkMode(false);

	

	useEffect(() => {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
			.then(data => setPlayers( data ))
      .catch(error => console.log('there was a problem', error))
	}, []);

	
	
	const handleDarkMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkmode);
	}


		
		return (
			
			<div>
				<button className='button'
					onClick={handleDarkMode}
					type="button">darkMode
				</button>

				{players.map( player => ( 
					<div className='playerDiv' key={player.id}>
						<h3>{player.name}</h3>
						<h3>{player.country}</h3>
						<h3>{player.searches}</h3>
					
					</div>
				))}
					
			</div>
		);
	
}
export default Display;

