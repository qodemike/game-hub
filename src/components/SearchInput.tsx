import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import styles from "./SearchInput.module.css";
import { FormEvent, useRef, useState } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";


function SearchInput() {
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const {scrollToTop} = useGameQueryStore();
  const [hasType, setHasType] = useState(false);
  const navigate = useNavigate();


  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current?.value) {
      scrollToTop();
      setSearchText(ref.current.value);
    }
    navigate("/");
  };

  const handleTyping = () => {
      if (ref.current?.value){
        setHasType(true)
      }
      else 
        setHasType(false);
  }

  const handleClearSearch= () => {
    if (ref.current?.value) {
      ref.current.value = "";
      setHasType(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <InputGroup >
        <InputLeftElement paddingLeft={"20px"} >
        <SearchIcon width={"21px"} height={"21px"} onClick={handleSearch} className={styles.searchIcon} />
        </InputLeftElement>
        <Input
          className={styles.searchInput}
          ref={ref}
          padding={"20px"}
          paddingLeft={"60px"}
          fontFamily={"Inter"}
          backgroundColor={"var(--color-gray)"}
          _hover={{backgroundColor: "gray.900"}}
          _focus={{backgroundColor: "gray.900"}}
          borderRadius={"15px"}
          placeholder="Search"
          variant={"filled"}
          onChange={handleTyping}
        />
        <InputRightElement paddingRight={"30px"} >
          <IconButton
            aria-label="Clear Search Text"
            icon={<CloseIcon />}
            variant="unstyled"
            display={hasType ? "inline" : "none"}
            onClick={handleClearSearch}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
