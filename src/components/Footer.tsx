import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-xl tracking-tight">МЕБЕЛЬ</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Создаем качественную мебель для уютных домов уже более 15 лет. 
              Натуральные материалы и современный дизайн.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-wood transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-wood transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-wood transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Навигация</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Главная
              </Link>
              <Link to="/catalog" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Каталог
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                О нас
              </Link>
              <Link to="/delivery" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Доставка и оплата
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Корзина
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Категории</h3>
            <nav className="space-y-2">
              <Link to="/catalog?category=chairs" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Стулья
              </Link>
              <Link to="/catalog?category=tables" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Столы
              </Link>
              <Link to="/catalog?category=shelving" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Стеллажи
              </Link>
              <Link to="/catalog?category=sofas" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Диваны и кресла
              </Link>
              <Link to="/catalog?category=wardrobes" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Шкафы
              </Link>
              <Link to="/catalog?category=beds" className="block text-muted-foreground hover:text-wood transition-colors text-sm">
                Кровати
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-wood flex-shrink-0" />
                <span className="text-muted-foreground">
                  г. Москва, ул. Примерная, 123
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-wood flex-shrink-0" />
                <span className="text-muted-foreground">
                  +7 (495) 123-45-67
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-wood flex-shrink-0" />
                <span className="text-muted-foreground">
                  info@furniture-store.ru
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Мебель. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-wood transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-wood transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;