import BaseModal from "./BaseModal"

interface ConfirmModalProps{
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    action: string
}
const ConfimModal = ({isOpen, onClose, onSave, action}:ConfirmModalProps) => {
    return(
        <BaseModal isOpen={isOpen} onClose={onClose} onSave={onSave} title={`Do you really want to  ${action}?`} saveText="Yes" cancelText="No">
            <></>
        </BaseModal>
    )
}
export default ConfimModal