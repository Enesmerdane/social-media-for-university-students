import React from "react";
import { Heading } from "@chakra-ui/react";
import { loginAction } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";

function Events() {
    const dispatch = useDispatch();

    return (
        <Heading as="h2" size="xl">
            Events
            <button
                onClick={() => {
                    dispatch(loginAction());
                }}
            >
                Test Button
            </button>
        </Heading>
    );
}

export default Events;
