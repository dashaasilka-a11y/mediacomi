import { useState, useEffect, useCallback, useRef } from 'react';
import { apartments, Apartment } from './data/apartments';

type GameScreen = 'start' | 'game' | 'result';

interface RoundResult {
  apartment: Apartment;
  guessedPrice: number;
  correctPrice: number;
  errorPercent: number;
  points: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function calculatePoints(errorPercent: number): number {
  const abs = Math.abs(errorPercent);
  if (abs <= 5) return 10;
  if (abs <= 10) return 8;
  if (abs <= 15) return 7;
  if (abs <= 20) return 6;
  if (abs <= 30) return 4;
  if (abs <= 50) return 2;
  return 1;
}

function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU') + ' ₽';
}

function App() {
  const [screen, setScreen] = useState<GameScreen>('start');
  const [rounds, setRounds] = useState<Apartment[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [guessedPrice, setGuessedPrice] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [sliderAnimated, setSliderAnimated] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  const startGame = useCallback(() => {
    const selected = shuffleArray(apartments).slice(0, 10);
    setRounds(selected);
    setCurrentRound(0);
    setResults([]);
    setShowAnswer(false);
    setSliderAnimated(false);
    setScreen('game');
  }, []);

  // Reset slider animation flag when game restarts
  useEffect(() => {
    if (screen === 'start') {
      setSliderAnimated(false);
    }
  }, [screen]);

  useEffect(() => {
    if (screen === 'game' && rounds.length > 0) {
      const apt = rounds[currentRound];
      const minPrice = Math.floor(apt.price * 0.1);
      const maxPrice = Math.ceil(apt.price * 3);
      setGuessedPrice(Math.floor((minPrice + maxPrice) / 2));
      setShowAnswer(false);
      
      // Анимация бегунка при первом запуске
      if (!sliderAnimated) {
        setTimeout(() => {
          setGuessedPrice(apt.price);
          setTimeout(() => {
            setGuessedPrice(Math.floor((minPrice + maxPrice) / 2));
            setSliderAnimated(true);
          }, 600);
        }, 300);
      }
    }
  }, [currentRound, screen, rounds, sliderAnimated]);

  const handleGuess = () => {
    const apt = rounds[currentRound];
    const errorPercent = ((guessedPrice - apt.price) / apt.price) * 100;
    const points = calculatePoints(errorPercent);
    
    const result: RoundResult = {
      apartment: apt,
      guessedPrice,
      correctPrice: apt.price,
      errorPercent,
      points
    };
    
    setResults(prev => [...prev, result]);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentRound + 1 >= 10) {
      setScreen('result');
    } else {
      setCurrentRound(prev => prev + 1);
    }
  };

  const getResultCategory = () => {
    const avgError = results.reduce((sum, r) => sum + r.errorPercent, 0) / results.length;
    if (avgError > 15) return 'generous';
    if (avgError < -15) return 'stingy';
    return 'open';
  };

  const getTotalPoints = () => results.reduce((sum, r) => sum + r.points, 0);

  const getAverageDiff = () => {
    const totalDiff = results.reduce((sum, r) => sum + (r.guessedPrice - r.correctPrice), 0);
    return totalDiff;
  };

  // ===== START SCREEN =====
  if (screen === 'start') {
    const previewApt = apartments[0]; // Stable preview
    return (
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold" style={{ color: '#26CD94' }}>
              Медиакоми
            </h1>
            <p className="text-gray-400 text-sm mt-1">Симулятор оценки недвижимости</p>
          </div>

          {/* Preview Image */}
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-800">
            <img
              src={previewApt.photos[0]}
              alt="Превью квартиры"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Description */}
          <div className="w-full bg-gray-900 rounded-xl p-4 mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Угадайте цену квартиры по фото и описанию. 
              10 раундов, реальные объявления. Проверьте, насколько хорошо вы чувствуете рынок недвижимости!
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              {apartments.length} объявлений в базе
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all active:scale-95"
            style={{ backgroundColor: '#26CD94' }}
          >
            Начать игру
          </button>

          {/* Footer */}
          <div className="mt-auto pt-6 text-center">
            <p className="text-gray-600 text-xs">
              © 2024 Медиакоми • Данные: Авито
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ===== GAME SCREEN =====
  if (screen === 'game') {
    const apt = rounds[currentRound];
    const minPrice = Math.floor(apt.price * 0.1);
    const maxPrice = Math.ceil(apt.price * 3);
    const diff = guessedPrice - apt.price;
    const diffPercent = ((diff / apt.price) * 100).toFixed(1);

    return (
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1.5">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${((currentRound + (showAnswer ? 1 : 0)) / 10) * 100}%`,
              backgroundColor: '#26CD94'
            }}
          />
        </div>

        <div className="flex-1 flex flex-col px-4 py-3 max-w-md mx-auto w-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400 text-sm font-medium">
              Раунд {currentRound + 1}/10
            </span>
            <span className="text-sm font-medium" style={{ color: '#26CD94' }}>
              {results.reduce((s, r) => s + r.points, 0)} баллов
            </span>
          </div>

          {/* Photo */}
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-800">
            <img
              src={apt.photos[0]}
              alt={apt.description}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Description */}
          <div className="bg-gray-900 rounded-xl p-3 mb-3">
            <p className="font-medium text-white text-sm">{apt.description}</p>
            <p className="text-gray-400 text-xs mt-1">📍 {apt.street}</p>
            <p className="text-gray-500 text-xs mt-0.5">💰 {apt.pricePerSqm}</p>
          </div>

          {/* Slider Section */}
          <div className="bg-gray-900 rounded-xl p-4 mb-3">
            <div className="text-center mb-3">
              <p className="text-gray-400 text-xs mb-1">Ваша цена:</p>
              <p className="text-2xl font-bold" style={{ color: '#26CD94' }}>
                {formatPrice(guessedPrice)}
              </p>
            </div>
            
            <input
              ref={sliderRef}
              type="range"
              min={minPrice}
              max={maxPrice}
              step={1000}
              value={guessedPrice}
              onChange={(e) => setGuessedPrice(Number(e.target.value))}
              disabled={showAnswer}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-700 accent-green-500 disabled:opacity-50"
              style={{ accentColor: '#26CD94' }}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>{formatPrice(minPrice)}</span>
              <span>{formatPrice(maxPrice)}</span>
            </div>
          </div>

          {/* Answer / Result */}
          {showAnswer ? (
            <div className="bg-gray-900 rounded-xl p-4 mb-3">
              <div className="text-center mb-2">
                <p className="text-gray-400 text-xs">Правильная цена:</p>
                <p className="text-xl font-bold text-white">
                  {formatPrice(apt.price)}
                </p>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className={diff > 0 ? 'text-red-400' : diff < 0 ? 'text-blue-400' : 'text-green-400'}>
                  {diff > 0 ? `+${formatPrice(diff)}` : diff < 0 ? formatPrice(diff) : 'Точно!'}
                </span>
                <span className="text-gray-400">
                  {diff > 0 ? '+' : ''}{diffPercent}%
                </span>
              </div>
              
              <div className="mt-3 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: 'rgba(38, 205, 148, 0.15)',
                    color: '#26CD94'
                  }}>
                  +{results[results.length - 1]?.points || 0} баллов
                </span>
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-4 py-3 rounded-xl font-bold text-white transition-all active:scale-95"
                style={{ backgroundColor: '#26CD94' }}
              >
                {currentRound + 1 >= 10 ? 'Показать результат' : 'Следующий раунд →'}
              </button>
            </div>
          ) : (
            <button
              onClick={handleGuess}
              className="w-full py-3 rounded-xl font-bold text-white transition-all active:scale-95"
              style={{ backgroundColor: '#26CD94' }}
            >
              Оценить
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="py-3 text-center">
          <p className="text-gray-600 text-xs">
            © 2024 Медиакоми
          </p>
        </div>
      </div>
    );
  }

  // ===== RESULT SCREEN =====
  const category = getResultCategory();
  const totalPoints = getTotalPoints();
  const avgDiff = getAverageDiff();

  const categoryConfig = {
    generous: {
      emoji: '💎',
      title: 'Щедрый инвестор',
      subtitle: 'Переплачиваете за недвижимость',
      color: '#FF6B6B',
      description: 'Вы склонны завышать стоимость. Будьте осторожны — на рынке можно потерять лишние деньги!'
    },
    open: {
      emoji: '🎯',
      title: 'Открытый инвестор',
      subtitle: 'Приближено или идеально по цене',
      color: '#26CD94',
      description: 'Отличное чувство рынка! Вы хорошо оцениваете стоимость недвижимости.'
    },
    stingy: {
      emoji: '🪙',
      title: 'Скряга',
      subtitle: 'Недоплачиваете за недвижимость',
      color: '#4ECDC4',
      description: 'Вы склонны занижать стоимость. Возможно, упускаете хорошие предложения!'
    }
  };

  const config = categoryConfig[category];

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <div className="flex-1 flex flex-col items-center px-4 py-6 max-w-md mx-auto w-full">
        {/* Result Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{config.emoji}</div>
          <h2 className="text-2xl font-bold" style={{ color: config.color }}>
            {config.title}
          </h2>
          <p className="text-gray-400 text-sm mt-1">{config.subtitle}</p>
        </div>

        {/* Score Card */}
        <div className="w-full bg-gray-900 rounded-xl p-5 mb-4">
          <div className="text-center mb-4">
            <p className="text-gray-400 text-xs mb-1">Общий счёт</p>
            <p className="text-4xl font-bold" style={{ color: '#26CD94' }}>
              {totalPoints}
              <span className="text-lg text-gray-500">/100</span>
            </p>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Средняя разница:</span>
              <span className={`font-medium text-sm ${avgDiff > 0 ? 'text-red-400' : avgDiff < 0 ? 'text-blue-400' : 'text-green-400'}`}>
                {avgDiff > 0 ? '+' : ''}{formatPrice(Math.round(avgDiff))}
              </span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              {config.description}
            </p>
          </div>
        </div>

        {/* Rounds Summary */}
        <div className="w-full bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-3 font-medium">Детализация раундов:</p>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {results.map((r, i) => (
              <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-gray-800 last:border-0">
                <span className="text-gray-300 truncate mr-2 flex-1">
                  #{i + 1} {r.apartment.description}
                </span>
                <span className="font-medium whitespace-nowrap" style={{ color: '#26CD94' }}>
                  +{r.points}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={startGame}
          className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all active:scale-95"
          style={{ backgroundColor: '#26CD94' }}
        >
          Играть снова
        </button>

        {/* Footer */}
        <div className="mt-auto pt-6 text-center">
          <p className="text-gray-600 text-xs">
            © 2024 Медиакоми • Данные: Авито
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
