import { NAV_ITEMS } from "../../../../constants/navbar";

export function Navbar() {
  return (
    <nav className="fixed top-0 flex w-full items-center justify-between p-5 text-white backdrop-blur-md">
      <span className="text-2xl font-semibold">Nepalora</span>
      <div className="flex gap-5">
        {NAV_ITEMS.map((item) => {
          return (
            <a key={item.label} href={item.href} className="text-lg">
              {item.label}
            </a>
          );
        })}
      </div>
      <div className="flex gap-2.5 text-lg">LOG IN</div>
    </nav>
  );
}
