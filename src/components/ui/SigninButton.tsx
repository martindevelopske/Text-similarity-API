"use client";
import { FC, useState } from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";
import { toast } from "./Toast";
interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try{
        //await signIn("google");
        toast({
          title: "Error Signing In",
          message: "Please try again later",
          type: "error"
      })
    }catch(err){
        toast({
            title: "Error Signing In",
            message: "Please try again later",
            type: "error"
        })
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
