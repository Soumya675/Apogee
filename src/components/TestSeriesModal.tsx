import React, { useState } from 'react';
import { X, Trophy, CheckCircle, Clock, BookOpen, ArrowRight, Play, AlertCircle } from 'lucide-react';

interface TestSeriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: { id: string; name: string; price: number; type: string }) => void;
}

const TEST_PACKS = [
  {
    id: 'ts-tcs-nqt',
    title: 'TCS NQT & Digital National Mock Series 2026',
    testsCount: 25,
    difficulty: 'Advanced / Corporate',
    price: 499,
    description: 'Exact simulator for Numerical Ability, Verbal Reasoning, Advanced Coding, and Reasoning.',
    popular: true,
  },
  {
    id: 'ts-amcat-cocubes',
    title: 'AMCAT & CoCubes Diagnostic Psychometric Battery',
    testsCount: 18,
    difficulty: 'All Streams',
    price: 399,
    description: 'Automated percentile scoring, spatial reasoning, English comprehension, and situational analysis.',
    popular: false,
  },
  {
    id: 'ts-speed-math',
    title: 'Shashank D Sagar Speed Math 100-Drill Sprint',
    testsCount: 50,
    difficulty: 'Speed & Accuracy',
    price: 299,
    description: 'Curated by the Mental Arithmetic World Record Holder. Solve aptitude questions in < 25 seconds.',
    popular: true,
  },
  {
    id: 'ts-cognizant-genc',
    title: 'Cognizant GenC & Next Full-Length Mock Pro',
    testsCount: 20,
    difficulty: 'IT Services',
    price: 349,
    description: 'Analytical aptitude, quantitative puzzles, and live pseudo-code debugging questions.',
    popular: false,
  },
];

const MINI_QUIZ = [
  {
    question: 'A train 180 meters long is running at a speed of 54 km/hr. In what time will it pass an electric pole?',
    options: ['10 seconds', '12 seconds', '15 seconds', '18 seconds'],
    correct: 1,
    explanation: 'Speed in m/s = 54 × (5/18) = 15 m/s. Time to cross pole = Length / Speed = 180 / 15 = 12 seconds.',
  },
  {
    question: 'What is the time complexity of searching an element in a balanced Binary Search Tree (AVL / Red-Black)?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    correct: 2,
    explanation: 'In a balanced Binary Search Tree, tree height is strictly bounded by O(log n), so search is O(log n).',
  },
  {
    question: 'If 6 men or 8 women can complete a web development project in 14 days, in how many days can 3 men and 4 women finish it?',
    options: ['12 days', '14 days', '16 days', '18 days'],
    correct: 1,
    explanation: '6 men = 8 women. Therefore 3 men = 4 women. So (3 men + 4 women) = (4 women + 4 women) = 8 women, which takes 14 days.',
  },
];

export const TestSeriesModal: React.FC<TestSeriesModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'live_test'>('catalog');
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    if (idx === MINI_QUIZ[quizIndex].correct) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    if (quizIndex < MINI_QUIZ.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 mb-2">
          <Trophy className="w-4 h-4" />
          <span>ACTS Online Examination Engine</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Campus Recruitment &amp; Competitive Test Series
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Practice under authentic proctored conditions with day-wise performance analytics, national percentile ranking, and step-by-step video solutions.
        </p>

        {/* Tab selection */}
        <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200 mb-6 text-xs">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-colors cursor-pointer ${
              activeTab === 'catalog'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Test Packs (4)
          </button>
          <button
            onClick={() => setActiveTab('live_test')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'live_test'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Take 2-Min Live Placement Diagnostic Drill
          </button>
        </div>

        {activeTab === 'catalog' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEST_PACKS.map((pack) => (
              <div
                key={pack.id}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-blue-400 hover:bg-white hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-blue-700 font-bold">{pack.testsCount} Mock Tests</span>
                    <span className="text-slate-500 font-medium">{pack.difficulty}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                    {pack.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {pack.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div className="font-mono font-bold text-slate-900 text-base">
                    ₹{pack.price}
                    <span className="text-[11px] text-slate-400 font-normal line-through ml-1.5">
                      ₹{pack.price * 2}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart({
                        id: pack.id,
                        name: pack.title,
                        price: pack.price,
                        type: 'Test Series',
                      });
                    }}
                    className="py-1.5 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            {!quizCompleted ? (
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 pb-3 mb-4 border-b border-slate-200">
                  <span className="font-mono text-blue-700 font-bold">
                    Question {quizIndex + 1} of {MINI_QUIZ.length}
                  </span>
                  <span className="flex items-center gap-1 text-slate-700 font-mono font-semibold">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Speed Test Active
                  </span>
                </div>

                <p className="text-sm font-bold text-slate-900 mb-5 leading-relaxed">
                  {MINI_QUIZ[quizIndex].question}
                </p>

                <div className="space-y-2.5 mb-6">
                  {MINI_QUIZ[quizIndex].options.map((opt, optIdx) => {
                    const isSelected = selectedAnswer === optIdx;
                    const isCorrect = optIdx === MINI_QUIZ[quizIndex].correct;

                    let btnStyle =
                      'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100';
                    if (showExplanation) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-50 border-rose-400 text-rose-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={showExplanation}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full p-3 rounded-lg border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span className="font-medium">{opt}</span>
                        {showExplanation && isCorrect && (
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs mb-5 shadow-xs">
                    <div className="font-bold text-blue-700 mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Detailed Explanation:
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {MINI_QUIZ[quizIndex].explanation}
                    </p>
                  </div>
                )}

                {showExplanation && (
                  <div className="flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      className="py-2 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>{quizIndex < MINI_QUIZ.length - 1 ? 'Next Question' : 'Complete Drill'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mx-auto">
                  <Trophy className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Diagnostic Drill Completed!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  You scored <strong className="text-blue-700 font-mono text-base">{quizScore} / {MINI_QUIZ.length}</strong>. Your aptitude speed percentile is calibrated at the top 15% bracket.
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    onClick={handleResetQuiz}
                    className="py-2 px-4 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    Retake Drill
                  </button>
                  <button
                    onClick={() => setActiveTab('catalog')}
                    className="py-2 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs"
                  >
                    Explore Full Test Series Packs
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
