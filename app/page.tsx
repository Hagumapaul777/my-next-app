export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-sans text-zinc-50">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/Paul2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-emerald-400 sm:text-6xl">
            <span className="block">Powering the Future</span>
            <span className="block">of Cloud Infrastructure</span>
          </h1>
          <p className="text-lg text-zinc-200 sm:text-xl">
            Cloud Lab is building a next-generation data center designed for
            speed, reliability, and scalability.
          </p>
          <p className="inline-flex items-center gap-3 rounded-full border border-cyan-400/80 bg-cyan-500/20 px-6 py-2 text-base font-semibold text-cyan-100 shadow-lg shadow-cyan-500/20 backdrop-blur">
            <span aria-hidden="true">
              <svg
                className="h-5 w-5 text-cyan-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.5 15a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
                <path d="M12 2a10 10 0 0 1 10 10c0 4 0 6-1.5 8s-2 2-8 2-6.5 0-8-2S3 16 2 12 2 6 3.5 4 6 2 12 2Z" />
                <path d="m13.4 14.6 5-5" />
              </svg>
            </span>
            <span>Beta version launching in 1 day — January 1, 2026</span>
          </p>
        </div>

        <ul className="flex flex-col gap-8 text-left text-lg font-semibold text-white sm:flex-row sm:gap-12">
          <li className="flex flex-col items-center gap-4 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-cyan-500/20">
              <svg
                className="h-8 w-8 text-cyan-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
              </svg>
            </span>
            <span>High Performance</span>
          </li>
          <li className="flex flex-col items-center gap-4 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-emerald-500/20">
              <svg
                className="h-8 w-8 text-emerald-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3 4 6v6c0 5.25 3.438 10.062 8 11 4.562-.938 8-5.75 8-11V6l-8-3Z" />
                <path d="m9.5 12.5 2 2 3-4" />
              </svg>
            </span>
            <span>Secure &amp; Reliable</span>
          </li>
          <li className="flex flex-col items-center gap-4 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-purple-500/20">
              <svg
                className="h-8 w-8 text-purple-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 7.5C6 5.57 7.57 4 9.5 4c.64 0 1.24.18 1.75.48A3 3 0 0 1 15 6.5a3 3 0 0 1 3 3c0 .29-.04.58-.11.84A3.5 3.5 0 0 1 20.5 14c0 1.93-1.57 3.5-3.5 3.5h-2.18A3 3 0 0 1 12 19.5c-1.08 0-2.02-.57-2.55-1.43A3.5 3.5 0 0 1 4.5 14c0-1.19.61-2.23 1.54-2.83A3 3 0 0 1 6 7.5Z" />
                <path d="M9.5 8v1.5" />
                <path d="M15 9l-.5 1.5" />
                <path d="M9 16h1" />
                <path d="M16 16h-1.5" />
              </svg>
            </span>
            <span>Scalable &amp; Sustainable</span>
          </li>
        </ul>

        <p className="text-base text-zinc-300 sm:text-lg">
          Trusted partner for businesses moving into the future of cloud
          computing.
        </p>
      </div>
    </main>
  );
}
