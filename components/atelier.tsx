const STATS = [
  { value: "2014", label: "설립 연도" },
  { value: "38", label: "장인 · 디자이너" },
  { value: "12", label: "플래그십 스토어" },
  { value: "94%", label: "친환경 소재 비율" },
]

export function Atelier() {
  return (
    <section id="atelier" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-[3/4]">
          <img
            src="/atelier.png"
            alt="ATELIER NOR 아틀리에에서 원단 작업을 하는 장인의 손"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">The Atelier</p>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            손끝에서 완성되는 정직함
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            모든 제품은 서울과 파주의 자체 아틀리에에서 제작됩니다. 패턴사와
            봉제 장인이 한 팀이 되어 샘플을 수십 번 고쳐 짓고, 완성된 옷은
            사람의 손을 거쳐 검수됩니다. 빠른 대량 생산 대신, 오래 남을 완성도를
            택했습니다.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4 lg:grid-cols-2">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-4xl text-foreground">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
