import { FaWindows, FaXbox, FaApple, FaLinux } from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import Platform  from "../entities/Platform";
import { IconType } from "react-icons";
import { BsNintendoSwitch, BsAndroid2, BsGlobe } from "react-icons/bs";
import { RiPlaystationLine } from "react-icons/ri";

interface Prop {// Listing the packages installed and thier versions.
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Prop) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: RiPlaystationLine,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: FaApple,
    web: BsGlobe,
    android: BsAndroid2,
  };
  return (
    <HStack gap={"13px"}>
      {platforms.map((platform) => (
        <Icon
          boxSize={4}
          key={platform.slug}
          as={iconMap[platform.slug]}
          color="gray.300"
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
