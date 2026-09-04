"use client"

import { useState, useEffect } from "react"

const NAV = [
  { label: "브랜드", href: "#brand" },
  { label: "컬렉션", href: "#collections" },
  { label: "아틀리에", href: "#atelier" },
  { label: "지속가능성", href: "#sustainability" },
  { label: "채용", href: "#careers" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="font-serif text-xl tracking-tight text-foreground">
          ATELIER<span className="text-accent"> NOR</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#careers"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          문의하기
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={open}
        >
          <span className="sr-only">메뉴</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="모바일 메뉴">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-foreground last:border-none"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#careers"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-primary px-5 py-3 text-center text-sm text-primary-foreground"
            >
              문의하기
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
