import Image from "next/image";
import Link from "next/link";

interface Banner {
  link: string;
  title: string;
  imageSrc: string;
}

interface ImageBannerProps {
  bannersList: Banner[];
}

export function ImageBanner({ bannersList }: ImageBannerProps) {
  return (
    <section className="py-8 cursor-pointer w-full float-left">
      <div className="container">
        <div className="-mx-4">
          <div className="flex gap-4 justify-around">
            {bannersList.map((banner, index) => (
              <Link
                href={banner.link}
                title={banner.title}
                key={index}
                className="block relative grow min-h-[200px]"
              >
                <Image
                  src={banner.imageSrc}
                  alt={banner.title}
                  fill
                  sizes={`(max-width: 1080px) ${70 / bannersList.length}vw`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
