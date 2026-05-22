"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary"></div>
              <span className="font-bold gradient-text">
                Hungarytollaslabda
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              A tollasgolyó sport elő segítségével
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigáció</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/play-types"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Játéktípusok
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Történet
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Szabályok
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Információ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/equipment"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Felszerelés
                </Link>
              </li>
              <li>
                <Link
                  href="/facts"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Érdekességek
                </Link>
              </li>
              <li>
                <Link
                  href="/preparation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Felkészülés
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Jogi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Adatvédelem
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Feltételek
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sütik
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Rólunk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; Hungarytollaslabda.
          </p>
          <p className="text-sm text-muted-foreground">
            contacts@hungarytollaslabda.com
          </p>
        </div>
      </div>
    </footer>
  );
}
