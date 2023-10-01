import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/Bronsen Dark.png'
import ColorModeSwitch from "./ColorModeSwitch"
import styles from './NavBar.module.css'
import SearchInput from "./SearchInput"
import { GameQueries } from "../App"


function NavBar(searchText: GameQueries) {
  return (
    <HStack className={styles.navBar} justifyContent={"space-between"}  padding="16px">
        <Image src={logo} className={styles.logo}/>
          <SearchInput />
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar