// Routes dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Safe Route
import App from "./routes/app/app";
import BookDetails from "./routes/app/book_details";
import Dashboard from "./routes/app/dashboard";
import SearchBook from "./routes/app/search_book";

// Auth
import Register from "./routes/auth/register";
import Login from "./routes/auth/login";

// Errors
import P404 from "./routes/error/404";
import P500 from "./routes/error/500";

// Modal Context
import { useContext } from "react";
import ModalContext from "../context/modal-context";

// Catalog Context
import { CardSizeProvider } from "../features/catalog/context/card_size";

// Components
import { Modal } from "../components/ui/modal/modal";
import Layout from "../components/layouts/route-layout/layout";

const AppRoutes = () => {
  const { states, config } = useContext(ModalContext);
  const { modalConfig } = config;
  const { modalStatus, closeModal } = states;

  return (
    <Router>
      {modalStatus && (
        <Modal defaultOnClick={closeModal} config={modalConfig} />
      )}
      <Routes>
        {/* Safe Routes*/}
        <Route
          path="/"
          element={
            <CardSizeProvider>
              <Layout />
            </CardSizeProvider>
          }
        >
          <Route index element={<App />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="filter" element={<SearchBook />} />
          <Route path="book-details" element={<BookDetails />} />
        </Route>
        {/* */}

        {/* Auth*/}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<P404 />} />
        <Route path="/500" element={<P500 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
