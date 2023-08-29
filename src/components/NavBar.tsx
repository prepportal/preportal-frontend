import { HStack, IconButton } from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface props {
  DrawerType: string;
  onShowSidebar: () => void;
}

const NavBar = ({ DrawerType, onShowSidebar }: props) => {
  const showBtn = DrawerType === "drawer";
  return (
    <HStack padding="10px">
      {showBtn && (
        <IconButton
          icon={<BiMenuAltLeft w={10} h={12} />}
          onClick={onShowSidebar} aria-label={""}      />
      )}
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;