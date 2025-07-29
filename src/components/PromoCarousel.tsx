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
            className={`min-w-full h-full relative ${slide.bgColor} flex items-center`}
          >
            {/* Background pattern/decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-10 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-32 w-16 h-16 border border-white/20 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-8 md:px-16 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center h-full py-8">
                {/* Content Side */}
                <div className={`${slide.textColor} order-2 md:order-1 text-center md:text-left`}>
                  <Badge className="mb-4 bg-white/20 text-white border-white/30 inline-flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    {slide.discount}
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-md mx-auto md:mx-0">
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto px-8 py-3 text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Смотреть товары
                  </Button>
                </div>

                {/* Image Side */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="relative">
                    <div className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72 lg:w-[420px] lg:h-80 bg-white/10 rounded-2xl backdrop-blur-sm p-4 shadow-2xl">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>
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