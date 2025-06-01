import FormRender from "@/components/a2/form-render";
import JsonForm from "@/components/a2/json-form";

const JsonFormRenderer = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col min-h-screen 2xl:min-h-[90vh]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">JSON Form Renderer</h1>
        <p className="text-muted-foreground mt-2">
          A2 Assignment - JSON form rendering components with Vietnamese address input
        </p>
      </div>
      <div className="flex gap-4 flex-1">
        <JsonForm />
        <FormRender />
      </div>
    </div>
  )
}

export default JsonFormRenderer