import "./App.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "global/global.js";
import Routes from "./pages/Routes";
import AuthContextProvider from "context/AuthContext";
import ProductsContextProvider from "context/ProductsContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
