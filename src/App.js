import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import CartItem from "./Components/CartItem";
import store from "./Redux/Store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
        <CartItem />
      </div>
    </Provider>
  );
}
