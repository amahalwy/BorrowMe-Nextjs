import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import {
  __LOGGED_OUT_BUTTONS,
  __LOGGED_IN_BUTTONS,
} from "../../generals/objects/navButtons";
import { NavBarMenuProps } from "../../typescript/components";

const NavBarMenu: React.FC<NavBarMenuProps> = ({
  router,
  isAuthenticated,
  isMenuOpen,
  setIsMenuOpen,
  logoutUser,
}) => {
  return (
    <Box>
      {typeof window !== "undefined" ? (
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
              <MenuList zIndex={3}>
                {__LOGGED_OUT_BUTTONS.map((button, i) => {
                  return (
                    <MenuItem key={i} onClick={() => router.push(button.path)}>
                      {button.text}
                    </MenuItem>
                  );
                })}
              </MenuList>
            ) : (
              <MenuList zIndex={3}>
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
      ) : null}
    </Box>
  );
};

export default NavBarMenu;
