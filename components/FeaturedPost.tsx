import BlurImage from "./BlurImage";
import Date from "./Date";
import Link from "next/link";
import SanitizeHtml from "./SanitizeHtml";

export default function FeaturedPost({
  data,
}: {
  data: {
    imageURL: string;
    title: string;
    summary: string;
    category: string;
    url: string;
  };
}) {
  return (
    <div className="w-full mb-20">
      <div className="w-full max-w-screen-xl lg:w-5/6 mx-auto md:mb-28">
        <Link href={`${data.url}`}>
          <a>
            <div className="relative group h-80 sm:h-150 w-full mx-auto overflow-hidden lg:rounded-xl">
              {data.imageURL ? (
                <BlurImage
                  alt={data.title ?? ""}
                  className="group-hover:scale-105 group-hover:duration-300"
                  layout="fill"
                  objectFit="cover"
                  src={data.imageURL}
                />
              ) : (
                <div className="absolute flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-4xl select-none">
                  ?
                </div>
              )}
            </div>
            <div className="mt-10 w-5/6 mx-auto lg:w-full">
              <h2 className="font-cal text-4xl md:text-6xl my-10">
                {data.title}
              </h2>
              <p className="text-base md:text-lg w-full lg:w-2/3">
                <SanitizeHtml html={data.summary} />
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
