const ROLES = [
  { title: "시니어 패턴 디자이너", type: "정규직 · 서울" },
  { title: "리테일 매니저", type: "정규직 · 성수 플래그십" },
  { title: "지속가능성 소재 리서처", type: "정규직 · 파주 아틀리에" },
]

export function Careers() {
  return (
    <section id="careers" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Careers</p>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            함께 옷을 짓는 사람들
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            정직한 옷을 향한 고집을 나눌 동료를 찾습니다. 채용 소식과 협업
            제안은 언제든 환영합니다.
          </p>
          <a
            href="mailto:people@ateliernor.com"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            people@ateliernor.com
          </a>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-border">
            {ROLES.map((role) => (
              <li key={role.title}>
                <a
                  href="#careers"
                  className="group flex items-center justify-between gap-4 border-b border-border py-6 transition-colors hover:bg-secondary"
                >
                  <div>
                    <p className="font-serif text-xl text-foreground">{role.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{role.type}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-lg text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
