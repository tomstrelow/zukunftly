import { motion } from 'framer-motion';

interface Option {
  text: string;
  value: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  onSelect: (value: string) => void;
  isActive: boolean;
}

export default function QuestionCard({ question, options, onSelect, isActive }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-8">{question}</h2>
      <div className="space-y-4">
        {options.map((option, index) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option.value)}
            className="w-full text-left p-4 rounded-lg border-2 border-blue-100 hover:border-blue-500 transition-colors"
          >
            {option.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 