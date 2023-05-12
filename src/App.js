//this is the main root file to start
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

//this is the functional components
function App() {
	return (
		<div className="App">
			<>
				{/* <h1>Cart</h1> */}
				{/* here we render Cart */}
				<Navbar/>
				<Cart/>
				{/* here we render CartItems */}
				{/* <CartItem /> */}
			</>
		</div>
	);
}

export default App;
