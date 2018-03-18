import React from 'react';
import PortDetail from './PortDetail';

class PortfolioGrid extends React.Component {



	render() {
		return (
			<section id="bottom-grid" className="bottom">
    			
    			{Object.keys(this.props.portData.portfolio).map(key => <PortDetail details={this.props.portData.portfolio[key]} key={key}/>)}

			</section>
		)
	}
	
}

export default PortfolioGrid;