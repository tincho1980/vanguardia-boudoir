export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <h1 className="font-javanese text-7xl md:text-8xl text-warm-cream animate-fade-up">
            Diseño Elegante
          </h1>
          <p className="font-humanist text-xl md:text-2xl text-muted-gold animate-slide-up max-w-2xl mx-auto">
            Explorando la belleza de los colores cálidos y las animaciones suaves
          </p>
          <div className="flex gap-4 justify-center animate-glow-in">
            <button className="px-8 py-4 bg-accent text-background font-bold rounded-lg shadow-glow hover:scale-105 transition-all duration-300">
              Comenzar
            </button>
            <button className="px-8 py-4 border-2 border-muted-gold text-muted-gold font-bold rounded-lg hover:bg-muted-gold hover:text-background transition-all duration-300">
              Explorar
            </button>
          </div>
        </div>
      </section>

      {/* Colors Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-javanese text-5xl text-warm-cream text-center mb-12 animate-fade-in">
          Paleta de Colores Personalizada
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-deep-black p-6 rounded-lg border-2 border-elegant-gray group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-deep-black rounded mb-4 shadow-deep"></div>
            <p className="text-warm-cream font-humanist text-center font-bold">Deep Black</p>
            <p className="text-elegant-gray font-humanist text-center text-sm">#0d0d0d</p>
          </div>
          <div className="bg-sepia-shadow p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-sepia-shadow rounded mb-4 shadow-soft border border-elegant-gray"></div>
            <p className="text-warm-cream font-humanist text-center font-bold">Sepia Shadow</p>
            <p className="text-elegant-gray font-humanist text-center text-sm">#2c2a28</p>
          </div>
          <div className="bg-muted-gold p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-muted-gold rounded mb-4 shadow-glow"></div>
            <p className="text-background font-humanist text-center font-bold">Muted Gold</p>
            <p className="text-background/70 font-humanist text-center text-sm">#b89a67</p>
          </div>
          <div className="bg-warm-cream p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-warm-cream rounded mb-4 shadow-soft border border-muted-gold"></div>
            <p className="text-background font-humanist text-center font-bold">Warm Cream</p>
            <p className="text-background/70 font-humanist text-center text-sm">#f7f1e7</p>
          </div>
          <div className="bg-soft-copper p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-soft-copper rounded mb-4 shadow-glow"></div>
            <p className="text-background font-humanist text-center font-bold">Soft Copper</p>
            <p className="text-background/70 font-humanist text-center text-sm">#c5a572</p>
          </div>
          <div className="bg-warm-beige p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-warm-beige rounded mb-4 shadow-soft"></div>
            <p className="text-background font-humanist text-center font-bold">Warm Beige</p>
            <p className="text-background/70 font-humanist text-center text-sm">#e6cbb2</p>
          </div>
          <div className="bg-accent p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-accent rounded mb-4 shadow-glow"></div>
            <p className="text-background font-humanist text-center font-bold">Accent</p>
            <p className="text-background/70 font-humanist text-center text-sm">#b89a67</p>
          </div>
          <div className="bg-elegant-gray p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 bg-elegant-gray rounded mb-4 shadow-soft"></div>
            <p className="text-warm-cream font-humanist text-center font-bold">Elegant Gray</p>
            <p className="text-warm-cream/70 font-humanist text-center text-sm">#8b8b8b</p>
          </div>
        </div>
      </section>

      {/* Shadow Effects */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-javanese text-5xl text-warm-cream text-center mb-12">
          Efectos de Sombra
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Glow Shadow */}
          <div className="bg-sepia-shadow p-8 rounded-xl shadow-glow animate-glow-in hover:shadow-glow hover:scale-105 transition-all duration-500">
            <div className="w-20 h-20 bg-soft-copper rounded-full mb-6 mx-auto shadow-glow"></div>
            <h3 className="font-javanese text-3xl text-soft-copper mb-4 text-center">
              Glow Effect
            </h3>
            <p className="text-warm-beige font-humanist text-center leading-relaxed mb-4">
              Sombra suave con brillo dorado que resalta elementos importantes
            </p>
            <code className="block text-center text-sm text-elegant-gray bg-deep-black p-2 rounded">
              shadow-glow
            </code>
          </div>

          {/* Deep Shadow */}
          <div className="bg-deep-black border border-muted-gold p-8 rounded-xl shadow-deep animate-fade-in hover:shadow-deep hover:scale-105 transition-all duration-500">
            <div className="w-20 h-20 bg-accent rounded-full mb-6 mx-auto"></div>
            <h3 className="font-javanese text-3xl text-accent mb-4 text-center">
              Deep Shadow
            </h3>
            <p className="text-secondary font-humanist text-center leading-relaxed mb-4">
              Profundidad dramática para crear jerarquía visual impactante
            </p>
            <code className="block text-center text-sm text-elegant-gray bg-sepia-shadow p-2 rounded">
              shadow-deep
            </code>
          </div>

          {/* Soft Shadow */}
          <div className="bg-elegant-gray/20 backdrop-blur-sm p-8 rounded-xl shadow-soft animate-parallax-fade hover:shadow-soft hover:scale-105 transition-all duration-500">
            <div className="w-20 h-20 bg-warm-cream rounded-full mb-6 mx-auto"></div>
            <h3 className="font-javanese text-3xl text-warm-cream mb-4 text-center">
              Soft Shadow
            </h3>
            <p className="text-warm-beige font-humanist text-center leading-relaxed mb-4">
              Sombra sutil y elegante para elementos flotantes y delicados
            </p>
            <code className="block text-center text-sm text-elegant-gray bg-deep-black p-2 rounded">
              shadow-soft
            </code>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-sepia-shadow p-12 rounded-2xl shadow-deep">
          <h2 className="font-javanese text-6xl text-muted-gold mb-6 animate-fade-up">
            Tipografía Elegante
          </h2>
          <p className="font-humanist text-xl text-warm-cream leading-relaxed mb-6 animate-slide-up">
            La fuente <span className="text-soft-copper font-bold font-javanese text-2xl">Javanese</span> aporta 
            un toque clásico y sofisticado, perfecta para títulos y encabezados que 
            buscan capturar la atención con elegancia atemporal.
          </p>
          <p className="font-humanist text-lg text-warm-beige leading-relaxed animate-fade-in mb-6">
            Mientras que <span className="text-muted-gold font-bold">Humanist</span> proporciona 
            legibilidad excepcional para el cuerpo del texto, manteniendo la armonía 
            visual en todo el diseño y facilitando la lectura prolongada.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="bg-deep-black p-4 rounded-lg">
              <p className="text-elegant-gray text-sm mb-2">Font Family:</p>
              <code className="text-muted-gold">font-javanese</code>
            </div>
            <div className="bg-deep-black p-4 rounded-lg">
              <p className="text-elegant-gray text-sm mb-2">Font Family:</p>
              <code className="text-muted-gold">font-humanist</code>
            </div>
          </div>
        </div>
      </section>

      {/* Animations Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-javanese text-5xl text-warm-cream text-center mb-4">
          Animaciones Personalizadas
        </h2>
        <p className="text-center text-muted-gold font-humanist mb-12">
          Recarga la página para ver todas las animaciones en acción
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-sepia-shadow p-6 rounded-lg text-center animate-fade-up border-2 border-transparent hover:border-muted-gold transition-all duration-300">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-gold font-humanist font-bold mb-2">Fade Up</p>
            <code className="text-xs text-elegant-gray block">animate-fade-up</code>
            <p className="text-warm-beige text-sm mt-2">0.8s ease-out</p>
          </div>
          <div className="bg-sepia-shadow p-6 rounded-lg text-center animate-fade-in border-2 border-transparent hover:border-soft-copper transition-all duration-300">
            <div className="w-16 h-16 bg-soft-copper rounded-full mx-auto mb-4"></div>
            <p className="text-soft-copper font-humanist font-bold mb-2">Fade In</p>
            <code className="text-xs text-elegant-gray block">animate-fade-in</code>
            <p className="text-warm-beige text-sm mt-2">1s ease-out</p>
          </div>
          <div className="bg-sepia-shadow p-6 rounded-lg text-center animate-slide-up border-2 border-transparent hover:border-secondary transition-all duration-300">
            <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4"></div>
            <p className="text-secondary font-humanist font-bold mb-2">Slide Up</p>
            <code className="text-xs text-elegant-gray block">animate-slide-up</code>
            <p className="text-warm-beige text-sm mt-2">0.6s ease-out</p>
          </div>
          <div className="bg-sepia-shadow p-6 rounded-lg text-center animate-glow-in border-2 border-transparent hover:border-warm-cream transition-all duration-300">
            <div className="w-16 h-16 bg-warm-cream rounded-full mx-auto mb-4 shadow-glow"></div>
            <p className="text-warm-cream font-humanist font-bold mb-2">Glow In</p>
            <code className="text-xs text-elegant-gray block">animate-glow-in</code>
            <p className="text-warm-beige text-sm mt-2">1.5s ease-in-out</p>
          </div>
          <div className="bg-sepia-shadow p-6 rounded-lg text-center animate-parallax-fade border-2 border-transparent hover:border-muted-gold transition-all duration-300">
            <div className="w-16 h-16 bg-muted-gold rounded-full mx-auto mb-4"></div>
            <p className="text-muted-gold font-humanist font-bold mb-2">Parallax Fade</p>
            <code className="text-xs text-elegant-gray block">animate-parallax-fade</code>
            <p className="text-warm-beige text-sm mt-2">2s ease-out</p>
          </div>
        </div>
      </section>

      {/* Transition Effects */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-javanese text-5xl text-warm-cream text-center mb-12">
          Transiciones Personalizadas
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-sepia-shadow p-6 rounded-lg">
            <h3 className="text-soft-copper font-javanese text-2xl mb-4">Smooth Transition</h3>
            <p className="text-warm-beige mb-4">Transición suave y natural para interacciones sutiles</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-accent text-background font-bold rounded-lg hover:scale-110 hover:shadow-glow transition-smooth">
                Hover me (smooth)
              </button>
              <code className="flex items-center px-4 text-sm text-elegant-gray bg-deep-black rounded">
                transition-smooth
              </code>
            </div>
          </div>
          <div className="bg-sepia-shadow p-6 rounded-lg">
            <h3 className="text-soft-copper font-javanese text-2xl mb-4">Dramatic Transition</h3>
            <p className="text-warm-beige mb-4">Transición dramática para efectos impactantes</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-soft-copper text-background font-bold rounded-lg hover:scale-110 hover:bg-muted-gold transition-dramatic">
                Hover me (dramatic)
              </button>
              <code className="flex items-center px-4 text-sm text-elegant-gray bg-deep-black rounded">
                transition-dramatic
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Buttons */}
      <section className="container mx-auto px-4 py-16 mb-20">
        <h2 className="font-javanese text-5xl text-warm-cream text-center mb-12">
          Elementos Interactivos
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <button className="w-full px-8 py-5 bg-accent text-background font-bold text-lg rounded-lg shadow-glow hover:shadow-deep hover:scale-105 transition-all duration-300">
            Botón Principal con Shadow Glow
          </button>
          <button className="w-full px-8 py-5 bg-soft-copper text-background font-bold text-lg rounded-lg hover:bg-muted-gold transition-dramatic duration-500">
            Botón con Transición Dramatic
          </button>
          <button className="w-full px-8 py-5 border-2 border-warm-cream text-warm-cream font-bold text-lg rounded-lg hover:bg-warm-cream hover:text-background hover:shadow-soft transition-smooth duration-300">
            Botón Outline Elegante
          </button>
          <button className="w-full px-8 py-5 bg-gradient-to-r from-muted-gold to-soft-copper text-background font-bold text-lg rounded-lg hover:scale-105 hover:shadow-glow transition-all duration-300">
            Botón con Degradado
          </button>
          <button className="w-full px-8 py-5 bg-sepia-shadow border-2 border-elegant-gray text-warm-cream font-bold text-lg rounded-lg hover:border-accent hover:text-accent transition-smooth duration-300">
            Botón con Border Hover
          </button>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-javanese text-5xl text-warm-cream text-center mb-12">
          Componentes de Card
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-sepia-shadow rounded-xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-48 bg-gradient-to-br from-muted-gold to-soft-copper rounded-lg mb-6"></div>
            <h3 className="font-javanese text-2xl text-muted-gold mb-3">Card Elegante 1</h3>
            <p className="text-warm-beige font-humanist leading-relaxed">
              Card con efecto hover suave y elevación progresiva
            </p>
          </div>
          <div className="bg-deep-black border border-elegant-gray rounded-xl p-8 shadow-deep hover:border-accent transition-all duration-500 hover:scale-105">
            <div className="w-full h-48 bg-accent rounded-lg mb-6"></div>
            <h3 className="font-javanese text-2xl text-accent mb-3">Card Elegante 2</h3>
            <p className="text-secondary font-humanist leading-relaxed">
              Card con borde que cambia de color al hacer hover
            </p>
          </div>
          <div className="bg-elegant-gray/10 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-deep transition-all duration-500">
            <div className="w-full h-48 bg-warm-cream rounded-lg mb-6"></div>
            <h3 className="font-javanese text-2xl text-warm-cream mb-3">Card Elegante 3</h3>
            <p className="text-warm-beige font-humanist leading-relaxed">
              Card semi-transparente con efecto de blur en el fondo
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sepia-shadow border-t-2 border-elegant-gray py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="font-javanese text-3xl text-muted-gold mb-4">
              Tema Personalizado Completo
            </h3>
            <p className="font-humanist text-warm-beige max-w-2xl mx-auto">
              Sistema de diseño con colores cálidos, animaciones suaves y efectos elegantes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-soft-copper font-bold mb-2">8 Colores Custom</h4>
              <p className="text-elegant-gray text-sm">Paleta completa y armoniosa</p>
            </div>
            <div>
              <h4 className="text-soft-copper font-bold mb-2">5 Animaciones</h4>
              <p className="text-elegant-gray text-sm">Efectos suaves y elegantes</p>
            </div>
            <div>
              <h4 className="text-soft-copper font-bold mb-2">3 Sombras</h4>
              <p className="text-elegant-gray text-sm">Profundidad y dimensión</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-elegant-gray text-center">
            <p className="font-humanist text-elegant-gray text-sm">
              Next.js + Tailwind CSS v3 • Tema Elegante 2025
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}