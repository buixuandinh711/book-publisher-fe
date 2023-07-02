import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function GenreFilter({ genres }: { genres: string[] }) {
  const router = useRouter();
  const [chosenGenres, setChosenGenres] = useState<string[]>([]);
  const { genre } = router.query;

  useEffect(() => {
    if (genre === undefined) {
      setChosenGenres([]);
    } else if (typeof genre === "string") {
      setChosenGenres([genre]);
    } else {
      setChosenGenres(genre);
    }
  }, [genre, setChosenGenres]);

  return (
    <aside className=" mb-8 w-full">
      <div className=" mb-5 w-full">
        <h2 className="relative  m-0 w-full text-base font-bold leading-normal text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="relative py-[5px] pr-4 text-lg font-bold text-red-700 after:absolute after:-bottom-[3px] after:left-0 after:right-4 after:border-b-[3px] after:border-b-red-700"
          >
            <span>Genres</span>
          </Link>
        </h2>
      </div>
      <div className=" w-full bg-gray-100 py-4 pr-1">
        <ul className="m-0 max-h-[140px] list-none overflow-y-auto pl-4">
          {genres.map((item) => (
            <li key={item} className=" m-0 w-full cursor-pointer p-0 leading-loose">
              <span className="cursor-pointer text-sm font-normal text-red-700">
                <label htmlFor={`filter-${item.toLocaleLowerCase()}`} className="mb-[2px] block cursor-pointer">
                  <input
                    type="checkbox"
                    id={`filter-${item.toLocaleLowerCase()}`}
                    className="form-checkbox mr-2 h-3 w-3 border-red-700 p-0 text-red-700 focus:ring-0"
                    checked={chosenGenres.includes(item)}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      let newChosen;

                      if (chosenGenres.includes(item)) {
                        newChosen = chosenGenres.filter((chosen) => chosen !== item);
                      } else {
                        newChosen = chosenGenres.concat(item);
                      }

                      const newQuery = {
                        ...router.query,
                      };

                      delete newQuery.slug;
                      newQuery.genre = newChosen;

                      router.replace(
                        {
                          pathname: basePath,
                          query: newQuery,
                        },
                        undefined,
                        {
                          scroll: false,
                        }
                      );
                    }}
                  />
                  {item}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
