import { SITE, WHATSAPP_URL } from "../constants/site";

export default function Footer() {
  return (
    <footer className="bg-[#111315] text-[#F1EEE7]">
      <div className="container-x pb-8 pt-6 sm:pb-10 sm:pt-8">
        <div className="grid grid-cols-3 items-center gap-2 border-t border-[#F1EEE7]/12 pt-6 sm:gap-6 sm:pt-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[13px] sm:tracking-[0.3em]">
            {SITE.name}
            <span className="mt-1 hidden text-[10px] font-normal tracking-[0.26em] text-[#F1EEE7]/45 sm:block">
              {SITE.tagline}
            </span>
          </p>

          <p className="text-center text-[6px] uppercase tracking-[0.05em] text-[#F1EEE7]/45 sm:text-[11px] sm:tracking-[0.2em]">
            © {SITE.copyrightYear} {SITE.name}
          </p>

          <div className="flex justify-end gap-2 sm:gap-6">
            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[7px] uppercase tracking-[0.08em] text-[#F1EEE7]/45 transition-colors duration-300 hover:text-[#DFA12A] sm:text-[11px] sm:tracking-[0.2em]"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[7px] uppercase tracking-[0.08em] text-[#F1EEE7]/45 transition-colors duration-300 hover:text-[#DFA12A] sm:text-[11px] sm:tracking-[0.2em]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-[7px] uppercase tracking-[0.16em] text-[#F1EEE7]/30 sm:mt-6 sm:text-[10px] sm:tracking-[0.25em]">
          {SITE.credit}
        </p>
      </div>
    </footer>
  );
}
