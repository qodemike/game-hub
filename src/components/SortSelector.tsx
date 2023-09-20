import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

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
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                <Text display={"inline"} fontWeight={"400"}>Order by:</Text> {order?.label || "Relevance"}
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
