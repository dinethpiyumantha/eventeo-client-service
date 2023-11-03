import { GET_ALL_EVENTS } from "@/queries/eventQueries";
import { fetchData } from "@/services/service";

export default async function Home() {
  const data = await fetchData(GET_ALL_EVENTS);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="grid gap-2 mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        {data &&
          data?.events?.map((item, key) => (
            <a
              key={key}
              href={item?.url}
              className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {item?.title + " "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {item?.description}
              </p>
              <small className={`mt-2 text-[#a3a3a3]`}>
                {item?.organizer?.name}
              </small>
            </a>
          ))}
      </div>
    </main>
  );
}
