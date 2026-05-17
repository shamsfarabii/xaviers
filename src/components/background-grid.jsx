import { createPortal } from 'react-dom';

export function BackgroundGrid() {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="background-grid" aria-hidden="true">
      <style>{`
        .background-grid {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
          background:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(255, 112, 56, 0.14), transparent 46%),
            linear-gradient(180deg, #0a0a0a 0%, #030303 100%);
          background-size:
            32px 32px,
            32px 32px,
            cover,
            cover;
        }

        .background-grid::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 50% 54%,
              rgba(255, 112, 56, 0.2),
              transparent 30%
            ),
            radial-gradient(
              circle at 50% 72%,
              rgba(255, 112, 56, 0.08),
              transparent 36%
            );
          filter: blur(20px);
        }

        .background-grid::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0) 48%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        /* Make root surfaces transparent so the grid (rendered into body via
           portal, z-index: -1) shows through underneath all app content. */
        html, body { background: transparent !important; }
        #root { background: transparent !important; }
      `}</style>
    </div>,
    document.body
  );
}

export default BackgroundGrid;
