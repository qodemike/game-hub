import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";
import styles from "./PlatformSelector.module.css";

interface Props {
    onSelectedPlatform: (platform: Platform ) => void;
    selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectedPlatform, selectedPlatform}: Props ) {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <Menu>
            <MenuButton  as={Button} className={styles.buttonText} rightIcon={ <BsChevronDown/> }>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform) } >{platform.slug}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;