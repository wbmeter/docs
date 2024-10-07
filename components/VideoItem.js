import Link from "next/link";
import authors from "./authors.js";

export function VideoItem({ author, title, ytVideoId }) {
  const { name, image, tgLink, ytLink } = authors[author];
  return (
    <div
      onClick={() =>
        window.open("https://www.youtube.com/watch?v=" + ytVideoId)
      }
      className="flex gap-2 justify-start rounded-lg overflow-hidden border-zinc-800/70 border h-14 min-h-14 md:h-[70px] md:min-h-[70px] hover:bg-zinc-900 hover:cursor-pointer group p-0 m-0"
    >
      <div className="flex items-center overflow-hidden justify-start p-0 m-0 aspect-video h-full">
        <img
          className="w-[120px]"
          src={`https://i.ytimg.com/vi/${ytVideoId}/default.jpg`}
        />
      </div>
      <div className="flex flex-col w-full flex-1 items-start justify-center gap-1 p-0 m-0">
        <span className="text-xs md:text-sm xl:text-lg font-bold">{title}</span>
        <div className="flex gap-1 text-xs items-center">
          <div className="hidden md:flex items-center">
            <img className="rounded-full w-5" src={`/authors/${image}`} />
          </div>
          <div>{name}</div>
          {ytLink ? (
            <>
              <a
                className="hidden md:flex gap-1 text-[11px] px-2 py-0.5 bg-red-700/70 hover:bg-red-700 text-slate-100/80 hover:text-slate-100"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                href={ytLink + "?utm_source=neuromarket&utm_campaign=docs"}
              >
                YouTube <span className="hidden lg:block">Канал</span>
              </a>
            </>
          ) : (
            ""
          )}
          {tgLink ? (
            <>
              <a
                className="flex gap-1 text-[11px] px-2 py-0.5 bg-sky-700/70 hover:bg-sky-700 text-slate-100/80 hover:text-slate-100"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                href={tgLink + "?utm_source=neuromarket&utm_campaign=docs"}
              >
                Telegram <span className="hidden lg:block">Канал</span>
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center p-2 md:p-5 opacity-50 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:h-6 md:w-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
