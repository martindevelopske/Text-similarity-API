"use client"
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "./Code";
import { nodejs, python } from "@/helpers/DocumentationCode";
import "simplebar-react/dist/simplebar.min.css"

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="Node js" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="Node js">Node Js</TabsTrigger>
        <TabsTrigger value="Python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="Node js">
        <SimpleBar />
        <Code language="javascript" code={nodejs} show animated></Code>
      </TabsContent>
      <TabsContent value="Python">
        <SimpleBar />
        <Code language="python" code={python} show animated></Code>

      </TabsContent>
    </Tabs>
  );
};
export default DocumentationTabs;
