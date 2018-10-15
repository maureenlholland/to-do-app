import React from 'react';

import Button from './Button.js';

// Update input to show which characters are inputted
// Add items to state once saved

const AddItem = (props) => {
	const { handleChange, todo, addTodo } = props;
	return (
		<div className="add">
			<label htmlFor="item">Add a new to-do:	
				<input 
					id="item" 
					type="text" 
					onChange={ handleChange }
					value={ todo }
				/>
			</label>
		{/* Better to use FORM tag and INPUT submit? */}
			<Button 
				action="btn--add" 
				text="Save"
				handler={ addTodo }
			/>
		</div>
	)
}	

export default AddItem;