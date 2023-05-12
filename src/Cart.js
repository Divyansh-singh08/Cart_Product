//this cart will render to the browser
import React from "react";
import CartItem from "./CartItem";

//CartItem inherit the functionality form the ReactComponent
//class base component
//function base component
// class Cart extends React.Component {//make it functional base
const Cart = (props) => {
	//make a list
	const { products } = props;
	return (
		<>
			<div className="cart">
				{/* this are the props */}
				{/* <CartItem qty={1} price={999} title={"Watch"} img={""} /> */}
				{products.map((product) => {
					/* react did not able to different btw the product so key given */
					return (
						<CartItem
							products={product}
							key={product.id}
							onIncreaseQuantity={props.onIncreaseQuantity}
							onDecreaseQuantity={props.onDecreaseQuantity}
							onDeleteProduct={props.onDeleteProduct}
						/>
					);
				})}
				{/* {list.map((item) => {
						return item + 5; //this will give 6,7,8,hi5,9,10
					})} */}
			</div>
		</>
	);
};

export default Cart;

//**********reference************
//some question related to it
// What happens when you call setState() inside render() method?
// answer -->>> Call to setState() invokes render().It gets into an infinite loop.
