import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <HStack>
      <Button onClick={toggleColorMode} type="button">
        {isDarkMode ? <BsSun /> : <BsMoon />}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;