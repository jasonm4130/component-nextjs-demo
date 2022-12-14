import Link from "next/link";
import { Post } from "../types";
import BlurImage from "./BlurImage";
import SanitizeHtml from "./SanitizeHtml";

interface BlogCardProps {
  data: Post;
}

export default function BlogCard({ data }: BlogCardProps) {
  var imageURL = "" + data.imageURL[0];
  return (
    <Link href={`${data.url}`}>
      <a>
        <div className="rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition-all ease duration-200">
          {data.imageURL ? (
            <BlurImage
              src={imageURL}
              alt={data.title ?? "Blog "}
              width={500}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          ) : (
            <div className="absolute flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-4xl select-none">
              ?
            </div>
          )}
          <div className="py-8 px-5 h-48 border-t border-gray-200">
            <h3 className="font-cal text-xl tracking-wide">{data.title}</h3>
            <p className="text-md italic text-gray-600 my-2 truncate">
              <SanitizeHtml html={data.summary} />
            </p>
            {data.author && (
              <p className="text-md my-2 truncate">By {data.author}</p>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}
