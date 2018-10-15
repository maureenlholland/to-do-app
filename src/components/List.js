import React from 'react';

import RemoveItem from './RemoveItem.js';

//I need to cycle through current list of to-do's and create an li for each 

const List = (props) => {
	const { todos, removeTodo } = props;
	return (
		<ul>
			{ todos.map( (todo, i) => (
				<li key={ i } >{ todo }
					<RemoveItem removeTodo= { removeTodo } index={ i }/>
				</li>
			) ) }
		</ul>
	)
}

export default List;