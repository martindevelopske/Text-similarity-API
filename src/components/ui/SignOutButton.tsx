"use client";
import { FC, useState } from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";
import { toast } from "./Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOut = async () => {
    try{
        await signOut();
    }catch(err){
        toast({
            title: "Error Signing Out",
            message: "Please try again later",
            type: "error"
        })
    }
  };
  return (
    <Button onClick={signOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
