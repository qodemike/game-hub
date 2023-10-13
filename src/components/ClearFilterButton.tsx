import { Button } from "@chakra-ui/react";
import styles from './ClearFilterButton.module.css'
import useGameQueryStore from "../store";


function PlatformSelector() {
    const clearGameQuery = useGameQueryStore(s => s.clearGameQuery);
    return (
        <Button onClick={() => clearGameQuery()} backgroundColor={"gray.100"} color={"gray.900"} className={styles.btn}>Clear filters</Button>
    );
}

export default PlatformSelector;
