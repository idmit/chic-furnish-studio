import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl tracking-tight">МЕБЕЛЬ</div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-wood ${
              isActive('/') ? 'text-wood' : 'text-muted-foreground'
            }`}
          >
            Главная
          </Link>
          <Link
            to="/catalog"
            className={`text-sm font-medium transition-colors hover:text-wood ${
              isActive('/catalog') ? 'text-wood' : 'text-muted-foreground'
            }`}
          >
            Каталог
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-wood ${
              isActive('/about') ? 'text-wood' : 'text-muted-foreground'
            }`}
          >
            О нас
          </Link>
          <Link
            to="/delivery"
            className={`text-sm font-medium transition-colors hover:text-wood ${
              isActive('/delivery') ? 'text-wood' : 'text-muted-foreground'
            }`}
          >
            Доставка
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-wood text-xs text-white flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-wood ${
                    isActive('/') ? 'text-wood' : 'text-muted-foreground'
                  }`}
                >
                  Главная
                </Link>
                <Link
                  to="/catalog"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-wood ${
                    isActive('/catalog') ? 'text-wood' : 'text-muted-foreground'
                  }`}
                >
                  Каталог
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-wood ${
                    isActive('/about') ? 'text-wood' : 'text-muted-foreground'
                  }`}
                >
                  О нас
                </Link>
                <Link
                  to="/delivery"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-wood ${
                    isActive('/delivery') ? 'text-wood' : 'text-muted-foreground'
                  }`}
                >
                  Доставка
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;