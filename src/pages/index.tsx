import Head from 'next/head'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-white ${montserrat.variable} font-sans`}>
      <Head>
        <title>Zukunftly - Finde deinen perfekten Beruf</title>
        <meta name="description" content="Entdecke deinen idealen Beruf mit Zukunftly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Willkommen bei Zukunftly! 🚀
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Finde deinen perfekten Beruf mit unserem interaktiven Fragebogen
          </p>
          <a
            href="/fragebogen"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Starte jetzt
          </a>
        </div>
      </main>
    </div>
  )
}
