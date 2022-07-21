import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartItems } from "./features/Cart/cartSlice";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

function App() {
  let { cartItems, isLoading } = useSelector((store)=> store.cart)
  const dispatch = useDispatch()
   const [open, setOpen] = useState(false)

  useEffect(()=> {
    dispatch(calculateTotal())
  }, [cartItems])


  useEffect(()=> {
    dispatch(getCartItems())
  }, [])


  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  return ( 
    <main>
      {open ? <Modal open = {open} setOpen = {setOpen}  /> : ""}
      <Navbar />
      <CartContainer open = {open} setOpen = {setOpen} />
    </main>
  );
}
export default App;
