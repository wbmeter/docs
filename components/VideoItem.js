import Link from "next/link";

export function VideoItem({
  title,
  authorImage,
  authorName,
  ytVideoId,
  ytChannelLink = null,
  tgChannelLink = null
}) {
  return (
    <Link
      target="_blank"
      href={"https://www.youtube.com/watch?v=" + ytVideoId}
      className="flex gap-4 rounded-lg border-zinc-700 border h-14 md:h-20 hover:bg-zinc-900 hover:cursor-pointer group p-0 m-0"
    >
      <div className="flex items-center justify-start p-0 m-0">
        <img
          className="h-full rounded-lg"
          src={`https://i.ytimg.com/vi/${ytVideoId}/default.jpg`}
        />
      </div>
      <div className="flex flex-col flex-1 justify-center gap-1 md:gap-2">
        <span className="text-xs md:text-sm xl:text-lg font-bold">{title}</span>
        <div className="flex gap-1 text-xs items-center">
          <div className="flex items-center">
            <img className="rounded-full w-5" src={`/authors/${authorImage}`} />
          </div>
          <div>{authorName}</div>
          {ytChannelLink ? (
            <>
              <a
                className="hidden md:block text-[11px] px-2 py-0.5 bg-red-700/50 hover:bg-red-700 text-slate-100/60 hover:text-slate-100"
                target="_blank"
                href={
                  ytChannelLink + "?utm_source=neuromarket&utm_campaign=docs"
                }
              >
                Канал в YouTube
              </a>
            </>
          ) : (
            ""
          )}
          {tgChannelLink ? (
            <>
              <a
                className="text-[11px] px-2 py-0.5 bg-sky-700/50 hover:bg-sky-700 text-slate-100/60 hover:text-slate-100"
                target="_blank"
                href={
                  tgChannelLink + "?utm_source=neuromarket&utm_campaign=docs"
                }
              >
                Telegram Канал
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-center items-center p-2 md:p-5 opacity-50 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:h-6 md:w-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
}
