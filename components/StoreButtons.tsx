import { AppStoreButton } from "@/components/AppStoreButton";
import { PLAY_CTA_LABEL, PLAY_STORE_BADGE, PLAY_STORE_URL } from "@/lib/site";

type Props = { size?: "md" | "sm"; className?: string };

// Official Google Play badge, used as-is, per Google's brand guidelines.
// Same height as the App Store badge so both read as a pair.
export function PlayStoreButton({ size = "md", className = "" }: Props) {
  return (
    <a
      href={PLAY_STORE_URL}
      className={`inline-block shrink-0 rounded-[10px] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- small static badge */}
      <img
        src={PLAY_STORE_BADGE}
        alt={PLAY_CTA_LABEL}
        width={646}
        height={192}
        className={`block w-auto ${size === "md" ? "h-11 sm:h-[54px]" : "h-10"}`}
      />
    </a>
  );
}

// App Store and Google Play badges side by side, wrapping on narrow screens.
export function StoreButtons({ size = "md", className = "" }: Props) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}>
      <AppStoreButton size={size} />
      <PlayStoreButton size={size} />
    </div>
  );
}
