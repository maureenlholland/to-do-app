import React from 'react';

import Button from './Button.js';

// Delete Item from state

const RemoveItem = (props) => {
	const { removeTodo, index } = props;
	return (
		<Button 
			action="btn--remove" 
			text="Remove" 
			handler={ removeTodo } 
			args = { index }
		/>
	)
}

export default RemoveItem;