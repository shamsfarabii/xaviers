import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const typography = {
  heroSubtext:
    "mx-auto mt-[30px] max-w-[920px] text-[clamp(11px,1.25vw,16px)] font-medium uppercase leading-[1.7] tracking-[0.14em] text-[#F5EFE2]/70 md:leading-[1.8] md:tracking-[0.24em]",
}
