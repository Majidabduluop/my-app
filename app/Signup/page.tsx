"use client";
import { TextInput, Button } from "@mantine/core";
export default function Signup() {
  return (
    <>
      <TextInput
        label="Name"
        placeholder="OMG, it also has a placeholder"
        required
        value=""
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label="Email"
        placeholder="OMG, it also has a placeholder"
        required
        value=""
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label="Password"
        placeholder="OMG, it also has a placeholder"
        required
        value=""
        mt="md"
        autoComplete="nope"
      />

      <Button radius="md">Sumit</Button>
    </>
  );
}
