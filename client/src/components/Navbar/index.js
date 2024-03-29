import {
    Box,
    Flex,
    Avatar,
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

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/reducers/userReducer";
import NavLink from "../NavLink";

function Navbar() {
    // const { user, loggedIn, login, logout } = useAuth();
    // TODO

    const { colorMode, toggleColorMode } = useColorMode();
    const Links = [
        { name: "Home", path: "/home" },
        { name: "Hot Topics", path: "/hottopics" },
        { name: "Events", path: "/events" },
    ];

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    if (user.auth) {
        Links.push({ name: "Friends", path: "/friends" });
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
                            <NavLink key={link.name} path={link.path}>
                                {link.name}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={"center"}>
                    <Stack direction={"row"} mr={2}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>

                    {user.auth ? (
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
                                <Center>{/* <p>{user}</p> */}</Center>
                                <br />
                                <MenuDivider />
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        dispatch(logout());
                                    }}
                                >
                                    Logout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <Button
                            onClick={() => {
                                dispatch(login());
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
