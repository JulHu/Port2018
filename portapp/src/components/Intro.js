import React from 'react';

class Intro extends React.Component {

	render() {
		return (
			<section id="top-intro" className="top">
				<section className="container">

					<h1>Oh, hello.</h1>
					<h2 className="white">My name is <strong>Julie</strong> and I'm a Senior Front End Developer who works for a communications company. Some of my skillsets include: <strong>JavaScript, D3.js, Mapbox, CSS3, Less/Sass, HTML5, PHP, WordPress</strong> and <strong>GruntJS/Gulp.</strong> I'm currently perfecting my <strong>React</strong> skills.</h2>
					<h2 className="white">For a copy of my resume with my complete skillset, say <a href="mailto:julie@juliehudak.com?Subject=Oh,%20hello">hi,</a> or see more <a href="https://www.linkedin.com/in/juliehudak/" target="_blank">here.</a></h2>

				</section>
			</section>
		)
	}

}

export default Intro;