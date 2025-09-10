import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export const CarouselSection = ()=>{
    return(
        <div>
 <Carousel>
   <CarouselContent 
   className="display: flex;
              w-[1440px];
              h-[600px];
              justify-end;
              align-center;
               shrink">
      
       <CarouselItem><img src="carousel1.jpg"></img></CarouselItem>
     <CarouselItem><img src="carousel2.png"></img></CarouselItem>
     <CarouselItem><img src="carousel3.jpg"></img></CarouselItem>

  </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
</Carousel> 
</div>
    )
 } 

