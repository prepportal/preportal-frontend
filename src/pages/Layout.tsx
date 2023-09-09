import { useBreakpointValue, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";


const Layout = () => {const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const variant = isDrawerSidebar ? "drawer" : "sidebar";
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={3}>
        <NavBar DrawerType={variant} onShowSidebar={toggleSidebar} />
      </GridItem>
      <GridItem area="aside">
        <SideBar
          isOpen={isSidebarOpen}
          variant={variant}
          onClose={toggleSidebar}
        />
      </GridItem>
      <GridItem area="main" paddingX={3}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout