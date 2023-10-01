import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./SortSelector.module.css";

interface Props {
    sortOrder: string;
    onSelectSortOrder: (sortOrder: string) => void;
}

function SortSelector({ onSelectSortOrder , sortOrder }: Props) {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "name", label: "Alphabet" },
        { value: "-released", label: "Release date" },
        { value: "-added", label: "Date added" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Rating" },
    ];

    const order =  sortOrders.find((order) => order.value === sortOrder )

    return (
        <Menu >
            <MenuButton className={styles.button} as={Button} rightIcon={<BsChevronDown />}>
                <span className={styles.buttonText}> Order by:</span> <strong className={styles.buttonStrong}> {order?.label || "Relevance"}</strong>
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        onClick={() => onSelectSortOrder(order.value)}
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
