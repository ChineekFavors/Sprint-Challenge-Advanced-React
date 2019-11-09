import React, {useState, useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage.js';





export const useDarkMode = () => {
	const [darkmode, setDarkMode] = useLocalStorage('darkSide');


	useEffect( () => {
		if (darkmode){
			let body = document.querySelector('body');
			body.classList.add('dark-mode');
			   
		} else{
			let body = document.querySelector('body');
			body.classList.remove('dark-mode');
		}	

	}, []);
	

	return [darkmode, setDarkMode];

}

