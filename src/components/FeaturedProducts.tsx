import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

// Import images
import sofaModern from '@/assets/sofa-modern.jpg';
import chairModern from '@/assets/chair-modern.jpg';
import bedModern from '@/assets/bed-modern.jpg';
import coffeeTable from '@/assets/coffee-table.jpg';
import wardrobeModern from '@/assets/wardrobe-modern.jpg';

interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  discount?: number;
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "Современный диван",
    price: 89000,
    originalPrice: 120000,
    image: sofaModern,
    rating: 4.8,
    reviews: 124,
    discount: 26
  },
  {
    id: 2,
    name: "Кресло дизайнерское",
    price: 35000,
    image: chairModern,
    rating: 4.9,
    reviews: 89,
    isNew: true
  },
  {
    id: 3,
    name: "Кровать модерн",
    price: 75000,
    originalPrice: 95000,
    image: bedModern,
    rating: 4.7,
    reviews: 156,
    discount: 21
  },
  {
    id: 4,
    name: "Журнальный столик",
    price: 25000,
    image: coffeeTable,
    rating: 4.6,
    reviews: 78,
    isNew: true
  },
  {
    id: 5,
    name: "Шкаф современный",
    price: 65000,
    originalPrice: 80000,
    image: wardrobeModern,
    rating: 4.8,
    reviews: 92,
    discount: 19
  }
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const { addItem } = useCart();

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const maxIndex = Math.max(0, featuredProducts.length - itemsPerPage);

  // Update items per page on window resize
  useState(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const next = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleAddToCart = (product: FeaturedProduct) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      category: 'featured',
      description: `${product.name} - популярный товар`,
      specifications: {},
      inStock: true,
      rating: product.rating,
      reviews: product.reviews
    });
    
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} успешно добавлен в корзину`,
    });
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Рекомендуемые товары
          </h2>
          <p className="text-lg text-muted-foreground">
            Популярные товары с лучшими отзывами
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            disabled={currentIndex === 0}
            className="h-10 w-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="h-10 w-10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-3 sm:gap-4 md:gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className={`${
              itemsPerPage === 1 
                ? 'min-w-full' 
                : itemsPerPage === 2 
                ? 'min-w-[calc(50%-8px)]' 
                : 'min-w-[calc(25%-18px)]'
            } flex-shrink-0`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">
                        NEW
                      </Badge>
                    )}
                    {product.discount && (
                      <Badge className="bg-red-500 hover:bg-red-600">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                  
                  {/* Favorite button */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favorites.has(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} отзывов)
                    </span>
                  </div>
                  
                  {/* Product name */}
                  <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-primary">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                  </div>
                  
                  {/* Add to cart button */}
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;