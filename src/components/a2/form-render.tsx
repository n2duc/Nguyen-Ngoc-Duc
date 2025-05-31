import { useAppSelector } from "@/hooks/redux-hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import JsonRender from "./json-render";

const FormRender = () => {
  const { schema, formData } = useAppSelector((state) => state.form);
  return (
    <Tabs defaultValue="form" className="flex-1">
      <TabsList>
        <TabsTrigger value="form">Generated Form</TabsTrigger>
        <TabsTrigger value="data">Form Data</TabsTrigger>
      </TabsList>
      <TabsContent value="form">
        <Card>
          <CardHeader>
            <CardTitle>Generated Form</CardTitle>
            <CardDescription>
              Form generated from the JSON schema. Data is automatically saved to
              the store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <JsonRender schema={schema ? JSON.parse(schema) : null} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="data">
        <Card>
          <CardHeader>
            <CardTitle>Form Data</CardTitle>
            <CardDescription>Current form data stored in Redux. Data persists across page refreshes.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Current Data:</h4>
              <pre className="text-sm overflow-auto">{JSON.stringify(formData, null, 2)}</pre>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default FormRender;
