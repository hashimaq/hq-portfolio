
import { profile } from '../data/profile'
import Button from '../components/Button'
import HeroVisual from '../components/HeroVisual'
import SectionEyebrow from '../components/SectionEyebrow'
import ThemeToggle from '../components/ThemeToggle'
import { useTheme } from '../hooks/useTheme'

function Hero() {
  const { theme, toggleTheme } = useTheme()

  return (
    <section className="relative min-h-screen overflow-hidden bg-paper text-fg transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-16">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-semibold tracking-tight">
            HQ<span className="text-accent">.</span>
          </span>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Hero content */}
        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          <div className="order-2 lg:order-1">
            <SectionEyebrow index="01" label="INTRODUCTION" />

            <p className="mt-8 text-sm font-medium text-accent">
              {profile.availability}
            </p>

            <h1 className="mt-3 font-serif text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              {profile.firstName}
              <br />
              {profile.lastName}
              <span className="text-accent">.</span>
            </h1>

            <h2 className="mt-7 text-lg font-medium sm:text-xl">
              {profile.role}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {profile.ctas.map((cta) => (
                <Button
                  key={cta.id}
                  href={cta.href}
                  variant={cta.variant}
                >
                  {cta.label}
                </Button>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm">
              <a
                href="https://github.com/hashimaq"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/mhashimahmad/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroVisual alt="Abstract violet 3D visual representing Hashim's creative and technical work" />
          </div>

        </div>

        {/* Bottom label */}
        <div className="flex items-center justify-between border-t border-line py-5 text-xs text-muted">
          <span>SOFTWARE ENGINEERING · 2026</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>

      </div>
    </section>
  )
}

export default Hero
