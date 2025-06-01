/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { setFormData } from "@/stores/slices/form-slice";
import AddressInput from "./address-input";
import { useMemo } from "react";

const JsonRender = () => {
  const dispatch = useAppDispatch();
  const { schema, formData } = useAppSelector((state) => state.form);

  const { schemaParsed, parseError } = useMemo(() => {
    if (!schema || schema.trim() === "") {
      return { schemaParsed: null, parseError: null };
    }

    try {
      const parsed = JSON.parse(schema);
      return { schemaParsed: parsed, parseError: null };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown JSON parsing error";
      return { schemaParsed: null, parseError: errorMessage };
    }
  }, [schema]);

  const handleInputChange = (fieldName: string, value: any) => {
    if (formData[fieldName] !== value) {
      dispatch(setFormData({ ...formData, [fieldName]: value }));
    }
  };

  const renderField = (fieldName: string, fieldSchema: any) => {
    const value = formData[fieldName] || "";
    const { type, title, description, enum: enumValues, format } = fieldSchema;

    if (format === "vietnamese-address") {
      return (
        <div key={fieldName} className="space-y-2">
          <Label>{title || fieldName}</Label>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <AddressInput
            name={fieldName}
            value={value}
            onChange={(newValue) => handleInputChange(fieldName, newValue)}
          />
        </div>
      );
    }

    switch (type) {
      case "string":
        if (enumValues) {
          return (
            <div key={fieldName} className="space-y-2">
              <Label htmlFor={fieldName}>{title || fieldName}</Label>
              <Select
                value={value}
                onValueChange={(newValue) =>
                  handleInputChange(fieldName, newValue)
                }
              >
                <SelectTrigger id={fieldName} className="w-full">
                  <SelectValue placeholder={description ? description : `Enter ${title || fieldName}`} />
                </SelectTrigger>
                <SelectContent>
                  {enumValues.map((option: string) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        }

        if (fieldSchema.maxLength && fieldSchema.maxLength > 100) {
          return (
            <div key={fieldName} className="space-y-2">
              <Label htmlFor={fieldName}>{title || fieldName}</Label>
              <Textarea
                id={fieldName}
                value={value}
                onChange={(e) => handleInputChange(fieldName, e.target.value)}
                placeholder={description ? description : `Enter ${title || fieldName}`}
              />
            </div>
          );
        }

        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>{title || fieldName}</Label>
            <Input
              id={fieldName}
              type={
                format === "email"
                  ? "email"
                  : format === "date"
                  ? "date"
                  : "text"
              }
              value={value}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              placeholder={description ? description : `Enter ${title || fieldName}`}
            />
          </div>
        );

      case "number":
      case "integer":
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>{title || fieldName}</Label>
            <Input
              id={fieldName}
              type="number"
              value={value}
              onChange={(e) =>
                handleInputChange(
                  fieldName,
                  Number.parseFloat(e.target.value) || 0
                )
              }
              placeholder={description ? description : `Enter ${title || fieldName}`}
            />
          </div>
        );

      case "boolean":
        return (
          <div key={fieldName} className="flex items-center space-x-2">
            <Checkbox
              id={fieldName}
              checked={value}
              onCheckedChange={(checked) =>
                handleInputChange(fieldName, checked)
              }
            />
            <Label htmlFor={fieldName}>{title || fieldName}</Label>
            {description && (
              <p className="text-sm text-muted-foreground ml-6">
                {description}
              </p>
            )}
          </div>
        );

      default:
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>{title || fieldName}</Label>
            <Input
              id={fieldName}
              value={value}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              placeholder={description ? description : `Enter ${title || fieldName}`}
            />
          </div>
        );
    }
  };

  if (!schemaParsed || !schemaParsed.properties) {
    return <div className="text-muted-foreground">Please enter a valid JSON schema to generate a form.</div>
  }

  if (parseError) {
    return <div className="text-red-500">{parseError}</div>
  }

  return (
    <div className="space-y-4">
      {Object.entries(schemaParsed.properties).map(([fieldName, fieldSchema]) => renderField(fieldName, fieldSchema))}
    </div>
  )
};

export default JsonRender;
