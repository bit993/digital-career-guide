import heroImage from "@/assets/hero-future.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProfessions = () => {
    document.getElementById("professions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Профессии Будущего
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Мир стремительно меняется. Технологии, которые казались фантастикой 10 лет назад, 
            сегодня определяют нашу жизнь. Какие профессии будут востребованы завтра?
          </p>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-glow border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Зачем смотреть в будущее?</h2>
            <div className="text-lg text-foreground/90 space-y-4 text-left">
              <p>
                🎓 <strong>Для школьников:</strong> Выбрать образовательный путь, который будет актуален через 5-10 лет
              </p>
              <p>
                💼 <strong>Для студентов:</strong> Понять, какие навыки развивать прямо сейчас
              </p>
              <p>
                🚀 <strong>Для всех:</strong> Увидеть возможности карьерного роста в новых областях
              </p>
              <p className="text-muted-foreground pt-2 border-t border-border">
                Этот сайт поможет вам узнать о самых перспективных профессиях будущего, 
                понять, какое образование необходимо, и определить свой путь с помощью теста на профориентацию.
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={scrollToProfessions}
            className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Изучить профессии
          </Button>
        </div>
      </div>
    </section>
  );
};
