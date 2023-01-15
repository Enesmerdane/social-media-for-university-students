import React from "react";

import { Link } from "react-router-dom";

import { useColorModeValue } from "@chakra-ui/react";

function NavLink({ children, path }) {
    return (
        <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
            to={path}
        >
            {children}
        </Link>
    );
}

export default NavLink;
