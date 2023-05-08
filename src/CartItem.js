import React from "react";

//CartItem inherit the functionality form the ReactComponent
//class base component
//function base component
class CartItem extends React.Component {
	// this method will return jsx
	render() {
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.images} alt="" />
				</div>
				<div className="right-block">
					<div style={{ fontSize: 25,color:'red'}} > Phone </div>
					<div style={{ fontWeight:'bold', color:'black'}} > Rs 999 </div>
					<div style={{ color:'green'}} > Qty: 1 </div>
					<div className=".cart-item-actions">{/* Buttons */}</div>
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
        backgroundColor:' #531ba1',
	},
};

export default CartItem;
