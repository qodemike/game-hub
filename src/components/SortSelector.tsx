import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./SortSelector.module.css";
import useGameQueryStore from "../store";

function SortSelector() {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Alphabet" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const order = sortOrders.find((order) => order.value === gameQuery.sortOrder);

  return (
    <Menu>
      <MenuButton
        padding={"20px 25px"}
        border={"1px solid var(--color-border-line)"}
        borderRadius={"15px"}
        backgroundColor={"gray.800"}
        _hover={{backgroundColor: "gray.700"}}
        _active={{backgroundColor: "gray.700"}}
        fontSize={"14px"}
        className={styles.button}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        <span  className={styles.buttonText}> Sort by:</span>{" "}
        <strong className={styles.buttonStrong}>
          {" "}
          {order?.label || "Relevance"}
        </strong>
      </MenuButton>
      <MenuList backgroundColor={"gray.800"}>
        {sortOrders.map((order) => (
          <MenuItem
          backgroundColor={"gray.800"}
          _hover={{backgroundColor: "gray.700"}}
            onClick={() => setSortOrder(order.value)}
            key={order.value}
          >
            {" "}
            {order.label}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
