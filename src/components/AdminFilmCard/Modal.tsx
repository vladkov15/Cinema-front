import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;