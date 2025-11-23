import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-dossier-panel border-b border-dossier-stain shadow-lg py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Title / Logo */}
        <Link 
          href="/" 
          className="font-serif text-2xl tracking-wide text-dossier-title hover:opacity-80 transition-opacity"
        >
          CODE NAME VERITY
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 font-serif text-lg">
          <Link 
            href="/historical-premise"
            className="text-dossier-ink hover:text-dossier-title transition-colors"
          >
            Historical Premise
          </Link>

          <Link 
            href="/character-analysis"
            className="text-dossier-ink hover:text-dossier-title transition-colors"
          >
            Character Analysis
          </Link>

          <Link 
            href="/favorite-quotes"
            className="text-dossier-ink hover:text-dossier-title transition-colors"
          >
            Favorite Quotes
          </Link>

          <Link 
            href="/personal-review"
            className="text-dossier-ink hover:text-dossier-title transition-colors"
          >
            Personal Review
          </Link>
        </div>
      </div>
    </nav>
  );
}
