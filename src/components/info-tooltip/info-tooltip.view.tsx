import { Info } from "lucide-react";

import { Button } from "@/components/core/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/core/dialog/dialog.view";

import { useInfoTooltip } from "./info-tooltip.hook";
import type { InfoTooltipProps } from "./info-tooltip.props";

export const InfoTooltip = (props: InfoTooltipProps) => {
  const { title, content, description } = props;
  const { open, setOpen } = useInfoTooltip();

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="h-5 w-5 p-0"
        onClick={() => setOpen(true)}
      >
        <Info className="h-4 w-4 cursor-help text-slate-400" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <div className="text-slate-700 dark:text-slate-300">{content}</div>
        </DialogContent>
      </Dialog>
    </>
  );
};
