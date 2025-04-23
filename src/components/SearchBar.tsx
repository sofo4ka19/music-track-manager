import { Search } from "lucide-react";
import { FlexBetween, Icon, Input } from "./styles/styles";

const SearchBar: React.FC<{width: string}> = ({width}) => {
    return(
        <FlexBetween width={width}>
            <Input/>
            <Icon><Search/></Icon>
        </FlexBetween>
    )
}
export default SearchBar