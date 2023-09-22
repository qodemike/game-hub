import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import styles from "./searchInput.module.css";
import { useRef } from "react";

interface Props{
    onSearch: (searchText: string) => void;
}

function SearchInput({onSearch}: Props ) {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) onSearch(ref.current.value)
        }}>
        <InputGroup>
            <Input
                ref={ref}
                padding={"20px"}
                fontSize={"14px"}
                fontFamily={"Inter"}
                borderRadius={"30px"}
                placeholder="Search"
                variant={"filled"}
            />
            <InputRightElement paddingRight={"30px"} >
                <SearchIcon  className={styles.searchIcon} />
            </InputRightElement>
        </InputGroup>
        </form>
    );
}

export default SearchInput;
