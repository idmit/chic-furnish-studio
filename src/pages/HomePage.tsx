import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import heroImage from '@/assets/hero-furniture.jpg';

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

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
            {categories.map((category) => (
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

      {/* Featured Products */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Самые востребованные предметы мебели от наших покупателей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-wood/10 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-wood" />
              </div>
              <h3 className="text-lg font-semibold">Быстрая доставка</h3>
              <p className="text-muted-foreground">
                Доставляем по Москве в течение 1-2 дней
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-wood/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-wood" />
              </div>
              <h3 className="text-lg font-semibold">Гарантия качества</h3>
              <p className="text-muted-foreground">
                2 года гарантии на всю мебель
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-wood/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-wood" />
              </div>
              <h3 className="text-lg font-semibold">Сборка мебели</h3>
              <p className="text-muted-foreground">
                Профессиональная сборка в день доставки
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;