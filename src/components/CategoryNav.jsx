export default function CategoryNav({ categories, selected, onSelect, theme }) {
  const navStyles = {
    minimal: {
      container: 'border-b border-gray-200 bg-white',
      button: 'px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all',
      active: 'border-b-2 border-minimal-primary text-minimal-primary',
      inactive: 'text-minimal-muted hover:text-minimal-text'
    },
    warm: {
      container: 'bg-warm-bg/80 backdrop-blur',
      button: 'px-6 py-3 text-sm font-medium rounded-full transition-all mx-1',
      active: 'bg-warm-primary text-white shadow-md',
      inactive: 'text-warm-text hover:bg-warm-accent/20'
    },
    urban: {
      container: 'bg-urban-bg border-y-2 border-urban-primary',
      button: 'px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all',
      active: 'bg-urban-primary text-urban-bg',
      inactive: 'text-urban-text hover:text-urban-accent'
    },
    premium: {
      container: 'border-y border-premium-muted/30 bg-white',
      button: 'px-6 py-3 text-sm font-display font-medium transition-all',
      active: 'border-b-2 border-premium-secondary text-premium-secondary',
      inactive: 'text-premium-muted hover:text-premium-text'
    }
  }

  const style = navStyles[theme]

  return (
    <nav className={`${style.container} sticky top-0 z-40 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <div className="flex items-center justify-center gap-2 py-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`${style.button} ${
                selected === category ? style.active : style.inactive
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
