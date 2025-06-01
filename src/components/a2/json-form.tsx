import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { resetAll, resetForm, setSchema } from "@/stores/slices/form-slice";
import { useCallback, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { toast } from "sonner";
import { sampleSchema } from "@/lib/data";

const JsonForm = () => {
  const dispatch = useAppDispatch();
  const { schema } = useAppSelector((state) => state.form);
  const [schemaInput, setSchemaInput] = useState(schema);
  const [parseError, setParseError] = useState("");

  const loadSampleSchema = () => {
    const schema = JSON.stringify(sampleSchema, null, 2);
    setSchemaInput(schema);
    setParseError("");
    dispatch(setSchema(schemaInput));
  }

  const handleSchemaInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSchemaInput(e.target.value);
    },
    []
  );

  const handleSchemaSubmit = () => {
    try {
      const parsed = JSON.parse(schemaInput);
      setParseError("");
      dispatch(setSchema(schemaInput));
      console.log(parsed);
    } catch (error: unknown) {
      setParseError("Invalid JSON schema format");
      toast.error(error instanceof Error ? error.message : "Failed to parse JSON schema");
      console.log(error);
    }
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>JSON Schema Input</CardTitle>
        <CardDescription>
          Enter a JSON schema to generate a form. The schema supports a custom
          Vietnamese address format.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <Textarea
          id="schema-input"
          value={schemaInput}
          onChange={handleSchemaInputChange}
          placeholder="Enter JSON schema here..."
          className="flex-1 font-mono text-sm resize-none overflow-auto"
        />

        {parseError && <div className="text-red-500 text-sm">{parseError}</div>}

        <div className="flex items-center gap-3">
          <Button onClick={handleSchemaSubmit} disabled={schemaInput.length <= 0}>Generate Form</Button>
          <Button variant="outline" onClick={loadSampleSchema}>
            Load sample schema
          </Button>
          <Button variant="outline" onClick={() => dispatch(resetForm())}>
            Reset Form Data
          </Button>
          <Button variant="destructive" onClick={() => dispatch(resetAll())}>
            Reset All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JsonForm;
