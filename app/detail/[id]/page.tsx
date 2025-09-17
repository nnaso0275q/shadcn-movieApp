import { getMovieByGenres, getMovieDetail } from "@/components/home/get-data";

type DetailDynamicPageProps = {
  params: Promise<{ id: string; name: string; page: string }>;
};
const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;

  const movieDetail = await getMovieDetail(id);
  console.log(movieDetail);

  return <div></div>;
};

export default DetailDynamicPage;
