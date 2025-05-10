import { Play } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/core/dialog/dialog.view";

import { useVideoModal } from "./video-modal.hook";

export const VideoModalView = () => {
  const { showVideoModal, setShowVideoModal } = useVideoModal();

  return (
    <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Instruction Video</DialogTitle>
          <DialogDescription>
            Watch this video for a detailed walkthrough of the simulation.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-gray-background flex aspect-video items-center justify-center rounded-lg dark:bg-slate-800">
          <div className="text-center">
            <Play className="text-muted-text mx-auto mb-4 h-16 w-16" />
            <p className="text-gray-text dark:text-slate-400">
              Video player would be embedded here in a real application
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};