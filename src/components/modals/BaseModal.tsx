import { Overlay, ModalContent, Button, FlexBetween, Header, Icon } from "../styles/styles";
import { ReactNode } from "react";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onSave: () => void;
  title: string;
  saveText?: string,
  cancelText?: string
}

const BaseModal = ({ isOpen, onClose, onSave, children, title, saveText, cancelText }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Icon style={{width: '45px'}}><X onClick={onClose}/></Icon>
        <Header size="40px">{title}</Header>
        {children}
        <FlexBetween>
          <Button onClick={onSave}>{saveText || 'Save'}</Button>
          <Button onClick={onClose} $lined>{cancelText || 'Cancel'}</Button>
        </FlexBetween>
      </ModalContent>
    </Overlay>
  );
};

export default BaseModal;