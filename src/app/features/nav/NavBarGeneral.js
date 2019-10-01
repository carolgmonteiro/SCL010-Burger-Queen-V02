import React from 'react';
import NavbarGeneral from '../../../app/features/nav/NavbarGeneral.js'


function ShowMenu (props) {

	//const children = props.children;
	return (
		<React.Fragment>
			<NavbarGeneral/>
			{props.children}
		</React.Fragment>
		); 
		
}



export default NavbarGeneral;
