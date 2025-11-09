import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; profession: string }[];
}

export const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Какая область знаний вас привлекает больше всего?",
      options: [
        { value: "ai", label: "Математика и алгоритмы", profession: "AI" },
        { value: "security", label: "Защита информации и криптография", profession: "Кибербезопасность" },
        { value: "bio", label: "Биология и генетика", profession: "Биоинформатика" },
        { value: "robotics", label: "Механика и электроника", profession: "Робототехника" }
      ]
    },
    {
      id: 2,
      question: "Чем бы вы хотели заниматься в свободное время?",
      options: [
        { value: "coding", label: "Программировать и решать логические задачи", profession: "AI" },
        { value: "hacking", label: "Изучать способы защиты систем", profession: "Этический хакер" },
        { value: "design", label: "Создавать дизайн и улучшать пользовательский опыт", profession: "UX/UI" },
        { value: "languages", label: "Изучать иностранные языки", profession: "Цифровой лингвист" }
      ]
    },
    {
      id: 3,
      question: "Какой результат работы для вас наиболее важен?",
      options: [
        { value: "innovation", label: "Создание инновационных технологий", profession: "AI" },
        { value: "security", label: "Защита людей и данных", profession: "Кибербезопасность" },
        { value: "health", label: "Улучшение здоровья людей", profession: "Генетический консультант" },
        { value: "ecology", label: "Забота об экологии и планете", profession: "Альтернативная энергетика" }
      ]
    },
    {
      id: 4,
      question: "Какой стиль работы вам ближе?",
      options: [
        { value: "research", label: "Исследования и эксперименты", profession: "Биоинформатика" },
        { value: "practical", label: "Практическое применение технологий", profession: "Робототехника" },
        { value: "creative", label: "Творческий подход к решению задач", profession: "UX/UI" },
        { value: "analytical", label: "Анализ данных и поиск закономерностей", profession: "AI" }
      ]
    },
    {
      id: 5,
      question: "Что вас вдохновляет больше всего?",
      options: [
        { value: "future", label: "Будущее технологий и ИИ", profession: "AI" },
        { value: "nature", label: "Природа и устойчивое развитие", profession: "Сити-фермер" },
        { value: "people", label: "Помощь людям и коммуникация", profession: "Генетический консультант" },
        { value: "systems", label: "Сложные системы и их оптимизация", profession: "Кибербезопасность" }
      ]
    },
    {
      id: 6,
      question: "Какой предмет в школе вам нравится больше всего?",
      options: [
        { value: "math", label: "Математика", profession: "AI" },
        { value: "biology", label: "Биология", profession: "Биоинформатика" },
        { value: "physics", label: "Физика", profession: "Альтернативная энергетика" },
        { value: "informatics", label: "Информатика", profession: "Кибербезопасность" }
      ]
    },
    {
      id: 7,
      question: "Как вы относитесь к работе в команде?",
      options: [
        { value: "solo", label: "Предпочитаю работать самостоятельно", profession: "AI" },
        { value: "team", label: "Люблю командную работу", profession: "UX/UI" },
        { value: "lead", label: "Предпочитаю руководить проектами", profession: "Робототехника" },
        { value: "consult", label: "Нравится консультировать других", profession: "Генетический консультант" }
      ]
    },
    {
      id: 8,
      question: "Какая проблема современности волнует вас больше всего?",
      options: [
        { value: "cyber", label: "Кибератаки и утечки данных", profession: "Этический хакер" },
        { value: "energy", label: "Экологический кризис и энергетика", profession: "Альтернативная энергетика" },
        { value: "food", label: "Продовольственная безопасность", profession: "Сити-фермер" },
        { value: "health", label: "Здоровье и генетические болезни", profession: "Генетический консультант" }
      ]
    },
    {
      id: 9,
      question: "Какой тип проектов вам интереснее?",
      options: [
        { value: "ai_projects", label: "Создание умных систем и ИИ", profession: "AI" },
        { value: "physical", label: "Проектирование физических устройств", profession: "Робототехника" },
        { value: "digital", label: "Разработка цифровых продуктов", profession: "UX/UI" },
        { value: "language", label: "Работа с языками и переводами", profession: "Цифровой лингвист" }
      ]
    },
    {
      id: 10,
      question: "Что для вас важнее в профессии?",
      options: [
        { value: "cutting_edge", label: "Работа с передовыми технологиями", profession: "AI" },
        { value: "impact", label: "Реальное влияние на жизнь людей", profession: "Генетический консультант" },
        { value: "creativity", label: "Возможность для творчества", profession: "UX/UI" },
        { value: "challenge", label: "Сложные интеллектуальные задачи", profession: "Кибербезопасность" }
      ]
    },
    {
      id: 11,
      question: "Как вы предпочитаете учиться?",
      options: [
        { value: "theory", label: "Изучение теории и фундаментальных основ", profession: "AI" },
        { value: "practice", label: "Практические эксперименты", profession: "Робототехника" },
        { value: "projects", label: "Работа над реальными проектами", profession: "UX/UI" },
        { value: "research", label: "Научные исследования", profession: "Биоинформатика" }
      ]
    },
    {
      id: 12,
      question: "Какое направление будущего кажется вам наиболее перспективным?",
      options: [
        { value: "ai_future", label: "Искусственный интеллект и автоматизация", profession: "AI" },
        { value: "green", label: "Зеленые технологии и устойчивое развитие", profession: "Альтернативная энергетика" },
        { value: "bio_future", label: "Биотехнологии и персонализированная медицина", profession: "Генетический консультант" },
        { value: "urban", label: "Умные города и урбанистика", profession: "Сити-фермер" }
      ]
    }
  ];

  const calculateResults = () => {
    const professionCount: { [key: string]: number } = {};
    
    answers.forEach(answer => {
      const question = questions.find(q => 
        q.options.some(opt => opt.value === answer)
      );
      const option = question?.options.find(opt => opt.value === answer);
      if (option) {
        professionCount[option.profession] = (professionCount[option.profession] || 0) + 1;
      }
    });

    const sortedProfessions = Object.entries(professionCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    return sortedProfessions;
  };

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers([...answers, selectedAnswer]);
      setSelectedAnswer("");
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const professionDescriptions: { [key: string]: string } = {
    "AI": "Вам подходит работа с искусственным интеллектом и машинным обучением",
    "Кибербезопасность": "Вам подходит защита информационных систем",
    "Биоинформатика": "Вам подходит анализ биологических данных",
    "Робототехника": "Вам подходит создание роботов и автоматизация",
    "Генетический консультант": "Вам подходит работа в области медицинской генетики",
    "UX/UI": "Вам подходит дизайн человеко-машинных интерфейсов",
    "Этический хакер": "Вам подходит легальный поиск уязвимостей",
    "Альтернативная энергетика": "Вам подходит работа с возобновляемыми источниками энергии",
    "Сити-фермер": "Вам подходит городское сельское хозяйство",
    "Цифровой лингвист": "Вам подходит работа с обработкой естественного языка"
  };

  return (
    <section id="test" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Тест на профориентацию
          </h2>
          <p className="text-xl text-muted-foreground">
            Пройдите тест и узнайте, какая профессия будущего подходит именно вам
          </p>
        </div>

        <Card className="shadow-glow">
          {!showResults ? (
            <>
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <CardTitle className="text-2xl mt-6">
                  {questions[currentQuestion].question}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer text-base">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="w-full bg-gradient-primary"
                  size="lg"
                >
                  {currentQuestion < questions.length - 1 ? "Следующий вопрос" : "Показать результаты"}
                </Button>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-3xl text-center">Ваши результаты</CardTitle>
                <CardDescription className="text-center text-lg">
                  Топ-3 профессий, которые вам подходят
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {calculateResults().map(([profession, count], index) => (
                  <div
                    key={profession}
                    className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold text-primary">
                        #{index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{profession}</h3>
                        <p className="text-muted-foreground mb-2">
                          {professionDescriptions[profession]}
                        </p>
                        <div className="text-sm text-muted-foreground">
                          Совпадений: {count} из {questions.length}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-6 space-y-4">
                  <p className="text-center text-muted-foreground">
                    Прокрутите вверх, чтобы узнать больше о рекомендованных профессиях
                  </p>
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    Пройти тест заново
                  </Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </section>
  );
};
