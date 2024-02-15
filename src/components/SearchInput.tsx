import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Box,
  HStack,
} from "@chakra-ui/react";
import { TfiAngleLeft } from "react-icons/tfi";
import styles from "./SearchInput.module.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const { scrollToTop } = useGameQueryStore();
  const [hasType, setHasType] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [isPhone, setIsPhone] = useState(false);

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

  const handleSearchIconClick = () => {
    setIsVisible(true);
  };

  const handleOnResize = () => {
    if (window.innerWidth <= 499) {
      setIsPhone(true);
      setIsVisible(false);
    } 
    else {
      setIsPhone(false);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleOnResize);

    return () => {
      window.removeEventListener("resize", handleOnResize);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <HStack
          width={isPhone ? "100vw" : "100%"}
          paddingRight={{ base: "30px", sm: "0" }}
        >
          {isPhone ? (
            <Icon
              onClick={() => setIsVisible(false)}
              boxSize={7}
              display={"inline"}
              as={TfiAngleLeft}
            ></Icon>
          ) : null}
          <form className={styles.form} onSubmit={handleSearch}>
            <InputGroup>
              <InputLeftElement paddingLeft={"20px"}>
                <SearchIcon
                  width={"23px"}
                  height={"23px"}
                  cursor={"pointer"}
                  onClick={handleSearch}
                />
              </InputLeftElement>
              <Input
                ref={ref}
                paddingY={"20px"}
                paddingLeft={"60px"}
                fontFamily={"Inter"}
                backgroundColor={"var(--color-gray)"}
                _hover={{ backgroundColor: "gray.900" }}
                _focus={{ backgroundColor: "gray.900" }}
                borderRadius={"15px"}
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
        </HStack>
      ) : (
        <Icon
          onClick={handleSearchIconClick}
          height={"23px"}
          width={"23px"}
          as={SearchIcon}
        />
      )}
    </>
  );
}

export default SearchInput;

