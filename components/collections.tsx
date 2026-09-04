const ITEMS = [
  {
    img: "/collection-02.png",
    tag: "Outerwear",
    title: "The Overcoat Line",
    desc: "재단의 균형을 극한까지 다듬은 시그니처 코트 라인.",
    span: "lg:col-span-7",
    ratio: "aspect-[3/2]",
  },
  {
    img: "/collection-01.png",
    tag: "Knitwear",
    title: "Soft Structure",
    desc: "체온을 품는 천연 울과 캐시미어 니트.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    img: "/collection-03.png",
    tag: "Essentials",
    title: "Everyday Cotton",
    desc: "유기농 코튼으로 짓는 매일의 기본기.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
]

export function Collections() {
  return (
    <section id="collections" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Collections</p>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              한 벌마다 담긴 태도
            </h2>
          </div>
          <a
            href="#careers"
            className="text-sm text-foreground underline-offset-4 hover:underline"
          >
            전체 라인업 보기 →
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className={`group ${item.span}`}
            >
              <div className={`relative w-full overflow-hidden rounded-sm ${item.ratio}`}>
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={`${item.title} 컬렉션 이미지`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                  {item.tag}
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
