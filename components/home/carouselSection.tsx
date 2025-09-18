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

type Props = {
  movies: MovieType[];
};

export function CarouselSection({ movies=[] }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(Math.ceil(api.scrollSnapList().length / 4));
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <Carousel setApi={setApi} className="w-[1440px]">
        <CarouselContent>
          {movies.map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video max-h-[600] items-center justify-center p-6">
                    <img></img>
                  </CardContent>
                  <div className="flex gap-2 mt-[50px] ml-[670px] ">
                    {Array.from({ length: count }).map((_, index) => (
                      <div
                        onClick={() => {
                          api?.scrollTo(index);
                        }}
                        key={index}
                        className={`rounded-full size-[8px] ${
                          index + 1 === current ? "bg-white" : "bg-gray-600"
                        }`}
                      ></div>
                    ))}
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
    </>
  );
}
