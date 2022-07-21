import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/Cart/cartSlice";

function Modal({ open, setOpen }) {
	const dispatch = useDispatch();
	return (
		<aside className='modal-container'>
			<div className='modal'>
				<h4>Remove all items from your shopping cart?</h4>
				<div className='btn-container'>
					<button
						className='confirm-btn btn'
						type='button'
						onClick={() => {
							dispatch(clearCart());
                            setOpen(false)
						}}
					>
						confirm
					</button>
					<button
						className='clear-btn btn'
						type='button'
						onClick={() => setOpen(false)}
					>
						clear
					</button>
				</div>
			</div>
		</aside>
	);
}

export default Modal;
