import * as React from "react";
import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { useSlider } from "./slider.hook";
import type { SliderProps } from "./slider.props";

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    { className, showLabels = true, min = 0, max = 100, step = 1, ...props },
    ref
  ) => {
    // Ensure step is an integer

    const { marks, getPositionWithOffset } = useSlider({
      min,
      max,
      step,
      ...props,
    });

    return (
      <div className="space-y-4">
        <SliderPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex w-full touch-none items-center select-none",
            className
          )}
          min={min}
          max={max}
          step={step}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <SliderPrimitive.Range className="absolute h-full bg-blue-500 dark:bg-blue-400" />
          </SliderPrimitive.Track>
          {marks.map((mark) => mark % 1 === 0 ? (
            <div
              key={mark}
              className={`absolute h-4 w-4 rounded-full border-2 border-blue-500 bg-white dark:border-blue-400 dark:bg-slate-950 ${props.value &&
                Array.isArray(props.value) &&
                props.value[0] >= mark
                ? "bg-blue-500 dark:bg-blue-400"
                : ""
                }`}
              style={{
                left: getPositionWithOffset(mark),
                transform: "translateX(-50%)",
              }}
            />
          ) : <></>)}
          {props.value &&
            Array.isArray(props.value) &&
            props.value.map((_, i) => (
              <SliderPrimitive.Thumb
                key={i}
                className="block h-5 w-5 rounded-full border-2 border-blue-500 bg-white ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-blue-400 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
              />
            ))}
        </SliderPrimitive.Root>

        {showLabels && (
          <div className="relative h-6 w-full">
            {marks.map((mark) => mark % 1 === 0 ? (
              <span
                key={mark}
                className="absolute text-sm font-medium text-slate-700 dark:text-slate-300"
                style={{
                  left: getPositionWithOffset(mark),
                  transform: "translateX(-50%)",
                }}
              >
                {mark}
              </span>
            ) : <></>)}
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;
