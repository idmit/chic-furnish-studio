import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock, Home, Palette, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import heroImage from '@/assets/hero-furniture.jpg';
import homeIdeasImage from '@/assets/home-ideas.jpg';

const HomePage = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Мебель для вашего дома
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Создайте уютное пространство с нашей коллекцией современной мебели
          </p>
          <Link to="/catalog">
            <Button variant="elegant" size="lg" className="mt-8">
              Смотреть каталог
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Категории</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите нужную категорию мебели для вашего интерьера
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category) => (
              <Link key={category.id} to={`/catalog?category=${category.slug}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Home Ideas Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Идеи для вашего дома</h2>
                <p className="text-lg text-muted-foreground">
                  Вдохновляйтесь нашими интерьерными решениями и создайте идеальное пространство
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <Home className="w-8 h-8 text-wood mb-3" />
                  <h3 className="font-semibold mb-2">Гостиная</h3>
                  <p className="text-sm text-muted-foreground">
                    Создайте уютную атмосферу с нашими диванами и столиками
                  </p>
                </div>
                
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <Palette className="w-8 h-8 text-wood mb-3" />
                  <h3 className="font-semibold mb-2">Спальня</h3>
                  <p className="text-sm text-muted-foreground">
                    Комфортный отдых с качественными кроватями и шкафами
                  </p>
                </div>
                
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <Lightbulb className="w-8 h-8 text-wood mb-3" />
                  <h3 className="font-semibold mb-2">Рабочее место</h3>
                  <p className="text-sm text-muted-foreground">
                    Продуктивность с эргономичными столами и стульями
                  </p>
                </div>
                
                <div className="p-6 bg-background rounded-lg shadow-sm">
                  <Star className="w-8 h-8 text-wood mb-3" />
                  <h3 className="font-semibold mb-2">Столовая</h3>
                  <p className="text-sm text-muted-foreground">
                    Семейные обеды за красивыми обеденными столами
                  </p>
                </div>
              </div>
              
              <Link to="/catalog">
                <Button variant="wood" size="lg" className="mt-6">
                  Вдохновиться идеями
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={homeIdeasImage}
                  alt="Идеи для дома"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Самые востребованные предметы мебели от наших покупателей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button variant="outline" size="lg">
                Посмотреть все товары
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы заботимся о качестве и комфорте наших клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-wood to-wood-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Быстрая доставка</h3>
                <p className="text-muted-foreground">
                  Доставляем по Москве в течение 1-2 дней. Бесплатно от 50 000 ₽
                </p>
                <div className="text-sm text-wood font-medium">
                  От 1 дня
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-wood to-wood-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  2 года гарантии на всю мебель из натуральных материалов
                </p>
                <div className="text-sm text-wood font-medium">
                  2 года
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-wood to-wood-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Сборка мебели</h3>
                <p className="text-muted-foreground">
                  Профессиональная сборка в день доставки нашими мастерами
                </p>
                <div className="text-sm text-wood font-medium">
                  В день доставки
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;