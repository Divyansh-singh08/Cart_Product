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

	//now u can use that state in the cart
	constructor() {
		super(); //taking data from parent
		this.state = {
			products: [
				{
					price: 99,
					title: "Watch",
					qty: 1,
					img: "",
					id: 1,
				},
				{
					price: 999,
					title: "Mobile phone",
					qty: 8,
					img: "",
					id: 2,
				},
				{
					price: 9999,
					title: "Laptop",
					qty: 15,
					img: "",
					id: 3,
				},
			],
		};
	}

	render() {
		//make a list
		const { products } = this.state;
		return (
			<>
				<div className="cart">
					{/* this are the props */}
					{/* <CartItem qty={1} price={999} title={"Watch"} img={""} /> */}
					{products.map((product) => {
						/* react did not able to different btw the product so key given */
						return <CartItem product={product} key={product.id} />;
					})}
					{/* {list.map((item) => {
						return item + 5; //this will give 6,7,8,hi5,9,10
					})} */}
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
