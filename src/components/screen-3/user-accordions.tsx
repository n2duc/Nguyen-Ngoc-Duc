import { ChartSpline, ExternalLink, FileText, NotepadText, Percent } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Heading from "./heading";
import ClientTable from "./client-table";

const UserAccordions = () => {
  return (
    <Accordion
      className="w-full"
      defaultValue="item-3"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <div className="flex items-center justify-between border-b">
          <AccordionTrigger className="justify-start py-2 hover:no-underline">
            <Heading title="COMMISSION STRUCTURES">
              <Percent className="size-[18px]" />
            </Heading>
          </AccordionTrigger>
          <Tooltip>
            <TooltipTrigger asChild>
              <ExternalLink className="size-5 text-gray-300" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>You don’t have permission to open this link</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </AccordionItem>
      <AccordionItem value="item-2">
        <div className="flex items-center justify-between border-b">
          <AccordionTrigger className="justify-start py-2 hover:no-underline">
            <Heading title="RECRUITMENT DOCUMENTS">
              <NotepadText className="size-[18px]" />
            </Heading>
          </AccordionTrigger>
          <Tooltip>
            <TooltipTrigger asChild>
              <ExternalLink className="size-5 text-blue-400" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Open link</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="justify-start py-2 hover:no-underline">
          <Heading title="RELATED CLIENTS & LOAN DOCUMENTS">
            <FileText className="size-[18px]" />
          </Heading>
        </AccordionTrigger>
        <AccordionContent>
          <ClientTable />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="justify-start py-2 hover:no-underline">
          <Heading title="PERFORMANCE">
            <ChartSpline className="size-[18px]" />
          </Heading>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
};

export default UserAccordions;
