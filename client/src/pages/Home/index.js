import React from "react";

import { Heading, Center, Stack } from "@chakra-ui/react";

import PostCard from "../../components/PostCard";

function Home() {
    const data = [
        {
            postId: 1,
            username: "Segun Adebayo",
            userPhotoURL: "https://bit.ly/sage-adebayo",
            userTitle: "Creator, Chakra UI",
            postText:
                "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
            postImageURL:
                "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
        {
            postId: 2,
            username: "Segun Adebayo",
            userPhotoURL: "https://bit.ly/sage-adebayo",
            userTitle: "Creator, Chakra UI",
            postText:
                "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
            postImageURL:
                "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
        {
            postId: 3,
            username: "Segun Adebayo",
            userPhotoURL: "https://bit.ly/sage-adebayo",
            userTitle: "Creator, Chakra UI",
            postText:
                "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
            postImageURL:
                "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
        {
            postId: 4,
            username: "Segun Adebayo",
            userPhotoURL: "https://bit.ly/sage-adebayo",
            userTitle: "Creator, Chakra UI",
            postText:
                "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
            postImageURL:
                "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
        {
            postId: 5,
            username: "Segun Adebayo",
            userPhotoURL: "https://bit.ly/sage-adebayo",
            userTitle: "Creator, Chakra UI",
            postText:
                "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
            postImageURL: "",
        },
    ];

    return (
        <Center>
            <Stack>
                {data.map((post) => (
                    <PostCard key={post.postId} {...post} />
                ))}
            </Stack>
        </Center>
    );
}

export default Home;
