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
              <a href={banner.link} title={banner.title} key={index}>
                <img src={banner.imageSrc} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
