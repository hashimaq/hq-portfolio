import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function readTheme() {
  const isDark = document.documentElement.classList.contains('dark')
  return isDark ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
