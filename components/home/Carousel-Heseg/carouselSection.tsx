"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "@/types";
import { Star } from "lucide-react";
import { title } from "process";
// import CarouselDetail from "./carouselDetail";

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
  //

  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="">
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="py-0">
                <CardContent className="flex aspect-video h-[600px] justify-center p-0">
                  {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                  <div className="relative w-full h-full ">
                    <div className="absolute w-[404px] ml-[140px] inter mt-[178px]">
                      {/* <CarouselDetail movie={movie} /> */}
                      {/* <div className="text-white text-base font-normal not-italic">
                        Now playing :
                      </div>
                      <h1 className="text-foreground h-[40px] text-4xl font-bold flex">
                        {movie.title}
                      </h1>
                      <div className="flex gap-1 text-sm text-gray-700 mt-[40px]">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-muted-foreground">
                          {movie.vote_average}/10
                        </span>
                      </div> */}
                    </div>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      className="object-cover "
                    />
                  </div>
                  {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-13" />
      <CarouselNext className="right-13" />

      <div className="flex gap-2 justify-center">
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
