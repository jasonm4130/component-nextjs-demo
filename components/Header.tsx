import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const meta = {
    logo: "/squiz-logo.png",
    title: "Squiz",
  };

  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div
      className={`fixed w-full ${
        scrolled ? "drop-shadow-md" : ""
      }  top-0 left-0 right-0 h-16 bg-white z-30 transition-all ease duration-150 flex`}
    >
      <div className="flex justify-center items-center space-x-5 h-full max-w-screen-xl mx-auto px-10 sm:px-20">
        <Link href="/" passHref>
          <a className="flex justify-center items-center">
            {meta?.logo ? (
              <div className="h-8 w-20 inline-block overflow-hidden align-middle">
                <Image
                  alt={meta?.title}
                  height={416}
                  src={meta?.logo}
                  width={1200}
                />
              </div>
            ) : (
              <span className="inline-block ml-3 font-medium truncate">
                {meta?.title}
              </span>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
}
