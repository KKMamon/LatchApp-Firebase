import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import {  LOGIN } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useRegister } from "hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
  surnameValidate,
  ageValidate,
  genderValidate,
} from "utils/form-validate";
import logogirl from "../images/logogirl.png"


export default function Register() {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      surname: data.surname,
      age: data.age,
      gender: data.gender,
      email: data.email,
      password: data.password,
      redirectTo: LOGIN,
    });
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
      <img src={logogirl} alt="logogirl" />
        <Heading mb="4" size="sm" textAlign="center">
          สมัครสมาชิกใหม่
        </Heading>

        <form onSubmit={handleSubmit(handleRegister)}>
          <FormControl isInvalid={errors.username} py="2">
            <FormLabel>ชื่อ</FormLabel>
            <Input
              placeholder="ชื่อ"
              {...register("username", usernameValidate)}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>


          <FormControl isInvalid={errors.surname} py="2">
            <FormLabel>นามสกุล</FormLabel>
            <Input
              placeholder="นามสกุล"
              {...register("surname", surnameValidate)}
            />
            <FormErrorMessage>
              {errors.surname && errors.surname.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.age} py="2">
            <FormLabel>อายุ</FormLabel>
            <Input
              placeholder="อายุ"
              {...register("age", ageValidate)}
            />
            <FormErrorMessage>
              {errors.age && errors.age.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.gender} py="2">
            <FormLabel>เพศ</FormLabel>
            <Input
              placeholder="เพศ"
              {...register("gender", genderValidate)}
            />
            <FormErrorMessage>
              {errors.gender && errors.gender.message}
            </FormErrorMessage>
          </FormControl>


          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="user@email.com"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>


          <FormControl isInvalid={errors.password} py="2">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="password123"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>


          <Button
            mt="4"
            type="submit"
            colorScheme="teal"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText="Signing Up"
          >
            Register
          </Button>
        </form>

        <Text fontSize="xlg" align="center" mt="6">
          Already have an account?{" "}
          <Link
            as={RouterLink}
            to={LOGIN}
            color="teal.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "teal.100" }}
          >
            Log In
          </Link>{" "}
          instead!
        </Text>
      </Box>
    </Center>
  );
}
