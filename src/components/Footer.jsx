import { SITE } from "../constants/site";
import { navLinks } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold tracking-[0.32em]">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-brown" />
              {SITE.name}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-mist">
              Architecture • Interior • 3D • Drafting
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-16 gap-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative w-fit text-xs uppercase tracking-[0.2em] text-stone transition-colors duration-300 hover:text-paper"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-brown transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist">
            © {SITE.copyrightYear} Postchitect. All rights reserved.
          </p>
          <p className="text-xs text-mist">
            {SITE.credit.split(" by ")[0]} by{" "}
            <span className="text-stone">Dignify</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
