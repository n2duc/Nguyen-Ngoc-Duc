import { ExternalLink, LibraryBig, SquarePen } from "lucide-react";
import Heading from "./heading";
import UserAccordions from "./user-accordions";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const UserInformation = () => {
  return (
    <div className="flex-1 p-4 border-l bg-white flex flex-col">
      {/* general information */}
      <div className="space-y-4">
        <div className="py-2 border-b">
          <Heading title="GENERAL INFORMATION">
            <LibraryBig className="size-[18px]" />
          </Heading>
        </div>
        <div className="grid grid-cols-4 text-sm">
          <div>
            <div className="font-medium mb-2">First Name</div>
            <div className="text-gray-500">David</div>
          </div>
          <div>
            <div className="font-medium mb-2">Last Name</div>
            <div className="text-gray-500">Nguyen</div>
          </div>
          <div>
            <div className="font-medium mb-2">Experience</div>
            <div className="text-gray-500">5 years</div>
          </div>
          <div>
            <div className="font-medium mb-2">Personal Website</div>
            <div className="text-gray-500">david.com</div>
          </div>
        </div>
        <div className="grid grid-cols-4 text-sm">
          <div>
            <div className="font-medium mb-2">First Name</div>
            <div className="text-gray-500">David</div>
          </div>
          <div>
            <div className="font-medium mb-2">Last Name</div>
            <div className="text-gray-500">Nguyen</div>
          </div>
          <div>
            <div className="font-medium mb-2">Experience</div>
            <div className="text-gray-500">5 years</div>
          </div>
          <div>
            <div className="font-medium mb-2">Personal Website</div>
            <div className="text-gray-500">david.com</div>
          </div>
        </div>
      </div>
      <UserAccordions />
      <div className="space-y-2">
        <div className="py-2 border-y">
          <Heading title="TO-DO">
            <SquarePen className="size-[18px]" />
          </Heading>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Checkbox id="review" />
            <Label htmlFor="review" className="text-base">
              Review Loan Applications <ExternalLink className="inline size-4 text-blue-400" />
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="contact" />
            <Label htmlFor="contact" className="text-base">
              Contact to Borrower <ExternalLink className="inline size-4 text-blue-400" />
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="add" disabled />
            <Label htmlFor="add" className="text-base">
              Click to add new todo
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
