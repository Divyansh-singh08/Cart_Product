import React from "react";

//CartItem inherit the functionality form the ReactComponent
//class base component
// class Navbar extends React.Component {
// 	render() {

//this does not have {state} so we convert into them in functional base components
const Navbar = (props) => {
	return (
		<div style={styles.nav}>
			{/* structure of navbar  */}
			<div style={styles.cartIconContainer}>
				<img
					style={styles.cartIcon}
					src="https://img.icons8.com/?size=1x&id=13014&format=png"
					alt="cart-icon"
				/>
				<span style={styles.cartCount}> {props.counts} </span>
			</div>
		</div>
	);
};

// we can't css(style) like simple in jsx so we use
//object to style
const styles = {
	nav: {
		height: 70,
		backgroundColor: "grey",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	cartIconContainer: {
		position: "relative",
	},
	cartIcon: {
		height: 52,
		marginRight: 35,
	},
	cartCount: {
		backgroundColor: "green",
		borderRadius: "50%",
		padding: "1px 7px",
		position: "absolute",
		right: 15,
		top: -1,
		color: "red",
	},
};

export default Navbar;

//some question related to it
// What happens when you call setState() inside render() method?
// answer -->>> Call to setState() invokes render().It gets into an infinite loop.
