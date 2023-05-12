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
		/*
			React has another special built-in object called state, which allows components
			to create and manage their own data. So unlike props, components cannot pass data 
			with state, but they can create and manage it internally.
		*/
		this.state = {
			products: [
				//storing different products
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

	//handle the cart product on it using cartItem from img onClick
	handleIncreaseQuantity = (product) => {
		console.log("Hey please Inc the Qty", product);
		//we need product first
		const { products } = this.state;
		//now i want to know the index of the product inside the products[]
		const index = products.indexOf(product);
		//after that we can change the index of that particular quantity only
		products[index].qty += 1;

		//as we all know that state can me modify directly but can be update
		//like this
		//now we can update the setState
		this.setState({
			products: products,
		});
	};

	handleDecreaseQuantity = (product) => {
		console.log("show the product details", product);

		const { products } = this.state;

		const index = products.indexOf(product);

		if (products[index].qty === 0) {
			return;
		}

		products[index].qty -= 1;

		//as we all know that state can me modify directly but can be update
		//like this
		//now we can update the setState
		//as we know props can update directly so we use setState to update props
		this.setState({ products: products });
	};

	//here implemented the delete function
	handleDeleteProduct = (id) => {
		//id help deleting the specified product
		const { products } = this.state;
		const items = products.filter((item) => item.id !== id); //this will return array [{contain id != id passed}]

		this.setState({
			products: items,
		});
	};

	/*
		The render() method in React is responsible for returning the JSX (JavaScript XML)
		that defines the structure and content of the component's output.It is a required 
		method in class components and it determines what will be displayed on the screen.
	*/

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
						return (
							<CartItem
								products={product}
								key={product.id}
								onIncreaseQuantity={this.handleIncreaseQuantity}
								onDecreaseQuantity={this.handleDecreaseQuantity}
								onDeleteProduct={this.handleDeleteProduct}
							/>
						);
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
