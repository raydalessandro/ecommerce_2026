export default function Hero({ theme }) {
  const heroStyles = {
    minimal: {
      bg: 'bg-gradient-to-r from-gray-50 to-gray-100',
      text: 'text-minimal-text',
      title: 'text-5xl font-bold tracking-tight',
      subtitle: 'text-xl text-minimal-muted',
      font: 'font-body'
    },
    warm: {
      bg: 'bg-gradient-to-r from-warm-bg to-amber-50',
      text: 'text-warm-text',
      title: 'text-4xl font-semibold',
      subtitle: 'text-lg text-warm-muted',
      font: 'font-body'
    },
    urban: {
      bg: 'bg-gradient-to-r from-urban-bg via-gray-900 to-urban-bg',
      text: 'text-urban-text',
      title: 'text-6xl font-black uppercase tracking-wider',
      subtitle: 'text-xl text-urban-accent font-bold uppercase',
      font: 'font-heading'
    },
    premium: {
      bg: 'bg-gradient-to-b from-white to-gray-50',
      text: 'text-premium-text',
      title: 'text-5xl font-display font-bold tracking-tight',
      subtitle: 'text-lg text-premium-muted font-display',
      font: 'font-display'
    }
  }

  const style = heroStyles[theme]

  return (
    <div className={`${style.bg} py-20 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`${style.title} ${style.text} ${style.font} mb-4`}>
          {theme === 'urban' ? 'Il Tuo Shop Locale' : 'Il Negozio di Settimo'}
        </h1>
        <p className={`${style.subtitle} ${style.font} mb-8`}>
          {theme === 'minimal' && 'Prodotti locali, qualità superiore'}
          {theme === 'warm' && 'Artigianato e tradizione dal 1985'}
          {theme === 'urban' && 'Fresh • Local • Authentic'}
          {theme === 'premium' && 'Eccellenza artigianale italiana'}
        </p>
        
        {/* Stats or Features */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
          <div>
            <div className={`${style.title.includes('6xl') ? 'text-4xl' : 'text-3xl'} font-bold ${
              theme === 'premium' ? 'text-premium-secondary' :
              theme === 'urban' ? 'text-urban-accent' :
              style.text
            } mb-2`}>
              50+
            </div>
            <div className={`text-sm ${style.subtitle}`}>
              Prodotti
            </div>
          </div>
          <div>
            <div className={`${style.title.includes('6xl') ? 'text-4xl' : 'text-3xl'} font-bold ${
              theme === 'premium' ? 'text-premium-secondary' :
              theme === 'urban' ? 'text-urban-accent' :
              style.text
            } mb-2`}>
              100%
            </div>
            <div className={`text-sm ${style.subtitle}`}>
              Locale
            </div>
          </div>
          <div>
            <div className={`${style.title.includes('6xl') ? 'text-4xl' : 'text-3xl'} font-bold ${
              theme === 'premium' ? 'text-premium-secondary' :
              theme === 'urban' ? 'text-urban-accent' :
              style.text
            } mb-2`}>
              24h
            </div>
            <div className={`text-sm ${style.subtitle}`}>
              Consegna
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
