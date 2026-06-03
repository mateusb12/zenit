export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const containerClass =
  "mx-auto w-[min(1160px,calc(100%-40px))] max-[680px]:w-[min(calc(100%-28px),1160px)]";

export const sectionClass =
  "scroll-mt-[92px] py-[88px] max-[680px]:py-[72px]";

export const gridClass = "grid gap-[18px]";

export const cardClass =
  "rounded-[20px] border border-[#d9dee5] bg-white text-[#111111] shadow-[0_12px_30px_rgba(7,26,46,0.08)]";

export const cardNumberClass =
  "grid h-[42px] w-[42px] place-items-center rounded-[14px] bg-[#e9f1f8] text-sm font-extrabold text-[#0e2a47]";
