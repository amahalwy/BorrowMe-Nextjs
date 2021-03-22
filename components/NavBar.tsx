import React from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
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

const NavBarLogo: React.FC<NavBarLogoProps> = ({ router }) => {
  return (
    <Box w="85%" ml="4%">
      <Box h="100%" d="flex" alignItems="center">
        <Box
          w={{ base: "15%", lg: "5%" }}
          h={{ base: "70%", lg: "90%" }}
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
    <Box w="15%" d="flex" alignItems="center" justifyContent="center">
      <Menu isLazy onClose={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          as={IconButton}
          aria-label="Options"
          icon={
            !isMenuOpen ? (
              <HamburgerIcon fontSize={18} />
            ) : (
              <CloseIcon fontSize={12} />
            )
          }
          size="sm"
          variant="outline"
          bg="white"
        />
        {!isAuthenticated ? (
          <MenuList w="">
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

const NavBar: React.FC<NavBarProps> = ({ isAuthenticated, logout }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const [state, fetch] = useAsyncFn(async () => {
    const response = await logout();
    return response;
  }, []);

  const logoutUser = () => {
    fetch().then(() => router.push("/login"));
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      // Get the notifications thing to show
    }
  }, [isAuthenticated]);

  return (
    <Box w="100%" d="flex" h="66px" bg="#a2d3c2" shadow="xl">
      <NavBarLogo router={router} />
      <NavBarMenu
        isAuthenticated={isAuthenticated}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        logoutUser={logoutUser}
        router={router}
      />
    </Box>
  );
};

const mSTP = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.user,
});

const mDTP = {
  logout: logout,
};

export default connect(mSTP, mDTP)(NavBar);
