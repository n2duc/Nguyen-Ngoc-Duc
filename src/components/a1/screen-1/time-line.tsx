import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

const timelineData = [
  {
    id: 1,
    color: "bg-green-500",
    user: "RFX David Nguyen",
    action: "Submitted to underwriting",
    time: "2025-04-04 13:00:38",
  },
  {
    id: 2,
    color: "bg-blue-700",
    user: "ABC Lisa Rose",
    action: "approval",
    time: "2025-04-04 11:10:38",
  },
  {
    id: 3,
    color: "bg-green-500",
    user: "RFX David Nguyen",
    action: "Submitted to underwriting",
    time: "2025-04-04 08:00:00",
  },
  {
    id: 4,
    color: "bg-blue-700",
    user: "ABC Lisa Rose",
    action: "create an issue",
    time: "2025-04-03 17:10:38",
  },
];

const TimeLine = () => {
  return (
    <div className="flex flex-col">
      {timelineData.map((item, index) => (
        <div key={item.id}>
          <div className="flex items-center gap-2">
            {/* dot */}
            <div className={cn("size-3 rounded-full", index % 2 ? "bg-green-700" : "bg-main")} />
            {/* contents */}
            <div className="text-sm text-gray-600">
              <span>{item.user}</span>{" "}
              <span>{item.action}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-3 h-3 mr-1" />
              {item.time}
            </div>
          </div>
          {index < timelineData.length - 1 && (
            <div className="border-l border-gray-400 w-0.5 h-5 ml-1.5" />
          )}
        </div>
      ))}
    </div>
  )
}

export default TimeLine