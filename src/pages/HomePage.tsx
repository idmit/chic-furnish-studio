import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Truck, Shield, Headphones, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-furniture.jpg";
import homeIdeasImage from "@/assets/home-ideas.jpg";
import chairModern from "@/assets/chair-modern.jpg";
import sofaModern from "@/assets/sofa-modern.jpg";
import tableDining from "@/assets/table-dining.jpg";
import PromoCarousel from "@/components/PromoCarousel";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";

const HomePage = () => {
  const features = [
    {
      icon: Truck,
      title: "Быстрая доставка",
      description: "Доставим мебель в течение 1-3 дней по всей России"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "2 года гарантии на всю мебель и бесплатный ремонт"
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "Наши консультанты всегда готовы помочь с выбором"
    }
  ];

  const homeIdeas = [
    {
      title: "Скандинавский стиль",
      description: "Минимализм и функциональность",
      image: chairModern
    },
    {
      title: "Современная классика",
      description: "Элегантность и комфорт",
      image: sofaModern
    },
    {
      title: "Лофт интерьер",
      description: "Индустриальный шик",
      image: tableDining
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-primary/20 text-white border-primary/30 text-lg px-4 py-2">
            ⭐ Лучшие цены в городе
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Создайте дом своей мечты
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Эксклюзивная мебель высочайшего качества для вашего идеального интерьера
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/catalog">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Смотреть каталог
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm font-semibold shadow-lg"
              >
                О нас
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Promo Carousel */}
        <PromoCarousel />

        {/* Categories Grid */}
        <CategoriesGrid />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground">
              Более 10 000 довольных клиентов доверяют нам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Home Ideas Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Идеи для дома
            </h2>
            <p className="text-xl text-muted-foreground">
              Вдохновляйтесь нашими решениями для интерьера
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {homeIdeas.map((idea, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                    <p className="text-white/90">{idea.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="ml-2 text-lg font-semibold">4.9/5 - отзывы клиентов</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы преобразить ваш дом?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию дизайнера и персональную скидку до 25%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="text-lg px-8 py-6">
                Выбрать мебель
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Получить консультацию
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;