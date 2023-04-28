"use client";
import { FC, FormEvent, useState } from "react";
import { toast } from "./ui/Toast";
import { CreateApikey } from "@/helpers/CreateApiKey";
import { Key } from "lucide-react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import CopyButton from "./CopyButton";
import { Input } from "./ui/Input";
import Button from "./ui/Button";

const RequestApiKey = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsCreating(true);
    try {
      const generatedApiKey = await CreateApikey();
      setApiKey(generatedApiKey);
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: "Error",
          message: err.message,
          type: "error",
        });
        return;
      }
      toast({
        title: "Error",
        message: "Something went wrong",
        type: "error",
      });
    }
  };
  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400"></Key>
        <LargeHeading>Request your API key</LargeHeading>
        <Paragraph>You haven&apos;t requested and API key yet. </Paragraph>
        <form
          onSubmit={createNewApiKey}
          className="mt-6 sm:flex sm:items-center"
          action="#"
        >
          <div className="relative rounded-md shadow-dm sm:min-w-0 sm:flex-1">
            {apiKey ? (
              <CopyButton
                valueToCopy={apiKey}
                className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              />
            ) : null}
            <Input
              readOnly
              value={apiKey ?? ""}
              placeholder="Requested api Key is placed here"
            />
            <div className="mt-3 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <Button disabled={!!apiKey} isLoading={isCreating}>
                Request Key
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestApiKey;
