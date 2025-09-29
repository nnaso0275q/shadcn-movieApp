"use client";

import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "@/types";
import { getMovieTrailer } from "./get-data";
import { CarouselItemComp } from "./CarouselItem";

type CarouselProps = {
  movies: MovieType[];
};

const CarouselSection = ({ movies }: CarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // !
  React.useEffect(() => {
    if (!api) return;

    setCount(Math.ceil(api.scrollSnapList().length / 4));
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  // console.log("MOVIE ", movies);
  //

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItemComp
            id={movie.id}
            key={index}
            title={movie.title}
            vote={movie.vote_average}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-13" />
      <CarouselNext className="right-13" />

      <div className="flex gap-2 justify-center mt-[10]">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`cursor-pointer rounded-full size-[8px] ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselSection;
