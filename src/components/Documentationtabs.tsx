import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import SimpleBar from "simplebar-react";
const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="Node js" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="Node js">Node Js</TabsTrigger>
        <TabsTrigger value="Python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="Node js">
        {/* <SimpleBar></SimpleBar> */}
      </TabsContent>
      <TabsContent value="Python">
        {/* <SimpleBar></SimpleBar> */}
      </TabsContent>
    </Tabs>
  );
};
export default DocumentationTabs;
