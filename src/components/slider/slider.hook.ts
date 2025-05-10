import type { SliderProps } from "./slider.props";

export const useSlider = (props: SliderProps) => {
  const { min = 0, max = 100, step = 1 } = props;

  // Generate marks for the slider
  const marks = [];
  for (let i = min; i <= max; i += step) {
    marks.push(i);
  }

  // Function to calculate the correct position with offset
  const getPositionWithOffset = (mark: number) => {
    const percentage = ((mark - min) / (max - min)) * 100;

    // Calculate the appropriate offset for each position
    let offset = 0;
    if (percentage === 0)
      offset = 10; // Value 1
    else if (percentage === 25)
      offset = 5; // Value 2
    else if (percentage === 50)
      offset = 0; // Value 3
    else if (percentage === 75)
      offset = -5; // Value 4
    else if (percentage === 100) offset = -10; // Value 5

    return `calc(${percentage}% + ${offset}px)`;
  };

  return {
    marks,
    getPositionWithOffset,
  };
};
