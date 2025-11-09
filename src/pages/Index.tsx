import { Hero } from "@/components/Hero";
import { ProfessionsSection } from "@/components/ProfessionsSection";
import { CareerTest } from "@/components/CareerTest";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProfessionsSection />
      <CareerTest />
      
      <footer className="bg-card border-t border-border py-8 px-4 mt-20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 Профессии Будущего</p>
          <p className="text-sm">Инвестируйте в свое будущее сегодня</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
