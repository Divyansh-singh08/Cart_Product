import React from "react";

//CartItem inherit the functionality form the ReactComponent
//class base component
//function base component
class CartItem extends React.Component {
	//adding state to your components
	//state is a way to store the local data for that particular components
	//state is a plane js object
	constructor() {
		super(); //this is bcz we inherit form parent class so we need to call the constructor of the parent class
		this.state = {
			price: 999,
			title: "Phone",
			qty: 1,
			img: "",
		}; //grab the data from constructor and use in jsx
		//binding for the  this so that u can use it by other object to
		this.increaseQty = this.increaseQty.bind(this);
		//if there is lot then we can user arrow function and arrow
		//arrow function will bind automatically to it
	}
	//event listener in react
	increaseQty() {
		
		console.log("this.state", this.state);
        // this.state.qty += 1; //now updating bcz react don't know
		//so for that react give setState function which is coming from react component

		//setState method-1 object form
		// this.setState({
		// 	qty: this.state.qty + 1,//doing shallow merge
		// });

		//setState method-2 function form
		this.setState((prevState) => {
			return {
				qty: prevState.qty + 1,
			};
		});
        
	}

	// this method will return jsx
	render() {
		//use object destructuring js
		const { price, title, qty } = this.state;

		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.images} alt="" />
				</div>
				<div className="right-block">
					<div style={{ fontSize: 25, color: "red" }}> {title} </div>
					<div style={{ fontWeight: "bold", color: "black" }}> Rs {price} </div>
					<div style={{ color: "green" }}> Qty: {qty} </div>
					<div className=".cart-item-actions">
						{/* Buttons */}
						<img
							alt="increase"
							className="action-icons"
							src="fa-solid fa-circle-plus"
							//sending the reference of the increaseQty
							// onClick={this.increaseQty.bind(this)}
							onClick={this.increaseQty}
						/>
						<img
							alt="decrease"
							className="action-icons"
							src="https://icons8.com/icon/WNfr28fGMSmv/minus"
						/>
						<img
							alt="delete"
							className="action-icons"
							src="https://www.flaticon.com/free-icon/bin_9789276?term=delete&page=1&position=45&origin=search&related_id=9789276"
						/>
					</div>
				</div>
			</div>
		);
	}
}

// we can't css(style) like simple in jsx so we use
//object to style
const styles = {
	images: {
		height: 120,
		width: 120,
		borderRadius: 30,
		backgroundColor: " #531ba1",
	},
};

export default CartItem;
