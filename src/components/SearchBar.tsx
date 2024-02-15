import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { TfiAngleLeft } from "react-icons/tfi";
import styles from "./SearchInput.module.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const  SearchBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const { scrollToTop } = useGameQueryStore();
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
    if (ref.current?.value) {
      setHasType(true);
    } else setHasType(false);
  };

  const handleClearSearch = () => {
    if (ref.current?.value) {
      ref.current.value = "";
      setHasType(false);
    }
  };


  return (
    <>
      <form className={styles.form} onSubmit={handleSearch}>
        <InputGroup>
          <InputLeftElement paddingLeft={"30px"}>
            <SearchIcon
              width={"20px"}
              height={"20px"}
              cursor={"pointer"}
              color={"gray"}
              onClick={handleSearch}
            />
          </InputLeftElement>
          <Input
            ref={ref}
            paddingY={"20px"}
            paddingLeft={"57px"}
            fontFamily={"Inter"}
            backgroundColor={"var(--color-gray)"}
            _hover={{ backgroundColor: "gray.900" }}
            _focus={{ backgroundColor: "gray.900" }}
            borderRadius={"10px"}
            placeholder="Search"
            variant={"filled"}
            onChange={handleTyping}
          />
          <InputRightElement paddingRight={"30px"}>
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
    </>
  );
}

export default SearchBar;
