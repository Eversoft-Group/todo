import User from "./pages/user";
import Todo from "./pages/todo"
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
    <div className="App container">
      <ToastContainer />
      <User />
      <Todo />
    </div>
    </Provider>
  );
};

export default App;
