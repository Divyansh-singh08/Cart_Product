//this is the main root file to start
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

//this is the functional components

// function App() {
// 	return (
// 		<div className="App">
// 			<>
// 				{/* <h1>Cart</h1> */}
// 				{/* here we render Cart */}
// 				<Navbar/>
// 				<Cart/>
// 				{/* here we render CartItems */}
// 				{/* <CartItem /> */}
// 			</>
// 		</div>
// 	);
// }

//now we making it as a class components bcz now we want navbar should access some state properties
class App extends React.Component {
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
					img: "https://plus.unsplash.com/premium_photo-1681504446264-708b83f4ea12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
					id: 1,
				},
				{
					price: 999,
					title: "Mobile phone",
					qty: 8,
					img: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80",
					id: 2,
				},
				{
					price: 9999,
					title: "Laptop",
					qty: 15,
					img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
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
	getCartCounts = () => {
		const { products } = this.state;

		let count = 0;

		//loop over the products and check it
		products.forEach((product) => {
			count += product.qty;
		});

		return count;
	};

	getCartTotals = () => {
		const { products } = this.state;

		let cartTotal = 0;

		products.map((prod)=>{
			cartTotal += prod.qty * prod.price;
		})

		return cartTotal;
	}

	render() {
		const { products } = this.state;
		return (
			//Written the JSX
			<div className="App">
				<>
					{/* <h1>Cart</h1> */}
					{/* here we render Cart */}
					{/* now here we pass props into the Navbar component for count product */}
					<Navbar counts={this.getCartCounts()} />
					<Cart
						products={products}
						onIncreaseQuantity={this.handleIncreaseQuantity}
						onDecreaseQuantity={this.handleDecreaseQuantity}
						onDeleteProduct={this.handleDeleteProduct}
					/>
					{/* here we render CartItems */}
					{/* <CartItem /> */}
				</>
				<div className="app-totals">
					Totals:{this.getCartTotals()}
				</div>
			</div>
		);
	}
}

export default App;
