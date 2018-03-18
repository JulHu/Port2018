import React from 'react';
import Intro from './Intro';
import PortfolioGrid from './PortfolioGrid';
import portfolio from '../portfolio';

class App extends React.Component {

	state = {
		portData: {portfolio},
	};

	componentDidMount() {

		this.setHeight();

	}

	setHeight() {
		var windowHeight = window.innerHeight;
		var topHeight = document.getElementById("top-intro").style.height;
		document.getElementById("bottom-grid").style.height = windowHeight - topHeight;
		console.log(topHeight);
	}
	
	render() {
		return (
			<React.Fragment>
				<Intro />
				<PortfolioGrid portData = {this.state.portData} />
			</React.Fragment>
		);
	}

}

export default App;