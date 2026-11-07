import { StoreButtons } from "@/components/StoreButtons";
import { Reveal } from "@/components/Reveal";
import { Phone } from "@/components/Screen";

// Layout family: closing accent panel, centered copy with a device rising from the bottom edge.
export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <Reveal>
        <div className="overflow-hidden rounded-[var(--radius-card)] bg-accent-soft px-6 pt-20 text-center md:pt-28">
          <h2 className="mx-auto text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-6xl">
            <span className="block">Commence ce soir.</span>{" "}
            <span className="block">Un tap suffit.</span>
          </h2>
          <StoreButtons className="mt-10 justify-center" />
          <div className="mx-auto mt-16 h-[300px] w-[260px] overflow-hidden md:h-[380px] md:w-[320px]">
            <Phone
              name="01-accueil"
              alt="Accueil de Symio : Bonjour, et la carte Comment tu te sens aujourd’hui ?"
              sizes="320px"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
