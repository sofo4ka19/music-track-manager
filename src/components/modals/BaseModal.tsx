import { Overlay, ModalContent, Button, FlexBetween, Header } from "../styles/styles";
import { ReactNode } from "react";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onSave: () => void;
  title: string;
}

const BaseModal = ({ isOpen, onClose, onSave, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <X onClick={onClose}/>
        <Header size="40px">{title}</Header>
        {children}
        <FlexBetween>
          <Button onClick={onSave}>Save</Button>
          <Button onClick={onClose} $lined>Cancel</Button>
        </FlexBetween>
      </ModalContent>
    </Overlay>
  );
};

export default BaseModal;