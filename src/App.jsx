import Header from "./components/Header";
import Meal from "./components/Meal";
import {CartContextProvider} from "./components/store/CartContext";
import { UserProgressContextProvider } from "./components/store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
      <Header />
      <Meal />
      <Cart/>
      <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
    
  );
}

export default App;
