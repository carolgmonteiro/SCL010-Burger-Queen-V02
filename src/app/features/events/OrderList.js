import React from 'react'

class OrderList extends React.Component {

	render() {
		return (
<ul className="list-unstyled">
			{this.props.OrderKitchen.map((app) => {
				return (

					<li key ={app.id}> 
						<p>{app.kitchen} {app.resume}</p>
					</li>
					);

			})}
		</ul>

			)
	}
}









export default OrderList;