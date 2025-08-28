import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App.jsx";
import BlogProvider from './context/BlogContext'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </BlogProvider>
    </BrowserRouter>
  </StrictMode>
);
