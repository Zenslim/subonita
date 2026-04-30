import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/site-data";
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-sand/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/subonita-logo.png" alt="Subonita Foundation logo" width={56} height={56} className="rounded-full border border-black/10 bg-white p-1" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brandRed">Subonita Foundation</p>
            <p className="text-xs text-black/70">Trauma Hub Project in Nepal</p>
          </div>
        </Link>
       <nav className="hidden items-center gap-6 md:flex">
  {navItems.map((item) => (
    <Link key={item.href} href={item.href} className="text-sm font-medium text-black/75 transition hover:text-brandRed">
      {item.label}
    </Link>
  ))}

</nav>
      </div>
    </header>
  );
}
