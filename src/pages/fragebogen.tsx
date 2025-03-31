import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';

const questions = [
  {
    id: 1,
    question: "Was interessiert dich am meisten?",
    options: [
      { text: "Technologie und Innovation", value: "tech" },
      { text: "Kreativität und Design", value: "creative" },
      { text: "Menschen und Kommunikation", value: "social" },
      { text: "Wissenschaft und Forschung", value: "science" }
    ]
  },
  {
    id: 2,
    question: "Wie würdest du deine Arbeitsweise beschreiben?",
    options: [
      { text: "Strukturiert und organisiert", value: "structured" },
      { text: "Flexibel und spontan", value: "flexible" },
      { text: "Teamorientiert", value: "team" },
      { text: "Unabhängig", value: "independent" }
    ]
  },
  {
    id: 3,
    question: "Was ist dir bei der Arbeit am wichtigsten?",
    options: [
      { text: "Gutes Gehalt", value: "salary" },
      { text: "Work-Life-Balance", value: "balance" },
      { text: "Persönliche Entwicklung", value: "growth" },
      { text: "Sinnvolle Arbeit", value: "meaning" }
    ]
  }
];

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Hier später zur Ergebnisseite navigieren
      console.log('Alle Fragen beantwortet:', newAnswers);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <Head>
        <title>Fragebogen - Zukunftly</title>
        <meta name="description" content="Beantworte unsere Fragen und finde deinen perfekten Beruf" />
      </Head>

      <div className="container mx-auto px-4">
        <ProgressBar progress={currentQuestion + 1} total={questions.length} />
        
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion}
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleAnswer}
            isActive={true}
          />
        </AnimatePresence>
      </div>
    </div>
  );
} 