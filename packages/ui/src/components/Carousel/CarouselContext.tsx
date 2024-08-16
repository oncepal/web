import { createContext } from "react";

export type CarouselContext = {
    handleItemClick?: () => void;
  };
  
  export const carouselContext = createContext<CarouselContext>({});