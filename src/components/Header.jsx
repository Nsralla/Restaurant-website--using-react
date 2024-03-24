import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx'
import { useContext } from 'react'
import CartContext from './store/CartContext.jsx'
import UserProgressContext from './store/UserProgressContext.jsx'

const Header = () => {
    const {items, addItem, removeItem} = useContext(CartContext);
    const totalNumberOfItems = items.reduce((total,item)=>{
        return total + item.quantity;
    },0);

    const userProgressCtx = useContext(UserProgressContext);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="Logo img" />
            <h1> ReactFOOD</h1>
        </div>
        <nav>
            <Button textOnly  onClick={handleShowCart}> Cart    {totalNumberOfItems}
            </Button>
        </nav>
    </header>
    )
}

export default Header