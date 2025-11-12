# 🎨 E-Shop UI Playground

Design system interattivo per testare 4 grafiche diverse per negozi locali.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Apri http://localhost:3000

## 🎭 Temi Disponibili

### 1. **Modern Minimalist** (Default)
**Ispirazione:** Apple Store, Muji
- Palette: Bianco/nero con accent indigo/amber
- Font: Inter (body)
- Stile: Pulito, essenziale, tanto spazio bianco
- Ideale per: Tech, design, prodotti premium moderni

### 2. **Warm Local**
**Ispirazione:** Bottega artigianale, mercato locale
- Palette: Terre, marrone caldo, beige
- Font: Inter (body)
- Stile: Accogliente, familiare, bottoni arrotondati
- Ideale per: Alimentari, artigianato, prodotti tradizionali

### 3. **Bold Urban**
**Ispirazione:** Streetwear, brand sportivi
- Palette: Nero/arancione/giallo, alto contrasto
- Font: Montserrat (headings)
- Stile: Energico, maiuscolo, angoli netti
- Ideale per: Abbigliamento urban, sport, giovani

### 4. **Clean Premium**
**Ispirazione:** Gioielleria, luxury brand
- Palette: Bianco/nero/oro
- Font: Playfair Display (serif elegante)
- Stile: Elegante, raffinato, dettagli oro
- Ideale per: Gioielli, orologi, prodotti luxury

## 📁 Struttura

```
ear-shop-ui/
├── src/
│   ├── App.jsx                    # Main app con theme state
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Design system + utilities
│   └── components/
│       ├── ThemeSwitcher.jsx      # Selettore temi (top-right)
│       ├── Hero.jsx               # Banner principale
│       ├── CategoryNav.jsx        # Navigazione categorie
│       └── ProductCard.jsx        # Card prodotto (core!)
├── tailwind.config.js             # 4 palette colori + animations
└── package.json
```

## 🎨 Componenti Chiave

### ProductCard
Il cuore del design. Ogni tema ha:
- Varianti card style (bordi, ombre, hover)
- Varianti button (forma, font, colori)
- Varianti badge (etichette prodotto)
- Varianti tipografia prezzi

### ThemeSwitcher
Pannello fisso top-right per cambiare tema al volo.

### Hero
Banner principale con title/subtitle/stats adattati al tema.

### CategoryNav
Navigazione sticky che cambia completamente stile per tema.

## 🛠️ Come Personalizzare

### Aggiungere un nuovo tema

**1. Estendi `tailwind.config.js`:**

```js
colors: {
  mytheme: {
    primary: '#FF0000',
    secondary: '#00FF00',
    accent: '#0000FF',
    bg: '#FFFFFF',
    text: '#000000',
    muted: '#666666',
  }
}
```

**2. Aggiungi classi CSS in `index.css`:**

```css
.product-card-mytheme {
  @apply bg-white border-4 border-mytheme-primary rounded-3xl;
}

.btn-mytheme {
  @apply px-6 py-3 bg-mytheme-primary text-white font-bold;
}
```

**3. Aggiungi al ThemeSwitcher:**

```jsx
{ id: 'mytheme', name: 'My Theme', color: 'bg-red-500' }
```

**4. Usa nei componenti:**

```jsx
{theme === 'mytheme' && (
  <div className="product-card-mytheme">...</div>
)}
```

## 🎯 Prossimi Passi

### Fase 1: Design Exploration (✅ SEI QUI)
- [x] 4 temi base
- [x] Componenti core
- [x] Theme switcher
- [ ] **Decisione finale tema**

### Fase 2: Componenti Aggiuntivi
- [ ] Carrello floating
- [ ] Modal prodotto (dettaglio)
- [ ] Filtri laterali
- [ ] Search bar
- [ ] Breadcrumbs

### Fase 3: Interazioni
- [ ] Add to cart animation
- [ ] Wishlist toggle
- [ ] Quantity selector
- [ ] Toast notifications

### Fase 4: Backend Integration
- [ ] Collegare @ear/local-db (carrello persistente)
- [ ] Collegare @ear/deeplink (WhatsApp checkout)
- [ ] Aggiungere prodotti reali

## 💡 Tips per Decidere il Tema

**Test con clienti reali:**
1. Mostra il playground al negoziante
2. Chiedi: "Quale rispecchia la TUA identità?"
3. Testa su mobile (80% traffico)
4. Chiedi ai clienti tipo del negozio

**Criteri di scelta:**
- ✅ Identità brand del negozio
- ✅ Target audience (età, stile)
- ✅ Categoria prodotti
- ✅ Competitor locali (differenziarsi)
- ✅ Facilità manutenzione (il negoziante dovrà caricare foto)

## 🎨 Font in Uso

- **Inter**: Versatile, moderno, leggibile (minimal, warm)
- **Montserrat**: Bold, impatto (urban)
- **Playfair Display**: Elegante, serif (premium)

Tutti caricati da Google Fonts (vedi `index.css`).

## 📱 Responsive

Tutti i temi sono mobile-first:
- Grid: 1 col mobile, 2 tablet, 3 desktop
- Touch-friendly (min 44px tap targets)
- Scroll orizzontale categorie su mobile

## 🚀 Deploy

```bash
npm run build
```

Output in `/dist` - pronto per:
- Vercel (zero config)
- Netlify (drop folder)
- Hosting statico qualsiasi

## 🤝 Integrazione con Moduli EAR

Questo playground è la base UI. Quando scegli il tema:

```bash
# Aggiungi moduli EAR
npm install @ear/pwa-kernel      # PWA offline
npm install @ear/local-db        # Carrello persistente
npm install @ear/deeplink        # WhatsApp checkout
npm install @ear/catalog-lite    # Filtri prodotti
```

## 📄 Licenza

Proprietario - EAR LAB  
Ray Settimo Milanese

---

**Made with 🎨 by EAR LAB**  
*"Essenza, Armonia, Risonanza"*
