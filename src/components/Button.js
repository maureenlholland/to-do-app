import React from 'react';

const Button = (props) => {
	// if props are undefined, don't use in class
	// how can i enable and disable button
	const { action, handler, text, args } = props;
	return (
		<button 
			className={ `btn ${action}` }
			onClick={ () => handler(args) }
		>
			{ text }
		</button>
	)
}

export default Button;