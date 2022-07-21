import React from "react";
import { useDispatch } from "react-redux";
import { increase, removeItem, decrease } from "../features/Cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

function CartItem({ id, title, img, price, amount }) {
	const dispatch = useDispatch();

	return (
		<article className='cart-item'>
			<img src={img} alt={title}></img>
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				<button
					className='remove-btn'
					onClick={() => {
						dispatch(removeItem(id));
					}}
				>
					remove
				</button>
			</div>
			<div>
				<button
					className='amount-btn'
					onClick={() => {
						dispatch(increase({
                            id,
                        }));
					}}
				>
					<ChevronUp />
				</button>
				<p className='amount'>{amount}</p>
				<button className='amount-btn' onClick={()=> {
                    if (amount === 1) {
                       dispatch(removeItem(id))
                    }else {
                        dispatch((decrease({
                            id,
                        })))
                    }
                }}>
					<ChevronDown />
				</button>
			</div>
		</article>
	);
}

export default CartItem;
