import React from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { connect, useDispatch, useSelector } from "react-redux";
import { useAsyncFn } from "react-use";
import { logout } from "../../redux/actions/sessionActions";

import {
  __LOGGED_IN_BUTTONS,
  __LOGGED_OUT_BUTTONS,
} from "../../generals/objects/navButtons";
import { ReduxState } from "../../redux/types";
import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";
import NavBarLinks from "./NavBarLinks";

const NavBar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: ReduxState) => state.session.isAuthenticated
  );
  const [windowDimensions, setWindowDimensions] = React.useState<number | null>(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  const [state, fetch] = useAsyncFn(async () => {
    const response = await dispatch(logout());
    return response;
  }, []);

  const logoutUser = () => {
    fetch().then(() => router.push("/login"));
  };

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowDimensions(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box w="100%" h="8%" bg="#a2d3c2" shadow="xl">
      <Box
        h="100%"
        w="90%"
        d="flex"
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <NavBarLogo router={router} />
        {windowDimensions < 1024 ? (
          <NavBarMenu
            isAuthenticated={isAuthenticated}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            logoutUser={logoutUser}
            router={router}
          />
        ) : (
          <NavBarLinks
            isAuthenticated={isAuthenticated}
            logoutUser={logoutUser}
            router={router}
          />
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
