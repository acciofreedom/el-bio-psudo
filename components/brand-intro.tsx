export function BrandIntro() {
  return (
    <section id="brand" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Our Philosophy</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            우리는 더 많이 만드는 대신, 더 오래 입을 수 있는 옷을 짓기로 했습니다.
          </h2>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            2014년 작은 아틀리에에서 시작한 ATELIER NOR는 &lsquo;덜 사고, 오래
            입는&rsquo; 옷의 방식을 고민해 왔습니다. 우리는 계절마다 쏟아지는 트렌드가
            아니라, 몸에 익는 실루엣과 손이 자꾸 가는 소재를 연구합니다. 한 벌의
            옷이 누군가의 일상에 오래 머무를 때, 패션은 비로소 지속가능해진다고
            믿습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
