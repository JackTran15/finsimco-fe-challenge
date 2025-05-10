import { FileText, Play } from "lucide-react";

import { Button } from "@/components/core/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/core/tooltip/tooltip.view";

import { useNegotiationSidebar } from "./negotiation-sidebar.hook";

export const NegotiationSidebarView = () => {
  const { setShowVideoModal, setShowTextModal } = useNegotiationSidebar();

  return (
    <TooltipProvider>
      <div className="col-span-12 flex gap-4 md:col-span-1 md:flex-col">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-12 shrink-0"
              onClick={() => setShowVideoModal(true)}
            >
              <Play className="h-6 w-6 text-blue-600" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Watch instruction video</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-12 shrink-0"
              onClick={() => setShowTextModal(true)}
            >
              <FileText className="h-6 w-6 text-blue-600" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>View detailed instructions</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
