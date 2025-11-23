import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-sans">
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Code Name Verity by Elizabeth E. Wein
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            A deep dive into one of the greatest, most detailed historical fiction novels of the 21st century.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/learn"
            className="px-8 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors font-semibold"
          >
            Start Learning
          </Link>

          <a
            href="/about"
            className="px-8 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors font-semibold"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
