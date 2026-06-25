import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import ganesha from "@/assets/ganesha.png";
import spaceBg from "@/assets/space-bg.jpg";
import om from "@/assets/om.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ganesh Puja Invitation — Physics Department" },
      {
        name: "description",
        content:
          "You are cordially invited to the Ganesh Puja of the Physics Department on 14 September 2026.",
      },
      { property: "og:title", content: "Ganesh Puja Invitation — Physics Department" },
      {
        property: "og:description",
        content: "A cosmic celebration of devotion — 14 September 2026.",
      },
    ],
  }),
  component: Invitation,
});

const TRACKS = ["/audio/vakratunda.mp3", "/audio/aarti.mp3"];

function Starfield() {
  // deterministic stars
  const stars = Array.from({ length: 80 }, (_, i) => ({
    top: (i * 37) % 100,
    left: (i * 53) % 100,
    size: ((i * 7) % 3) + 1,
    delay: (i % 10) * 0.3,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-gold"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 6px currentColor",
          }}
        />
      ))}
    </div>
  );
}

function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1600);
  };
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <Starfield />
      <div className="relative z-10 flex flex-col items-center gap-10">
        <img
          src={om}
          alt=""
          width={80}
          height={80}
          className="animate-spin-slow opacity-90"
        />
        <p
          className="font-devanagari max-w-2xl text-center text-lg md:text-xl leading-relaxed"
          style={{
            color: "oklch(0.62 0.26 27)",
            textShadow: "0 0 24px oklch(0.62 0.24 27 / 0.5)",
          }}
        >
          वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ।
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>

        <h2 className="font-display text-center text-xl tracking-[0.4em] text-gold-soft uppercase">
          A Sacred Invitation Awaits
        </h2>

        <div
          className="envelope-shadow relative h-[340px] w-[500px] max-w-[94vw]"
          style={{ perspective: "1400px" }}
        >
          {/* Envelope body with ornate border */}
          <div className="absolute inset-0 overflow-hidden rounded-md bg-gradient-to-br from-[oklch(0.58_0.19_30)] via-[oklch(0.48_0.20_28)] to-[oklch(0.36_0.18_25)] shadow-[inset_0_0_80px_oklch(0_0_0/0.4),0_30px_60px_-15px_oklch(0_0_0/0.6)]">
            <div className="absolute inset-2 rounded-sm border border-gold/40" />
            <div className="absolute inset-3 rounded-sm border border-gold/20" />
            {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((p) => (
              <span key={p} className={`absolute ${p} text-gold/70 text-sm`}>
                ❋
              </span>
            ))}
          </div>

          {/* Ganesha murti centered on the envelope — the click target */}
          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            aria-label="Open invitation"
            className="group absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-70"
            style={{
              transform: opening
                ? "translate(-50%, -260px) scale(0.9)"
                : "translate(-50%, -50%)",
              transition: "transform 1000ms ease",
            }}
          >
            <span
              className="absolute inset-0 -z-10 rounded-full blur-xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.85 0.18 80 / 0.85), transparent 70%)",
              }}
            />
            <img
              src={ganesha}
              alt="Ganesha"
              width={160}
              height={160}
              className="h-[160px] w-[160px] object-contain drop-shadow-[0_8px_20px_oklch(0_0_0/0.55)]"
            />
          </button>

          {/* Top flap */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 origin-top transition-transform duration-1000"
            style={{
              transform: opening ? "rotateX(-180deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="mx-auto h-0 w-0"
              style={{
                borderLeft: "250px solid transparent",
                borderRight: "250px solid transparent",
                borderTop: "160px solid oklch(0.50 0.21 28)",
                maxWidth: "100%",
                filter: "drop-shadow(0 4px 6px oklch(0 0 0 / 0.35))",
              }}
            />
          </div>

          {/* Bottom flap shadow */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[160px]"
            style={{
              background:
                "linear-gradient(180deg, transparent, oklch(0.28 0.16 25) 65%)",
              clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
            }}
          />
        </div>


      </div>
    </div>
  );
}

function Programme() {
  const items = [
    { time: "10:00 AM", title: "Puja Aarambh", note: "Commencement of the sacred Puja" },
    { time: "12:00 PM", title: "Pushpanjali", note: "Floral offering to Lord Ganesha" },
    { time: "1:00 PM", title: "Prasad Sevan", note: "Pangat system — communal meal" },
  ];
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">The Order of the Day</p>
        <h3 className="font-display mt-3 text-4xl text-gold-grad">Programme</h3>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
      <ol className="space-y-6">
        {items.map((it, i) => (
          <li
            key={i}
            className="card-cosmos relative flex items-start gap-6 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-cosmos">
                <span className="font-display text-xs text-gold">{`0${i + 1}`}</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-display text-lg tracking-widest text-saffron">{it.time}</p>
              <h4 className="font-display mt-1 text-2xl text-foreground">{it.title}</h4>
              <p className="mt-1 text-sm italic text-foreground/70">{it.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIdx, setTrackIdx] = useState(0);
  const [audioMissing, setAudioMissing] = useState(false);

  useEffect(() => {
    if (!opened || !audioRef.current) return;
    const a = audioRef.current;
    a.volume = 0.6;
    a.play().catch(() => {
      /* user-gesture handled by button */
    });
  }, [opened, trackIdx]);

  const handleEnded = () => {
    setTrackIdx((i) => (i + 1) % TRACKS.length);
  };
  const handleError = () => setAudioMissing(true);

  if (!opened) return <Envelope onOpen={() => setOpened(true)} />;

  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.08 0.05 280 / 0.85), oklch(0.06 0.04 290 / 0.95)), url(${spaceBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Starfield />

      <audio
        ref={audioRef}
        src={TRACKS[trackIdx]}
        onEnded={handleEnded}
        onError={handleError}
        autoPlay
      />

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="animate-reveal flex flex-col items-center">
          <div className="relative animate-float-slow animate-glow">
            <div className="absolute inset-0 -z-10 animate-spin-slow opacity-40">
              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, oklch(0.82 0.16 85 / 0.4), transparent, oklch(0.62 0.24 27 / 0.4), transparent)",
                }}
              />
            </div>
            <img
              src={ganesha}
              alt="Lord Ganesha"
              width={1024}
              height={1024}
              className="h-[320px] w-[320px] object-contain md:h-[420px] md:w-[420px]"
            />
          </div>

          <h1 className="font-devanagari mt-10 max-w-3xl text-center text-2xl leading-relaxed md:text-3xl"
              style={{ color: "oklch(0.62 0.26 27)", textShadow: "0 0 30px oklch(0.62 0.24 27 / 0.6)" }}>
            वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ।
            <br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </h1>

          <p className="mt-8 text-xs uppercase tracking-[0.5em] text-gold-soft">
            14 · September · 2026
          </p>
        </div>
      </section>

      {/* INVITATION */}
      <section className="relative px-6 py-24">
        <div className="card-cosmos mx-auto max-w-3xl rounded-3xl p-10 text-center md:p-16">
          <img
            src={om}
            alt=""
            width={64}
            height={64}
            loading="lazy"
            className="mx-auto animate-float-medium"
          />
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-gold-soft">
            With devotion across the cosmos
          </p>
          <h2 className="font-display mt-4 text-4xl text-gold-grad md:text-5xl">
            Ganesh Puja
          </h2>
          <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-body mx-auto mt-8 max-w-xl text-lg italic leading-relaxed text-foreground/85">
            The Physics Department joyfully invites every <strong className="not-italic text-gold">
            student — senior and junior alike — every member of the Faculty, and our
            esteemed Vice-Chancellor</strong> to gather in reverence for our
            college Ganesh Puja.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-saffron">
            Monday · 14 September 2026
          </p>
        </div>
      </section>

      {/* PROGRAMME */}
      <Programme />

      {/* CLOSING */}
      <section className="relative px-6 pb-32 pt-10">
        <div className="mx-auto max-w-2xl text-center">
          <img
            src={ganesha}
            alt=""
            width={1024}
            height={1024}
            loading="lazy"
            className="mx-auto h-32 w-32 animate-float-medium object-contain opacity-90"
          />
          <p className="font-display mt-8 text-2xl leading-relaxed text-gold-grad md:text-3xl">
            You are cordially invited to the
            <br />
            Ganesh Puja of the
            <br />
            <span className="text-saffron">Physics Department.</span>
          </p>
          <p className="mt-6 font-devanagari text-lg text-vermilion">
            ॥ गणपति बाप्पा मोरया ॥
          </p>
        </div>
      </section>

      {/* Audio note */}
      {audioMissing && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-gold/40 bg-cosmos-deep/90 px-4 py-2 text-xs text-gold-soft backdrop-blur">
          Add <code>public/audio/vakratunda.mp3</code> &amp; <code>aarti.mp3</code> to enable music.
        </div>
      )}
    </main>
  );
}
