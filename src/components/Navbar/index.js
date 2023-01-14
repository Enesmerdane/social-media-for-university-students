import { useEffect } from "react";

import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    HStack,
    Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useAuth } from "../../context/AuthContext";

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);

function Navbar() {
    const { user, loggedIn, login, logout } = useAuth();

    const { colorMode, toggleColorMode } = useColorMode();
    var Links;
    if (loggedIn) {
        Links = ["Home", "Hot Topics", "Friends"];
    } else {
        Links = ["Home", "Hot Topics"];
    }

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <HStack spacing={8} alignItems={"center"}>
                    <Avatar
                        as="button"
                        size={"sm"}
                        src={
                            "https://image.shutterstock.com/image-vector/video-selfie-icon-vector-260nw-768493510.jpg"
                        }
                    />

                    <Box>
                        <Heading as="h5" size="sm">
                            Social Media App
                        </Heading>
                    </Box>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>

                    {loggedIn ? (
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://avatars.dicebear.com/api/male/username.svg"
                                    }
                                />
                            </MenuButton>
                            <MenuList alignItems={"center"}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={"2xl"}
                                        src={
                                            "https://avatars.dicebear.com/api/male/username.svg"
                                        }
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>{user}</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <Button
                            onClick={() => {
                                login("user1");
                            }}
                        >
                            Login
                        </Button>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;
