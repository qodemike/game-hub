import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/RenderWebsody.png'
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
        <Image src={logo} boxSize='50px'/>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar