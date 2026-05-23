import { Briefcase, Menu, MessageCircle, Star, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { name: 'Home', icon: User, href: '#home' },
  { name: 'Works', icon: Briefcase, href: '#podcast' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Reviews', icon: Star, href: '#reviews' },
  { name: 'Contact', icon: MessageCircle, href: '#contact' },
];

const GLASS_STYLES = `
  @keyframes glassSlideDown {
    from { opacity: 0; transform: translateY(-8px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }
  @keyframes glassItemFade {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes glassShimmer {
    0%   { transform: translateX(-120%); }
    100% { transform: translateX(220%);  }
  }
  @keyframes glassCaustic {
    0%   { transform: translate(0%, 0%)    scale(1);   opacity: 0.55; }
    50%  { transform: translate(8%, -4%)   scale(1.08); opacity: 0.85; }
    100% { transform: translate(0%, 0%)    scale(1);   opacity: 0.55; }
  }
  @keyframes glassRipple {
    0%   { transform: translate(-2%, 0%) scale(1);    opacity: 0.4; }
    50%  { transform: translate(2%, 1%)  scale(1.04); opacity: 0.7; }
    100% { transform: translate(-2%, 0%) scale(1);    opacity: 0.4; }
  }
  .glass-menu-enter { animation: glassSlideDown 0.26s cubic-bezier(0.22,1,0.36,1) forwards; }
  .glass-item-fade  { animation: glassItemFade  0.22s cubic-bezier(0.22,1,0.36,1) both; }
  .glass-shimmer    { animation: glassShimmer   7s   cubic-bezier(0.4,0,0.2,1) infinite; }
  .glass-caustic    { animation: glassCaustic   12s  ease-in-out infinite; }
  .glass-ripple     { animation: glassRipple    9s   ease-in-out infinite; }
  .glass-surface {
    background:
      radial-gradient(120% 180% at 12% 0%,  rgba(255,160,110,0.10) 0%, transparent 55%),
      radial-gradient(120% 180% at 88% 100%, rgba(120,180,255,0.07) 0%, transparent 55%),
      linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%),
      rgba(8,5,4,0.45);
    backdrop-filter: blur(22px) saturate(180%) brightness(1.05);
    -webkit-backdrop-filter: blur(22px) saturate(180%) brightness(1.05);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.18),
      inset 0 -1px 0 rgba(255,255,255,0.04),
      inset 1px 0 0 rgba(255,255,255,0.05),
      inset -1px 0 0 rgba(255,255,255,0.05),
      0 18px 50px -10px rgba(0,0,0,0.55),
      0 4px 18px -6px rgba(255,122,60,0.18);
  }
  .glass-surface-scrolled {
    background:
      radial-gradient(120% 180% at 12% 0%,  rgba(255,160,110,0.14) 0%, transparent 55%),
      radial-gradient(120% 180% at 88% 100%, rgba(120,180,255,0.09) 0%, transparent 55%),
      linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%),
      rgba(8,5,4,0.58);
  }
  .glass-surface-menu {
    background:
      radial-gradient(120% 180% at 12% 0%,  rgba(255,160,110,0.12) 0%, transparent 55%),
      radial-gradient(120% 180% at 88% 100%, rgba(120,180,255,0.08) 0%, transparent 55%),
      linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%),
      rgba(8,5,4,0.88);
  }
`;

function GlassFilters() {
  return (
    <>
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-water" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.022" numOctaves="2" seed="7">
              <animate
                attributeName="baseFrequency"
                dur="22s"
                values="0.012 0.022;0.018 0.014;0.012 0.022"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="6" />
          </filter>
        </defs>
      </svg>
      <style>{GLASS_STYLES}</style>
    </>
  );
}

function GlassEffects() {
  return (
    <>
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="glass-caustic absolute -top-1/2 -left-10 w-[55%] h-[260%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(255,160,90,0.22), transparent 70%)' }}
        />
        <div
          className="glass-ripple absolute -bottom-1/2 right-0 w-[45%] h-[260%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(120,170,255,0.16), transparent 70%)' }}
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay"
        style={{ filter: 'url(#glass-water)' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.10)_45%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.10)_55%,transparent_100%)]" />
      </div>

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glass-shimmer absolute top-0 -left-1/3 h-full w-1/3 bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.0)_30%,rgba(255,255,255,0.10)_50%,rgba(255,255,255,0.0)_70%,transparent_100%)]" />
      </div>

      <div aria-hidden className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),rgba(255,180,130,0.45),rgba(255,255,255,0.55),transparent)]" />
      <div aria-hidden className="absolute inset-x-6 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.45),transparent)]" />
    </>
  );
}

function NavbarLogo() {
  return (
    <a href="#home" className="group relative flex items-center justify-self-start">
      <img
        src="/logo.png"
        className="w-[28px] transition-transform duration-300 group-hover:scale-[1.08]"
        alt="Xaviers"
      />
      <div className="absolute inset-0 rounded-xl bg-[#ff7a3c]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </a>
  );
}

function DesktopNavLinks({ navRef, pill, onItemEnter, onNavLeave }) {
  return (
    <div
      ref={navRef}
      onMouseLeave={onNavLeave}
      className="hidden md:flex items-center gap-0.5 relative"
    >
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 rounded-[12px] pointer-events-none
                   bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]
                   border border-white/[0.22]
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,122,60,0.18),0_4px_14px_rgba(255,122,60,0.18),0_0_20px_rgba(255,180,130,0.10)]
                   backdrop-blur-md
                   transition-[left,width,opacity] duration-300 ease-out"
        style={{
          opacity: pill.opacity,
          left: pill.left,
          width: pill.width,
          height: pill.height,
        }}
      />

      {NAV_ITEMS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onMouseEnter={onItemEnter}
          className="relative z-10 px-[15px] py-[8px] rounded-[12px]
                     text-[12.5px] font-bold tracking-[0.07em] uppercase
                     text-[#F5EFE2]/65 hover:text-[#F5EFE2]
                     transition-colors duration-200"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

function NavbarBrandMark() {
  return (
    <a href="#home" className="hidden md:flex items-center justify-self-end">
      <img
        src="/xavier.png"
        alt="Xavier Media"
        className="h-[50px] w-auto object-contain transition-opacity duration-200 hover:opacity-90"
      />
    </a>
  );
}

function MobileMenuToggle({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle menu"
      className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-xl
                 bg-[rgba(14,10,8,0.88)] hover:bg-[rgba(22,16,12,0.95)]
                 border border-white/[0.22] hover:border-white/[0.32]
                 text-[#F5EFE2] hover:text-[#F5EFE2]
                 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_14px_rgba(0,0,0,0.35)]
                 backdrop-blur-md
                 transition-all duration-200"
    >
      <span className={['absolute transition-all duration-200', isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'].join(' ')}>
        <X className="w-[15px] h-[15px]" />
      </span>
      <span className={['absolute transition-all duration-200', isOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'].join(' ')}>
        <Menu className="w-[15px] h-[15px]" />
      </span>
    </button>
  );
}

function MobileNavMenu({ onClose }) {
  return (
    <div className="md:hidden pointer-events-auto mt-2 glass-menu-enter">
      <div className="relative rounded-2xl overflow-hidden glass-surface glass-surface-menu border border-white/[0.16]">
        <div aria-hidden className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />

        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="glass-caustic absolute -top-1/2 left-0 w-[60%] h-[200%] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(255,160,90,0.20), transparent 70%)' }}
          />
        </div>

        <div className="relative px-3 py-3 flex flex-col gap-[3px]">
          {NAV_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={onClose}
                style={{ animationDelay: `${index * 35}ms` }}
                className="glass-item-fade group flex items-center gap-3 px-4 py-[11px] rounded-xl
                           text-[13px] font-semibold tracking-[0.06em] uppercase
                           text-[#F5EFE2]/70 hover:text-[#F5EFE2]
                           border border-transparent hover:border-white/[0.18]
                           hover:bg-white/[0.07]
                           hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.20)]
                           transition-all duration-200"
              >
                <span className="text-[#ff7a3c]/70 group-hover:text-[#ff7a3c] transition-colors duration-200">
                  <Icon className="w-4 h-4" />
                </span>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState({ opacity: 0, left: 0, width: 0, height: 0 });
  const desktopNavRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleItemEnter = (event) => {
    const nav = desktopNavRef.current;
    const item = event.currentTarget;
    if (!nav) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    setPill({
      opacity: 1,
      left: itemRect.left - navRect.left,
      width: itemRect.width,
      height: itemRect.height,
    });
  };

  const handleNavLeave = () => setPill((prev) => ({ ...prev, opacity: 0 }));

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <>
      <GlassFilters />

      <nav className="fixed top-0 left-0 right-0 z-50 font-['Plus_Jakarta_Sans',sans-serif] pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4">
          <div
            className={[
              'relative pointer-events-auto rounded-2xl overflow-hidden',
              'glass-surface border border-white/[0.10]',
              'transition-all duration-500 ease-out',
              scrolled ? 'glass-surface-scrolled border-white/[0.14]' : '',
            ].join(' ')}
          >
            <GlassEffects />

            <div className="relative px-4 sm:px-6">
              <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] h-[58px] sm:h-[64px]">
                <NavbarLogo />
                <DesktopNavLinks
                  navRef={desktopNavRef}
                  pill={pill}
                  onItemEnter={handleItemEnter}
                  onNavLeave={handleNavLeave}
                />

                <div className="flex items-center justify-end gap-3 md:col-start-3">
                  <NavbarBrandMark />
                  <MobileMenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
                </div>
              </div>
            </div>
          </div>

          {isMenuOpen && <MobileNavMenu onClose={closeMenu} />}
        </div>
      </nav>
    </>
  );
}
