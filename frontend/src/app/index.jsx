import AppRoutes from "./router";
import { ModalProvider } from "../context/modal-context";

const App = () => {
  return (
    <ModalProvider>
      <AppRoutes />
    </ModalProvider>
  );
};

export default App;
