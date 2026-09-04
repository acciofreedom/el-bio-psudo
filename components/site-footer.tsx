const COLUMNS = [
  {
    heading: "브랜드",
    links: ["브랜드 스토리", "컬렉션", "아틀리에", "지속가능성"],
  },
  {
    heading: "고객",
    links: ["스토어 안내", "수선 프로그램", "배송 · 반품", "자주 묻는 질문"],
  },
  {
    heading: "회사",
    links: ["채용", "언론 문의", "협업 제안", "개인정보 처리방침"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl text-foreground">
              ATELIER<span className="text-accent"> NOR</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              시간이 지나도 입고 싶은 옷. 서울에서 시작한 컨템포러리 패션 하우스.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-xs uppercase tracking-widest text-foreground">{col.heading}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ATELIER NOR. All rights reserved.</p>
          <p>서울특별시 성동구 성수이로 00, ATELIER NOR</p>
        </div>
      </div>
    </footer>
  )
}
