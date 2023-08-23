import { HStack, IconButton } from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface props {
  DrawerType: string;
  OnClose: () => void;
}

const NavBar = ({ DrawerType, OnClose }: props) => {
  const showBtn = DrawerType === "drawer";
  return (
    <HStack padding="10px">
      {showBtn && (
        <IconButton
          icon={<BiMenuAltLeft w={8} h={8} />}
          variant="ghost"
          onClick={OnClose} aria-label={""}      />
      )}
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;