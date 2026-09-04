export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              Seoul · Since 2014
            </p>
            <h1 className="font-serif text-[13vw] leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-8xl text-balance">
              시간을 <span className="italic text-accent">입다</span>
            </h1>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              ATELIER NOR는 유행보다 오래 남는 옷을 만듭니다. 절제된 실루엣과
              정직한 소재로, 매일의 옷장에 오래 머무는 한 벌을 짓습니다.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                컬렉션 보기
              </a>
              <a
                href="#brand"
                className="text-sm text-foreground underline-offset-4 hover:underline"
              >
                브랜드 이야기 →
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <img
                src="/hero-editorial.png"
                alt="ATELIER NOR 캠페인 - 뉴트럴 톤의 테일러드 룩을 착용한 모델"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden bg-background px-5 py-4 lg:block">
              <p className="font-serif text-3xl text-foreground">FW 2026</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                New Collection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-border py-4 lg:mt-28">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
          <span>지속가능한 소재</span>
          <span className="text-accent">·</span>
          <span>국내 아틀리에 제작</span>
          <span className="text-accent">·</span>
          <span>12개 플래그십 스토어</span>
          <span className="text-accent">·</span>
          <span>28개국 배송</span>
        </div>
      </div>
    </section>
  )
}
