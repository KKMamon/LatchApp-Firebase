import { Box, Button, Code, Stack } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";
import Avatar from "components/profile/Avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading...";

  return (
    <Stack align="center" spacing="5" my="8">
      <Avatar user={user} />
      <Code>{user.username}</Code>
      <Button
        colorScheme="teal"
        w="full"
        as={Link}
        to={`${PROTECTED}/profile/${user.id}`}
      >
        แก้ไขโปรไฟล์
      </Button>
    </Stack>
  );
}

export default function Sidebar() {
  return (
    <Box
      px="6"
      height="100vh"
      w="100%"
      maxW="300px"
      borderLeft="1px solid"
      borderLeftColor="teal.100"
      position="sticky"
      top="16"
      display={{ base: "none", md: "block" }}
    >
      <ActiveUser />
    </Box>
  );
}
