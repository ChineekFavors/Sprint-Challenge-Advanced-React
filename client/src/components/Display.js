import React from "react";


class Display extends React.Component {
	constructor(){
		super();
		this.state = {

		};
	}

	componentDidMount = () => {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log('there was a problem', error))
  }


	render(){
		return (
			<div>
				<h2>hello from Display</h2>
			</div>
		);
	}
}
export default Display;

