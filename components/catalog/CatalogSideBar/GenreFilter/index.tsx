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
    <aside className="mb-8 w-full float-left">
      <div className="w-full float-left mb-5">
        <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
          >
            <span>Genres</span>
          </Link>
        </h2>
      </div>
      <div className="w-full float-left bg-gray-100 py-4 pr-1">
        <ul className="max-h-[140px] overflow-y-auto list-none m-0 pl-4">
          {genres.map((item) => (
            <li key={item} className="leading-loose w-full cursor-pointer float-left m-0 p-0">
              <span className="text-red-700 cursor-pointer text-sm font-normal">
                <label htmlFor={`filter-${item.toLocaleLowerCase()}`} className="cursor-pointer block mb-[2px]">
                  <input
                    type="checkbox"
                    id={`filter-${item.toLocaleLowerCase()}`}
                    className="form-checkbox mr-2 p-0 w-3 h-3 border-red-700 focus:ring-0 text-red-700"
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
