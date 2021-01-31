import User from "./pages/user";
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
    </div>
    </Provider>
  );
};

export default App;
