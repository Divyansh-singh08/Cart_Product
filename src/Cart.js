//this cart will render to the browser
import React from "react";
import CartItem from "./CartItem";

//CartItem inherit the functionality form the ReactComponent
//class base component
//function base component
class Cart extends React.Component {
	//adding state to your components
	//state is a way to store the local data for that particular components
	//state is a plane js object
	render() {
		return (
			<>
				<div className="cart">
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</div>
			</>
		);
	}
}

export default Cart;

//**********reference************
//some question related to it
// What happens when you call setState() inside render() method?
// answer -->>> Call to setState() invokes render().It gets into an infinite loop.
