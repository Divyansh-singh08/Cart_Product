// import React from "react";

// //CartItem inherit the functionality form the ReactComponent
// //class base component
// //function base component
// // class CartItem extends React.Component {
// //adding state to your components
// //state is a way to store the local data for that particular components
// //state is a plane js object
// // constructor() {
// // 	super(); //this is bcz we inherit form parent class so we need to call the constructor of the parent class
// // 	this.state = {
// // 		price: 999,
// // 		title: "Phone",
// // 		qty: 1,
// // 		img: "",
// // 	}; //grab the data from constructor and use in jsx
// // 	//binding for the  this so that u can use it by other object to
// // 	this.increaseQty = this.increaseQty.bind(this);
// // 	//if there is lot then we can user arrow function and arrow
// // 	//arrow function will bind automatically to it
// // 	this.decreaseQty = this.decreaseQty.bind(this);

// //     this.testing();
// // }
// //event listener in react
// // increaseQty() {
// // 	console.log("this.state", this.state);
// // 	// this.state.qty += 1; //now updating bcz react don't know
// // 	//so for that react give setState function which is coming from react component

// // 	//setState method-1 object form
// // 	// this.setState({
// // 	// 	qty: this.state.qty + 1,//doing shallow merge
// // 	// },
// // 	//this will execute when our state will be finished
// // 	// ()=>{});

// // 	//setState method-2 function form
// // 	this.setState(
// // 		(prevState) => {
// // 			return {
// // 				qty: prevState.qty + 1,
// // 			};
// // 		},
// // 		//this will execute when our state will be finished
// // 		/*### ->>> NOTE: TODO:
// //             The callback function is invoked when setState is
// //             finished and the component gets rendered.
// //             Since setState() is asynchronous the callback
// //             function is used for any post action.
// //         */
// // 		() => {
// // 			console.log("this.state", this.state);
// // 		}
// // 	);
// // }

// // //setState perform different in except react event
// // testing() {
// // 	const promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			resolve("done");
// // 		}, 5000);
// // 	});
// // 	promise.then(() => {
// // 		//setState act like a synchronous call
// // 		// this.setState({ qty: 100 });
// // 		this.setState({ qty: this.state.qty + 10 });
// // 		this.setState({ qty: this.state.qty + 10 });
// // 		this.setState({ qty: this.state.qty + 10 });

// // 		console.log("state", this.state);
// // 	});
// // }

// // decreaseQty() {
// // 	// console.log("this-state", this.state);
// // 	const { qty } = this.state;

// // 	if (qty === 0) {
// // 		return;
// // 	}

// // 	this.setState(
// // 		(prevState) => {
// // 			return {
// // 				qty: prevState.qty - 1,
// // 			};
// // 		},
// // 		() => {
// // 			console.log("this.state", this.state);
// // 		}
// // 	);
// // }

// //now converting class component into the functional components

// class CartItem extends React.Component {
// 	// const CartItem = (props) => {
// 	// this method will return jsx
// 	render() {
// 		//here we grab the Props
// 		// and show from here
// 		// console.log("this.props", this.props);

// 		//use object destructuring js
// 		// const { price, title, qty } = this.state;
// 		//so we can use props
// 		// const { price, title, qty } = this.props;
// 		// const { price, title, qty } = this.props.products;//now we don't need this as we are in functional components
// 		const { price, title, qty } = this.props.products;
// 		// console.log(price, title, qty);

// 		//to make a clean code now we use
// 		const {
// 			products,
// 			onIncreaseQuantity,
// 			onDecreaseQuantity,
// 			onDeleteProduct,
// 			// } = this.props;
// 		} = this.props;

// 		return (
// 			<div className="cart-item">
// 				<div className="left-block">
// 					<img style={styles.images} alt="" />
// 				</div>
// 				<div className="right-block">
// 					<div style={{ fontSize: 25, color: "red" }}> {title} </div>
// 					<div style={{ fontWeight: "bold", color: "black" }}> Rs {price} </div>
// 					<div style={{ color: "green" }}> Qty: {qty} </div>
// 					<div className=".cart-item-actions">
// 						{/* Buttons */}
// 						<img
// 							alt="increase"
// 							className="action-icons"
// 							src="https://img.icons8.com/?size=512&id=59864&format=png"
// 							//sending the reference of the increaseQty
// 							// onClick={this.increaseQty.bind(this)}
// 							// onClick={this.increaseQty}
// 							//now just call the function instead of reference
// 							// onClick={ ()=>{this.props.onIncreaseQuantity(this.props.products)} }
// 							//clean code
// 							onClick={() => {
// 								onIncreaseQuantity(products);
// 							}}
// 						/>
// 						<img
// 							alt="decrease"
// 							className="action-icons"
// 							src="https://img.icons8.com/?size=512&id=59837&format=png"
// 							onClick={() => {
// 								onDecreaseQuantity(products);
// 							}}
// 						/>
// 						{console.log("this is console", this.props.products)}
// 						<img
// 							alt="delete"
// 							className="action-icons"
// 							src="https://img.icons8.com/?size=512&id=102350&format=png"
// 							onClick={() => {
// 								onDeleteProduct(products.id);
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// // we can't css(style) like simple in jsx so we use
// //object to style
// const styles = {
// 	images: {
// 		height: 120,
// 		width: 120,
// 		borderRadius: 30,
// 		backgroundColor: "tomato",
// 	},
// };

// export default CartItem;

// //some question related to it
// // What happens when you call setState() inside render() method?
// // answer -->>> Call to setState() invokes render().It gets into an infinite loop.

import React from "react";

const CartItem = (props) => {
	const { price, title, qty } = props.products;

	return (
		<div className="cart-item">
			<div className="left-block">
				<img style={styles.images} alt="" src={props.products.img} />
			</div>
			<div className="right-block">
				<div style={{ fontSize: 25, color: "red" }}>{title}</div>
				<div style={{ fontWeight: "bold", color: "black" }}>Rs {price}</div>
				<div style={{ color: "green" }}>Qty: {qty}</div>
				<div className=".cart-item-actions">
					{/* Buttons */}
					<img
						alt="increase"
						className="action-icons"
						src="https://img.icons8.com/?size=512&id=59864&format=png"
						onClick={() => {
							props.onIncreaseQuantity(props.products);
						}}
					/>
					<img
						alt="decrease"
						className="action-icons"
						src="https://img.icons8.com/?size=512&id=59837&format=png"
						onClick={() => {
							props.onDecreaseQuantity(props.products);
						}}
					/>
					<img
						alt="delete"
						className="action-icons"
						src="https://img.icons8.com/?size=512&id=102350&format=png"
						onClick={() => {
							props.onDeleteProduct(props.products.id);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

const styles = {
	images: {
		height: 120,
		width: 120,
		borderRadius: 30,
		backgroundColor: "tomato",
	},
};

export default CartItem;
