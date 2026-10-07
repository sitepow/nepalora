import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "../../../../constants/navbar";
import { LogInIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full p-5 text-white backdrop-blur-md">
      <nav aria-label="Main Navigation" className="flex w-full items-center justify-between">
        <a href="/" className="text-2xl font-semibold">
          Nepalora
        </a>

        <ul className="m-0 flex list-none gap-10 p-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="flex items-center gap-2.5 text-lg">
                {item.label} {item.badge && <Badge>{item.badge}</Badge>}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="ghost">
          <LogInIcon />
          LOG IN
        </Button>
      </nav>
    </header>
  );
}
