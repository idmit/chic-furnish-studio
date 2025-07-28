import { Sofa, Bed, Armchair, Lamp, Archive, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  count: number;
  gradient: string;
}

const categories: Category[] = [
  {
    id: 'sofas',
    name: 'Диваны',
    icon: Sofa,
    count: 156,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'beds',
    name: 'Кровати',
    icon: Bed,
    count: 89,
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: 'chairs',
    name: 'Кресла',
    icon: Armchair,
    count: 234,
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 'lighting',
    name: 'Освещение',
    icon: Lamp,
    count: 67,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'storage',
    name: 'Хранение',
    icon: Archive,
    count: 123,
    gradient: 'from-red-500 to-red-600'
  },
  {
    id: 'decor',
    name: 'Декор',
    icon: Home,
    count: 198,
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

const CategoriesGrid = () => {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Категории товаров
        </h2>
        <p className="text-xl text-muted-foreground">
          Найдите идеальную мебель для вашего дома
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          
          return (
            <Link key={category.id} to="/catalog" className="group">
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-none">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} товаров
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesGrid;