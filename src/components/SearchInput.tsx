import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import styles from "./SearchInput.module.css";
import { FormEvent, useRef } from "react";
import useGameQueryStore from "../store";


function SearchInput() {
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const {scrollToTop} = useGameQueryStore();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current?.value) {
      scrollToTop();
      setSearchText(ref.current.value);
    }
  };
  const handleClearSearch= () => {
    if (ref.current?.value) {
      ref.current.value = "";
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <InputGroup className={styles.inputGroup}>
        <InputLeftElement paddingLeft={"20px"} >
        <SearchIcon onClick={handleSearch} className={styles.searchIcon} />
        </InputLeftElement>
        <Input
          className={styles.searchInput}
          ref={ref}
          padding={"20px"}
          paddingLeft={"60px"}
          fontSize={"14px"}
          fontFamily={"Inter"}
          borderRadius={"30px"}
          placeholder="Search"
          variant={"filled"}
        />
        <InputRightElement paddingRight={"30px"} >
          <IconButton
            aria-label="Clear Search Text"
            icon={<CloseIcon />}
            variant="unstyled"
            onClick={handleClearSearch}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
