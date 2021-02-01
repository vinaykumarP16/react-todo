import React from 'react';

function Header(argument) {
	return(
		<header style={headerStyle}>
			<h1> todo list</h1>
		</header>
		)
}

const headerStyle={
	background:"black",
	color:'#fff',
	textAlign:"center",
	padding:"10px"
}


export default Header;
