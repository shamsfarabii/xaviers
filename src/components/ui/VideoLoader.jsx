export default function VideoLoader({ label = "Loading video" }) {
  return (
    <div
      className="flex flex-col items-center gap-5"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="relative h-[52px] w-[52px]">
        <div className="absolute inset-0 rounded-full border-2 border-[rgba(255,122,60,0.12)]" />
        <div
          className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#ff7a3c] border-r-[#ff5a2a]"
          style={{ animationDuration: "0.9s" }}
        />
        <div className="absolute inset-[7px] rounded-full bg-[rgba(255,122,60,0.08)] shadow-[inset_0_0_20px_rgba(255,122,60,0.12)]" />
        <div className="absolute inset-[21px] rounded-full bg-[#ff7a3c] shadow-[0_0_18px_rgba(255,122,60,0.85)] animate-pulse" />
      </div>
      <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#ff8a4c]">
        Loading
      </span>
    </div>
  );
}
