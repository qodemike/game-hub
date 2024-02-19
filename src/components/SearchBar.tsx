import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Spinner,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";
import useSearchBar from "../hooks/useSearchBar";
import Games from "../entities/Games";

const SearchBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const { scrollToTop } = useGameQueryStore();
  const [dynamicSearchText, setDynamicSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const navigate = useNavigate();

  const { data: suggestions, isFetching } = useSearchBar(dynamicSearchText);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    scrollToTop();
    setSearchText(inputRef.current.value);
    navigate("/");
  };

  const handleOnChange = () => {
    setDynamicSearchText(inputRef.current.value);
  };

  const handleOnClearSearch = () => {
    inputRef.current.value = "";
    setDynamicSearchText("");
  };

  const handleSelectSuggestion = (game: Games) => {
    setSearchText(game.name);
    setDynamicSearchText("");
    navigate("/");
  };

  return (
    <>
      <Box>
        <form
          onSubmit={handleSearch}
          style={{ position: "relative", width: "450px" }}
        >
          <InputGroup
            position={"absolute"}
            transition={"all"}
            top={"-20px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box width={"full"}>
              <InputLeftElement marginLeft={"5px"}>
                <SearchIcon
                  width={"20px"}
                  height={"20px"}
                  cursor={"pointer"}
                  color={"gray"}
                  onClick={handleSearch}
                />
              </InputLeftElement>
              <Input
                ref={inputRef}
                paddingY={"10px"}
                paddingLeft={"50px"}
                fontFamily={"Inter"}
                fontSize={"sm"}
                background={"gray.700"}
                _hover={{ background: "gray.900" }}
                _focus={{ background: "gray.900" }}
                borderRadius={"10px"}
                placeholder="Search"
                variant={"unstyled"}
                onChange={handleOnChange}
              />
              <InputRightElement paddingRight={"30px"}>
                <CloseIcon
                  width={"12px"}
                  cursor={"pointer"}
                  onClick={handleOnClearSearch}
                  display={ inputRef.current.value ? "inline" : "none"}
                />
              </InputRightElement>
            </Box>

            {dynamicSearchText &&
              (isFetching ? (
                <Box
                  minHeight={'205px'}
                  background={"gray.800"}
                  border={"1px solid var(--color-line)"}
                  borderRadius={"10px"}
                  display={"flex"}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Spinner/>
                </Box>
              ) : (
                <Box
                  background={"gray.800"}
                  border={"1px solid var(--color-line) "}
                  borderRadius={"10px"}
                  display={"flex"}
                  flexDirection={"column"}
                  flexShrink={"nowrap"}
                  overflow={"hidden"}
                >
                { suggestions?.results.length ?  suggestions?.results.map((game) => (
                    <Text
                      onClick={() => handleSelectSuggestion(game)}
                      paddingY={"10px"}
                      paddingX={"20px"}
                      fontSize={"sm"}
                      _hover={{ background: "gray.700" }}
                      cursor={"pointer"}
                    >
                      {game.name}
                    </Text>
                  ))
                :
                <Text paddingY={"20px"} paddingX={"30px"} color={"gray.500"} fontSize={"sm"}>
                  No Results Found
                </Text>
                }
                </Box>
              ))}
          </InputGroup>
        </form>
      </Box>
    </>
  );
};

export default SearchBar;