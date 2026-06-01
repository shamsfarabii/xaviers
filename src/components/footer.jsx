import { Mail, Phone } from 'lucide-react';
import { FaBehance, FaFacebookF, FaInstagram } from 'react-icons/fa';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#podcast' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mediaxavier',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_.xaviermedia._/',
    icon: FaInstagram,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/xaviermedia',
    icon: FaBehance,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-8 border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(8,5,4,0.6)_0%,rgba(0,0,0,0.95)_100%)]"
      aria-label="Site footer"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,122,60,0.5),transparent)]"
      />

      <div className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8 py-12 pb-[max(3rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt=""
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className="text-lg font-bold tracking-wide text-[#F5EFE2]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Xavier <span className="text-[#ff7a3c]">Media</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#F5EFE2]/60">
              Creative media production — video, reels, and design that tell your story.
            </p>
          </div>

          <div>
            <h3
              className="mb-4 text-xs font-extrabold uppercase tracking-[1.8px] text-[#ff8a4c]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#F5EFE2]/70 transition-colors duration-200 hover:text-[#ff7a3c]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-xs font-extrabold uppercase tracking-[1.8px] text-[#ff8a4c]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@xaviermediaagency.com"
                  className="flex items-center gap-2.5 text-sm text-[#F5EFE2]/70 transition-colors duration-200 hover:text-[#F5EFE2]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#ff7a3c]" aria-hidden />
                  hello@xaviermediaagency.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801537711112"
                  className="flex items-center gap-2.5 text-sm text-[#F5EFE2]/70 transition-colors duration-200 hover:text-[#F5EFE2]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#ff7a3c]" aria-hidden />
                  +880 1537 711112
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-xs font-extrabold uppercase tracking-[1.8px] text-[#ff8a4c]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Follow Us
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff7a3c]/30 bg-[rgba(255,122,60,0.08)] text-[#F5EFE2] transition-all duration-300 hover:scale-110 hover:border-[#ff7a3c]/60 hover:bg-[linear-gradient(135deg,#ff7a3c,#ff5a2a)] hover:shadow-[0_4px_18px_rgba(255,122,60,0.25)]"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-center text-xs text-[#F5EFE2]/45 sm:text-left">
            © {year} Xavier Media. All rights reserved.
          </p>
          <a
            href="https://www.behance.net/xaviermedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#F5EFE2]/45 transition-colors duration-200 hover:text-[#ff7a3c]"
          >
            View full portfolio on Behance →
          </a>
        </div>
      </div>
    </footer>
  );
}
