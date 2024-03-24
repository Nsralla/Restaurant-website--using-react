import { useContext } from "react";
import CartContext from "./store/CartContext";
import UserProgressContext from "./store/UserProgressContext";
import Modal from "./Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";
export default function Cart(){
    const {items, addItem, removeItem} = useContext(CartContext);
    const cartTotal = items.reduce((total,item)=>{ return (total + item.price* item.quantity)},0);
    const userProgressCtx = useContext(UserProgressContext);


    function handleCloseCartInfo(){
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout(){
        userProgressCtx.showCheckout();
    }

    return(
        <Modal
        onClose={userProgressCtx.progress === 'cart' ? handleCloseCartInfo : undefined}

            className='cart'
            open={userProgressCtx.progress === 'cart'}>
            <h2>
                You Cart
            </h2>
                <ul>
                    {items.map((item)=>(<CartItem onIncrease={()=>addItem(item)} onDecrease={()=>removeItem(item.id)} key={item.id} item={item}/>))}
                </ul>
                <p className="cart-total">
                    ${cartTotal}
                </p>
                <p className="modal-actions">
                    <Button textOnly onClick={handleCloseCartInfo}>Close</Button>
                    {items.length > 0 && <Button onClick={handleGoToCheckout}> Go to checkout</Button>}
                </p>
        </Modal>
    );
};