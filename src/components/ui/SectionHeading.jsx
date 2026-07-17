const headingClass =
  "text-[clamp(30px,7vw,72px)] font-black uppercase leading-[1] tracking-[-0.02em]";
const primaryClass = "block text-[#F5EFE2]";
const accentClass =
  "block text-[#ff7038] drop-shadow-[0_0_24px_rgba(255,122,60,0.22)]";
const italicClass = "inline-block -skew-x-6 [font-style:italic]";

export default function SectionHeading({ primary, secondary, as: Tag = "h2", noWrap = false }) {
  const primaryFinal = noWrap
    ? `${primaryClass} whitespace-normal min-[641px]:whitespace-nowrap`
    : primaryClass;
  return (
    <Tag className={headingClass}>
      <span className={primaryFinal}>{primary}</span>
      <span className={accentClass}>
        <em className={italicClass}>{secondary}</em>
      </span>
    </Tag>
  );
}
