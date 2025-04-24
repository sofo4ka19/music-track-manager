import { Input, Label } from "./styles/styles";

interface InputProps{
    title: string,
    type?: string,
    value?: string
    required?:boolean
}
const InputInfo = ({title, type, value, required}: InputProps) => {
    return(
        <>
            <Label>{title}</Label>
            <Input required={required} type={type || "text"} value={value || ""} placeholder={`enter ${title}`}/>
        </>
    )
}
export default InputInfo