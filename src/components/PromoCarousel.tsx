import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface PromoSlide {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const promoSlides: PromoSlide[] = [
  {
    id: 1,
    title: "Летняя распродажа",
    subtitle: "Скидки до 50% на всю мебель",
    discount: "до -50%",
    image: "/src/assets/sofa-modern.jpg",
    bgColor: "bg-gradient-to-r from-orange-400 to-pink-400",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Новая коллекция",
    subtitle: "Современная мебель для дома",
    discount: "NEW",
    image: "/src/assets/chair-modern.jpg",
    bgColor: "bg-gradient-to-r from-green-400 to-blue-400",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Эксклюзивные предложения",
    subtitle: "Только сегодня специальная цена",
    discount: "-30%",
    image: "/src/assets/bed-modern.jpg",
    bgColor: "bg-gradient-to-r from-purple-400 to-indigo-400",
    textColor: "text-white"
  }
];

const PromoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length);
  };

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden rounded-xl mb-12">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promoSlides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-full relative ${slide.bgColor} flex items-center justify-between px-8 md:px-16`}
          >
            <div className={`flex-1 ${slide.textColor} z-10`}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Tag className="w-3 h-3 mr-1" />
                {slide.discount}
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Смотреть товары
              </Button>
            </div>
            <div className="flex-1 relative h-full hidden md:block">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 h-80 w-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
        onClick={nextSlide}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promoSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default PromoCarousel;