import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center border border-line text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun size={18} strokeWidth={1.6} /> : <Moon size={18} strokeWidth={1.6} />}
    </button>
  )
}

export default ThemeToggle
