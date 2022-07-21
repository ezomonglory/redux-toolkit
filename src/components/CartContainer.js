import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

function CartContainer({ open, setOpen }) {
	const { cartItems, amount, total } = useSelector((store) => store.cart);
	

	if (amount < 1) {
		return (
			<section className='cart'>
				<header>
					<h2>Your cart</h2>
					<h4 className='empty-cart'>is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className='cart'>
			<header>
				<h2>Your cart</h2>
			</header>
			{cartItems.map((item) => {
				return <CartItem {...item} key={item.id} />;
			})}
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						total <span>${total.toFixed(2)}</span>
					</h4>
				</div>
				<button
					className='btn clear-btn'
					onClick={()=> {
						setOpen(true)
					}}
				>
					Clear cart
				</button>
			</footer>
		</section>
	);
}

export default CartContainer;
