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
import { logout } from "../redux/actions/sessionActions";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  NavBarLogoProps,
  NavBarMenuProps,
  NavBarProps,
} from "../typescript/components";
import {
  __LOGGED_IN_BUTTONS,
  __LOGGED_OUT_BUTTONS,
} from "../generals/objects/navButtons";
import { ReduxState } from "../redux/types";

const NavBarLogo: React.FC<NavBarLogoProps> = ({ router }) => {
  return (
    <Box>
      <Box h="100%" d="flex" alignItems="center">
        <Box
          w={{ base: "48px", md: "60px" }} // Fix this for different viewports
          h={{ base: "48px", md: "58px" }} // Fix this for different viewports
          borderRadius="10px"
          _hover={{ bg: "rgba(0,0,0,0.4)", cursor: "pointer" }}
          onClick={() => router.push("/home")}
        >
          <Image
            w="100%"
            h="100%"
            src="https://borrowme-pro.s3.us-east-2.amazonaws.com/icons/bm-logo.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

const NavBarMenu: React.FC<NavBarMenuProps> = ({
  router,
  isAuthenticated,
  isMenuOpen,
  setIsMenuOpen,
  logoutUser,
}) => {
  return (
    <Box d="flex" alignItems="center" justifyContent="center">
      <Menu isLazy onClose={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          as={IconButton}
          aria-label="Options"
          icon={
            !isMenuOpen ? (
              <HamburgerIcon fontSize={{ base: 14, lg: 18 }} />
            ) : (
              <CloseIcon fontSize={{ base: 12, lg: 16 }} />
            )
          }
          size="sm"
          variant="outline"
          bg="white"
        />
        {!isAuthenticated ? (
          <MenuList>
            {__LOGGED_OUT_BUTTONS.map((button, i) => {
              return (
                <MenuItem key={i} onClick={() => router.push(button.path)}>
                  {button.text}
                </MenuItem>
              );
            })}
          </MenuList>
        ) : (
          <MenuList>
            {__LOGGED_IN_BUTTONS.map((button, i) => {
              return (
                <MenuItem key={i} onClick={() => router.push(button.path)}>
                  {button.text}
                </MenuItem>
              );
            })}
            <MenuItem onClick={logoutUser}>Logout</MenuItem>
          </MenuList>
        )}
      </Menu>
    </Box>
  );
};

const NavBar: React.FC<NavBarProps> = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: ReduxState) => state.session.isAuthenticated
  );
  const [windowDimensions, setWindowDimensions] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  const [state, fetch] = useAsyncFn(async () => {
    const response = await dispatch(logout());
    return response;
  }, []);

  const logoutUser = () => {
    fetch().then(() => router.push("/login"));
  };

  // React.useEffect(() => {
  // if (isAuthenticated) {
  // Get the notifications thing to show
  // }
  // }, [isAuthenticated]);

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

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
        {/* {windowDimensions <= 767 ? ( */}
        <NavBarMenu
          isAuthenticated={isAuthenticated}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          logoutUser={logoutUser}
          router={router}
        />
        {/* ) : (
          windowDimensions
          // `${width}` */}
        {/* )} */}
      </Box>
    </Box>
  );
};

export default connect()(NavBar);
