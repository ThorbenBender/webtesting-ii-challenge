import React from 'react';

export default function Display(props) {
	return (
		<div>
			<p>{props.balls}</p>
			<p>{props.strike}</p>
		</div>
	);
}
