import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.svg";
import SearchBar from "./Searchbar";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize="50px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;