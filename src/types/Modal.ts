export interface ModalType {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalProps {
  onClose: () => void;
}
