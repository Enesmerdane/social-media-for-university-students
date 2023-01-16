import { PropTypes } from "prop-types";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Button,
    Flex,
    Box,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react";

function PostCard({
    username,
    userPhotoURL,
    userTitle,
    postText,
    postImageURL,
}) {
    return (
        <Card maxW="2xl">
            <CardHeader>
                <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Avatar name={username} src={userPhotoURL} />

                        <Box>
                            <Heading size="sm">{username}</Heading>
                            <Text>{userTitle}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{postText}</Text>
            </CardBody>
            {postImageURL ? (
                <Image objectFit="cover" src={postImageURL} alt="Chakra UI" />
            ) : (
                <></>
            )}

            <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                    "& > button": {
                        minW: "136px",
                    },
                }}
            >
                <Button flex="1" variant="ghost">
                    Like
                </Button>
                <Button flex="1" variant="ghost">
                    Comment
                </Button>
                <Button flex="1" variant="ghost">
                    Share
                </Button>
            </CardFooter>
        </Card>
    );
}

PostCard.propTypes = {
    username: PropTypes.string.isRequired,
    userPhotoURL: PropTypes.string,
    userTitle: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
    postImageURL: PropTypes.string.isRequired,
};

export default PostCard;
