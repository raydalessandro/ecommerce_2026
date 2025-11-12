import { Palette } from 'lucide-react'

export default function ThemeSwitcher({ currentTheme, onThemeChange }) {
  const themes = [
    { id: 'minimal', name: 'Modern Minimalist', color: 'bg-black' },
    { id: 'warm', name: 'Warm Local', color: 'bg-amber-700' },
    { id: 'urban', name: 'Bold Urban', color: 'bg-orange-600' },
    { id: 'premium', name: 'Clean Premium', color: 'bg-gradient-to-r from-black to-yellow-600' }
  ]

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
          <Palette size={18} className="text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">Design Theme</span>
        </div>
        
        <div className="space-y-2">
          {themes.map(theme => (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-all flex items-center gap-3 ${
                currentTheme === theme.id 
                  ? 'bg-blue-50 border-2 border-blue-500' 
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className={`w-6 h-6 rounded ${theme.color} border border-gray-300`} />
              <span className="text-sm font-medium text-gray-700">{theme.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Clicca per testare diverse grafiche
          </p>
        </div>
      </div>
    </div>
  )
}
