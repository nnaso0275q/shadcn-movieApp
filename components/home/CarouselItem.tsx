"use client";
import { useEffect, useState } from "react";
import { TrailerResponseType } from "@/types";
import { getMovieTrailer } from "./get-data";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

type CarouselItemCompProps = {
  id: number;
  title: string;
  vote: number;
  overview: string;
  backdrop_path: string;
};

export const CarouselItemComp = ({
  id,
  title,
  vote,
  overview,
  backdrop_path,
}: CarouselItemCompProps) => {
  const [isTrailer, setIsTrailer] = useState("");

  useEffect(() => {
    const getTrailer = async () => {
      const trailerData: TrailerResponseType = await getMovieTrailer(
        id.toString()
      );
      const trailer = trailerData.results.find(
        (item) => item.type === "Trailer"
      );
      setIsTrailer(trailer?.key || "");
    };
    getTrailer();
  }, [id]);

  return (
    <CarouselItem>
      <div className="p-1">
        <Card className="py-0 border-none">
          <CardContent className="flex aspect-video h-[600px] justify-center p-0 ">
            <div className="relative w-full h-full">
              <div className="absolute z-10 w-[404px] ml-[140px] mt-[178px]">
                <div className="text-white text-base font-normal not-italic h-[24px]">
                  Now Playing :
                </div>
                <h1 className="text-foreground h-[40px] text-4xl font-bold flex mt-[16px]">
                  {title}
                </h1>
                <div className="flex gap-1 text-sm text-gray-700 mt-[50px]">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <div className="text-white">
                    {vote}
                    <span className="text-gray-600"> /10</span>
                  </div>
                </div>
                <h2 className="text-[#FAFAFA] text-[12px] overflow-x-scroll mt-[16px] font-normal">
                  {overview}
                </h2>
                <Dialog>
                  <DialogTrigger className="w-[140px] h-[40px] rounded-md bg-white mt-[16px] text-black inter font-medium text-base">
                    Watch Trailer
                  </DialogTrigger>
                  <DialogContent className="flex justify-center items-center sm:max-w-[997px] p-0">
                    <DialogHeader>
                      <DialogTitle className="hidden"></DialogTitle>
                      <iframe
                        width="997"
                        height="561"
                        src={`https://www.youtube.com/embed/${isTrailer}`}
                        title={`${title} | Official Trailer`}
                        allowFullScreen
                      ></iframe>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Image
                alt="svg"
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                className="object-cover"
                quality={100}
                fill
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
