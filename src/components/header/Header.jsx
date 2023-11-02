import ToggleTheme from "../ToggleTheme";

export default function Header() {
  return (
    <div className="tap-highligh-none sticky flex items-center border border-t-0 bg-lightmenubars p-4 dark:border-0 dark:border-darkprimary-700 dark:bg-darkprimary-800 sm:sticky md:sticky lg:sticky xl:sticky">
      <a
        href="/"
        className="font-serif text-4xl text-slate-950 hover:cursor-pointer dark:text-darkprimarytext"
      >
        WordBuket
      </a>
      <ToggleTheme />
    </div>
  );
}
