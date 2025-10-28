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
        <source src="/videos/Paul.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to My Next.js App
        </h1>
        <p className="max-w-xl text-lg text-zinc-200">
          Thanks for stopping by! Explore the project, customize it to your
          needs, and build something great.
        </p>
      </div>
    </main>
  );
}
