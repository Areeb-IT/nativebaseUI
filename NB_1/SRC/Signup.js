import { StyleSheet } from "react-native";
import {
  Text,
  Link,
  HStack,
  ScrollView,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  LinearGradient,
  Icon,
  Input,
  Pressable,
  FormControl,
  Button,
  extendTheme,
  Stack,
  VStack,
  KeyboardAvoidingView,
  WarningOutlineIcon,
  Circle,
  Divider,
  Box,
  View,
} from "native-base";

import NativeBaseIcon from "../components/NativeBaseIcon";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

export default Login = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <NativeBaseProvider>
      <Stack bg="primary.700" flex={1}>
        <Stack bg="primary.700" rounded="lg" flex={0.3} w="100%">
          <Center
            _text={{
              color: "white",
              my: 16,
              fontSize: "100",
              fontWeight: "bold",
            }}
          >
            Signup
          </Center>
        </Stack>
        <KeyboardAvoidingView
          bg="white"
          borderTopRadius="3xl"
          flex={0.7}
          w="100%"
          px={8}
          h={{
            base: "400px",
            lg: "auto",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={{ fontWeight: "bold", marginTop: 16, fontSize: 20 }}>
            Signup
          </Text>
          <Stack space={2} w="100%" alignItems="center" mt={8}>
            <Input
              mb={4}
              variant="underlined"
              borderColor="black"
              size="xl"
              h={12}
              w={{
                base: "100%",
                md: "100%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Name"
            />

            <FormControl isRequired isInvalid>
              <Stack>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  variant="underlined"
                  borderColor="black"
                  size="lg"
                  h={12}
                  w={{
                    base: "100%",
                    md: "100%",
                  }}
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={show ? "visibility" : "visibility-off"}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                  //defaultValue="12345"
                />
                <FormControl.HelperText>
                  Must be atleast 6 characters.
                </FormControl.HelperText>

                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <FormControl isRequired isInvalid>
              <Stack>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  variant="underlined"
                  borderColor="black"
                  size="lg"
                  h={12}
                  w={{
                    base: "100%",
                    md: "100%",
                  }}
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={show ? "visibility" : "visibility-off"}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  placeholder="Confirm Password"
                  //defaultValue="12345"
                />
                <FormControl.HelperText>
                  Must be atleast 6 characters.
                </FormControl.HelperText>

                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
          </Stack>
          <Box alignItems="center" mt={4}>
            <Button
              style={{ width: "100%", height: 70 }}
              rounded="2xl"
              onPress={() => navigation.navigate("Signup")}
              _text={{ fontSize: "2xl", fontWeight: "bold" }}
            >
              SUBMIT
            </Button>
          </Box>
          <Button
            onPress={() => navigation.navigate("Login")}
            size="sm"
            variant="link"
            _text={{ fontSize: "md" }}
          >
            Already have an Account LOGIN?
          </Button>
        </KeyboardAvoidingView>
      </Stack>
      {/* <Stack bg="black" h="full"></Stack> */}
    </NativeBaseProvider>
  );
};

// export default Login;m

const styles = StyleSheet.create({});
