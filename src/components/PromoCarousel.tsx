import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Import images
import sofaModern from '@/assets/sofa-modern.jpg';
import chairModern from '@/assets/chair-modern.jpg';
import bedModern from '@/assets/bed-modern.jpg';

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
    image: sofaModern,
    bgColor: "bg-gradient-to-r from-orange-400 to-pink-400",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Новая коллекция",
    subtitle: "Современная мебель для дома",
    discount: "NEW",
    image: chairModern,
    bgColor: "bg-gradient-to-r from-green-400 to-blue-400",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Эксклюзивные предложения",
    subtitle: "Только сегодня специальная цена",
    discount: "-30%",
    image: bedModern,
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
    <section className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-xl mb-12">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promoSlides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-full relative ${slide.bgColor} flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8`}
          >
            <div className={`flex-1 ${slide.textColor} z-10 text-center md:text-left`}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Tag className="w-3 h-3 mr-1" />
                {slide.discount}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
              >
                Смотреть товары
              </Button>
            </div>
            <div className="flex-1 relative h-32 sm:h-40 md:h-full w-full md:block mt-4 md:mt-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="absolute inset-0 md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 h-full md:h-80 w-full md:w-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 w-8 h-8 sm:w-10 sm:h-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 w-8 h-8 sm:w-10 sm:h-10"
        onClick={nextSlide}
      >
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
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