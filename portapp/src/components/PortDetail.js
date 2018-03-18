import React from 'react';

class PortDetail extends React.Component {

	render() {

		const {title, desc, image, url} = this.props.details;
		const backgroundStyle = {
            backgroundImage: 'url(' + image + ')'
        };

		return (
			 <a href={url} target="_blank" className="item" style ={backgroundStyle}>
		        <div className="hover">
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
			</a>
		);

	}
}

export default PortDetail;