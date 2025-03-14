import { createContext, useState } from "react";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [modalStatus, setModal] = useState(false);
  const [modalConfig, setConfig] = useState({});

  const openModal = (config) => {
    setConfig(config);
    setModal(true);
  };

  const closeModal = () => {
    setConfig({});
    setModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        config: { modalConfig },
        states: { modalStatus, openModal, closeModal },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
export default ModalContext;
