"use- client ";
import React, { useEffect } from "react";
import { MovieType, TrailerResponseType } from "@/types";
import { getMovieTrailer } from "./get-data";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CarouselItemComp = {
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
}: CarouselItemComp) => {
  const [isTrailer, setIsTrailer] = React.useState("");

  const GetTrailer = async () => {
    const trailerData: TrailerResponseType = await getMovieTrailer(
      id.toString()
    );
    // console.log("trailerData ", trailerData);
    const trailer = trailerData.results.find((item) => item.type === "Trailer");
    setIsTrailer(trailer?.key || "");
    console.log(trailer, "trailer");
  };
  useEffect(() => {
    GetTrailer();
  }, []);
  return (
    <CarouselItem>
      <div className="p-1">
        <Card className="py-0">
          <CardContent className="flex aspect-video h-[600px] justify-center p-0">
            {/* \\\\\\\\\\\\\\\.  \\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <div className="relative w-full h-full">
              <div className="absolute w-[404px] ml-[140px] inter mt-[178px]">
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
                  <Dialog>
                    <DialogTrigger className=" w-[145px] h-[40px] rounded-md bg-white"></DialogTrigger>
                    <DialogContent className="flex justify-center items-center sm:max-w-[997px] p-0">
                      <DialogHeader>
                        <DialogTitle className="hidden"></DialogTitle>
                        <iframe
                          width="997"
                          height="561"
                          src={`https://www.youtube.com/embed/${isTrailer}`}
                          title="The Conjuring: Last Rites | Official Trailer"
                          allowFullScreen
                        ></iframe>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                <h2 className="text-[#FAFAFA] text-[12px] overflow-x-scroll mt-[16px] font-normal">
                  {overview}
                </h2>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                className="object-cover "
              />
            </div>
            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
