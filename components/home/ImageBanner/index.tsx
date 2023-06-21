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
    <section className="float-left w-full cursor-pointer py-8">
      <div className="container">
        <div className="-mx-4">
          <div className="flex justify-around gap-4">
            {bannersList.map((banner, index) => (
              <Link href={banner.link} title={banner.title} key={index} className="relative block min-h-[200px] grow">
                <Image src={banner.imageSrc} alt={banner.title} fill sizes={`(max-width: 1080px) ${70 / bannersList.length}vw`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
