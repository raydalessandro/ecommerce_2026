import { useState } from 'react'
import ProductCard from './components/ProductCard'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import ThemeSwitcher from './components/ThemeSwitcher'
import './index.css'

// Mock data
const mockProducts = [
  {
    id: 1,
    name: 'Olio Extravergine Bio',
    category: 'Alimentari',
    price: '12.50',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500',
    badge: 'Km Zero',
    inStock: true
  },
  {
    id: 2,
    name: 'Camicia Lino Artigianale',
    category: 'Abbigliamento',
    price: '89.00',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
    badge: 'Fatto a mano',
    inStock: true
  },
  {
    id: 3,
    name: 'Miele di Acacia Locale',
    category: 'Alimentari',
    price: '8.90',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784e38?w=500',
    badge: 'Produzione locale',
    inStock: true
  },
  {
    id: 4,
    name: 'Sneakers Urban Limited',
    category: 'Calzature',
    price: '120.00',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    badge: 'Edizione Limitata',
    inStock: false
  },
  {
    id: 5,
    name: 'Anello Argento 925',
    category: 'Gioielli',
    price: '45.00',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500',
    badge: 'Artigianato',
    inStock: true
  },
  {
    id: 6,
    name: 'Pasta Artigianale Trafilata',
    category: 'Alimentari',
    price: '5.50',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
    badge: 'Tradizione',
    inStock: true
  }
]

const categories = ['Tutti', 'Alimentari', 'Abbigliamento', 'Calzature', 'Gioielli']

function App() {
  const [theme, setTheme] = useState('minimal') // minimal | warm | urban | premium
  const [selectedCategory, setSelectedCategory] = useState('Tutti')

  const filteredProducts = selectedCategory === 'Tutti' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory)

  return (
    <div className={`min-h-screen ${
      theme === 'minimal' ? 'bg-minimal-bg' :
      theme === 'warm' ? 'bg-warm-bg' :
      theme === 'urban' ? 'bg-urban-bg' :
      'bg-premium-bg'
    }`}>
      {/* Theme Switcher */}
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />

      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Category Navigation */}
      <CategoryNav 
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        theme={theme}
      />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* Footer Preview */}
      <footer className={`mt-16 py-8 border-t ${
        theme === 'minimal' ? 'border-gray-200' :
        theme === 'warm' ? 'border-warm-muted/20' :
        theme === 'urban' ? 'border-urban-primary' :
        'border-premium-muted/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`text-sm ${
            theme === 'minimal' ? 'text-minimal-muted' :
            theme === 'warm' ? 'text-warm-muted' :
            theme === 'urban' ? 'text-urban-muted' :
            'text-premium-muted'
          }`}>
            © 2024 Il Tuo Negozio • Settimo Milanese
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
