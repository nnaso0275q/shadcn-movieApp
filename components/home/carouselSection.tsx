// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// export const CarouselSection = ()=>{
//     return(
//         <div>
//  <Carousel>
//    <CarouselContent 
//    className="flex w-[1440] h-[600]">
      
//        <CarouselItem><img src="carousel1.jpg"></img></CarouselItem>
//      <CarouselItem><img src="carousel2.png"></img></CarouselItem>
//      <CarouselItem><img src="carousel3.jpg"></img></CarouselItem>

//   </CarouselContent>
//      <CarouselPrevious />
//      <CarouselNext />
// </Carousel> 
// </div>
//     )
//  } 



// "use client"
// import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// const images=[
// "carousel1.jpg",
// "carousel2.png",
// "carousel3.jpg"
// ]


// export function CarouselSection() {
//   return (
//     <Carousel className="w-screen">
//       <CarouselContent>
//         {images.map((src, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex  items-center justify-center p-6">
//                 <img className="object-cover aspect-[2.4/1] w-full h-full" src={src}></img>
//                 </CardContent>
//               </Card>

//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="left-13" />
//       <CarouselNext className="right-13"/>
//     </Carousel>
//   )
// }

"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/carousel1.jpg",
  "/carousel2.png",
  "/carousel3.jpg",
]

export function CarouselSection() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      <Carousel className="w-full h-[600px]">
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="h-full">
                <CardContent className="p-0 h-full">
                  <img
                    src={src}
                    alt={`carousel-${index}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  )
}


