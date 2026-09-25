import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { type Theme } from '../../hooks/useTheme'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
  className?: string
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
}) => {
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`theme-toggle ${className}`}
      aria-label={`Cambiar a modo ${isLight ? 'oscuro' : 'claro'}`}
      title={`Cambiar a modo ${isLight ? 'oscuro' : 'claro'}`}
    >
      <span className="theme-toggle-icon">
        {isLight ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </span>
    </button>
  )
}
