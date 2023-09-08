import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../services/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: {[key: string]: IconType} = {
    // name: PlayStation 
    // slug: playstation. In slug every word is small case. Better to rely on the slug because it is not supposed to change
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
  };
  return (
    <HStack marginY={1.5}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
