//this is the main root file to start
import React from "react";
import CartItem from "./CartItem";

function App() {
	return (
		<div className="App">
			<>
				<h1>Cart</h1>
				{/* here we render CartItems */}
				<CartItem />
			</>
		</div>
	);
}

export default App;
