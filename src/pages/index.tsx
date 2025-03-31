import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'
import CareerCard from '@/components/CareerCard'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const careers = [
  {
    title: 'Softwareentwickler',
    description: 'Entwickle innovative Lösungen und gestalte die digitale Zukunft',
    icon: '💻',
    delay: 0.2
  },
  {
    title: 'UX Designer',
    description: 'Gestalte benutzerfreundliche und ansprechende digitale Erlebnisse',
    icon: '🎨',
    delay: 0.4
  },
  {
    title: 'Data Scientist',
    description: 'Analysiere Daten und finde wertvolle Erkenntnisse',
    icon: '📊',
    delay: 0.6
  }
]

export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-white ${montserrat.variable} font-sans`}>
      <Head>
        <title>Zukunftly - Finde deinen perfekten Beruf</title>
        <meta name="description" content="Entdecke deinen idealen Beruf mit Zukunftly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Willkommen bei Zukunftly! 🚀
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Finde deinen perfekten Beruf mit unserem interaktiven Fragebogen
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/fragebogen"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Starte jetzt
            </motion.a>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              So funktioniert's
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2">Beantworte Fragen</h3>
                <p className="text-gray-600">Unser Fragebogen passt sich deinen Antworten an</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2">KI-Analyse</h3>
                <p className="text-gray-600">Unsere KI analysiert deine Antworten</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Persönliche Vorschläge</h3>
                <p className="text-gray-600">Erhalte maßgeschneiderte Berufsvorschläge</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Careers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Beispiel-Berufe
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {careers.map((career, index) => (
                <CareerCard key={index} {...career} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
