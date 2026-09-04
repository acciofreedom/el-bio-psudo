const PILLARS = [
  {
    no: "01",
    title: "책임 있는 소재",
    desc: "GOTS 인증 유기농 코튼과 재생 울을 우선 사용하며, 매 시즌 친환경 소재 비율을 높이고 있습니다.",
  },
  {
    no: "02",
    title: "오래 입는 설계",
    desc: "유행을 타지 않는 실루엣과 튼튼한 봉제. 무상 수선 프로그램으로 한 벌의 수명을 늘립니다.",
  },
  {
    no: "03",
    title: "투명한 생산",
    desc: "협력 공방과 원단 산지를 공개하고, 공정한 노동 환경을 정기적으로 점검합니다.",
  },
]

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Sustainability</p>
          <h2 className="font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
            잘 만든 옷이 가장 지속가능한 옷입니다
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.no} className="bg-primary p-8 lg:p-10">
              <p className="font-serif text-2xl text-accent">{p.no}</p>
              <h3 className="mt-6 text-lg text-primary-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
