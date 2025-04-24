import { Overlay, ModalContent, Button, FlexBetween } from "../styles/styles";
import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BaseModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <X />
        {children}
        <FlexBetween>
          <Button>Save</Button>
          <Button $lined>Cancel</Button>
        </FlexBetween>
      </ModalContent>
    </Overlay>
  );
};

export default BaseModal;