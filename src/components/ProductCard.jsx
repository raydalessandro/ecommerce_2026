import { ShoppingCart, Heart } from 'lucide-react'

export default function ProductCard({ product, theme }) {
  const cardClasses = {
    minimal: 'product-card-minimal',
    warm: 'product-card-warm',
    urban: 'product-card-urban',
    premium: 'product-card-premium'
  }

  const buttonClasses = {
    minimal: 'btn-minimal',
    warm: 'btn-warm',
    urban: 'btn-urban',
    premium: 'btn-premium'
  }

  const priceClasses = {
    minimal: 'price-minimal',
    warm: 'price-warm',
    urban: 'price-urban',
    premium: 'price-premium'
  }

  const badgeClasses = {
    minimal: 'badge-minimal',
    warm: 'badge-warm',
    urban: 'badge-urban',
    premium: 'badge-premium'
  }

  const textColorClass = {
    minimal: 'text-minimal-text',
    warm: 'text-warm-text',
    urban: 'text-urban-text',
    premium: 'text-premium-text'
  }

  const mutedColorClass = {
    minimal: 'text-minimal-muted',
    warm: 'text-warm-muted',
    urban: 'text-urban-muted',
    premium: 'text-premium-muted'
  }

  const fontFamily = {
    minimal: 'font-body',
    warm: 'font-body',
    urban: 'font-heading',
    premium: 'font-display'
  }

  return (
    <div className={`${cardClasses[theme]} animate-fade-in group`}>
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className={badgeClasses[theme]}>
            {product.badge}
          </span>
        </div>

        {/* Heart Icon */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
          <Heart size={18} className="text-gray-700" />
        </button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg uppercase tracking-wider">
              Esaurito
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-5 ${theme === 'urban' ? 'bg-black/90' : ''}`}>
        {/* Category */}
        <p className={`text-xs uppercase tracking-wider mb-2 ${mutedColorClass[theme]}`}>
          {product.category}
        </p>

        {/* Name */}
        <h3 className={`text-lg font-semibold mb-3 ${textColorClass[theme]} ${fontFamily[theme]} ${
          theme === 'urban' ? 'uppercase' : ''
        }`}>
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className={priceClasses[theme]}>
            €{product.price}
          </span>
        </div>

        {/* CTA Button */}
        <button 
          disabled={!product.inStock}
          className={`w-full ${buttonClasses[theme]} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
        >
          <ShoppingCart size={18} />
          <span>{product.inStock ? 'Aggiungi al carrello' : 'Non disponibile'}</span>
        </button>
      </div>
    </div>
  )
}
