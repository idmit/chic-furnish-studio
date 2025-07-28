import { Product, Category } from '@/types/furniture';
import chairImage from '@/assets/chair-modern.jpg';
import tableImage from '@/assets/table-dining.jpg';
import bookshelfImage from '@/assets/bookshelf-modern.jpg';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Стулья',
    slug: 'chairs',
    image: chairImage,
  },
  {
    id: '2',
    name: 'Столы',
    slug: 'tables',
    image: tableImage,
  },
  {
    id: '3',
    name: 'Стеллажи',
    slug: 'shelving',
    image: bookshelfImage,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Модерн Стул Дуб',
    price: 15900,
    originalPrice: 18900,
    image: chairImage,
    category: 'chairs',
    description: 'Элегантный стул из натурального дуба с современным дизайном. Идеально подходит для столовой или кабинета.',
    specifications: {
      'Материал': 'Натуральный дуб',
      'Высота': '82 см',
      'Ширина': '45 см',
      'Глубина': '50 см',
      'Вес': '4.5 кг',
      'Максимальная нагрузка': '120 кг',
    },
    inStock: true,
    rating: 4.8,
    reviews: 127,
  },
  {
    id: '2',
    name: 'Обеденный Стол Классик',
    price: 45900,
    image: tableImage,
    category: 'tables',
    description: 'Прочный обеденный стол из массива дуба на 6 персон. Классический дизайн, который впишется в любой интерьер.',
    specifications: {
      'Материал': 'Массив дуба',
      'Длина': '180 см',
      'Ширина': '90 см',
      'Высота': '75 см',
      'Вес': '35 кг',
      'Количество мест': '6 персон',
    },
    inStock: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Книжный Стеллаж Лофт',
    price: 28900,
    originalPrice: 32900,
    image: bookshelfImage,
    category: 'shelving',
    description: 'Стильный книжный стеллаж в стиле лофт с открытыми полками. Изготовлен из натурального дерева.',
    specifications: {
      'Материал': 'Натуральное дерево',
      'Высота': '180 см',
      'Ширина': '80 см',
      'Глубина': '35 см',
      'Количество полок': '5',
      'Вес': '18 кг',
    },
    inStock: true,
    rating: 4.7,
    reviews: 156,
  },
];