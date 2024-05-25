import { Flex, Text, Image, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Button, ButtonGroup } from '@chakra-ui/react';

function Meme({ meme }) {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                /* src={[...meme.preview].pop()} */
                src={meme.url}
                alt='No Image Available'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{meme.title}</Heading>
                <Text>
                    Subreddit: {meme.subreddit}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Text color='blue.600' fontSize='lg'>
                    -{meme.author}
                </Text>
            </CardFooter>
        </Card>
    );

}


export default Meme;