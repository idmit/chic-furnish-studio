import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, User, MessageSquare, Clock, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import chairModern from "@/assets/chair-modern.jpg";
import sofaModern from "@/assets/sofa-modern.jpg";
import bedModern from "@/assets/bed-modern.jpg";
import wardrobeModern from "@/assets/wardrobe-modern.jpg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Как выбрать идеальный диван для гостиной",
    excerpt: "Подробное руководство по выбору дивана, который прослужит вам долгие годы и станет центром уюта в вашем доме.",
    content: `Выбор дивана - это важное решение, которое влияет на комфорт вашего дома на долгие годы. При выборе дивана учитывайте следующие факторы:

**1. Размер и планировка**
Измерьте пространство, где будет стоять диван. Учтите не только размеры самого дивана, но и место для прохода вокруг него. Оптимальное расстояние от дивана до кофейного столика - 40-50 см.

**2. Тип каркаса**
- Деревянный каркас: долговечный, экологичный
- Металлический каркас: прочный, подходит для современных стилей
- ДСП/МДФ: бюджетный вариант, подходит для нечастого использования

**3. Наполнитель**
- Пружинный блок: классический вариант, хорошая поддержка
- Пенополиуретан: мягкий, доступный по цене
- Латекс: гипоаллергенный, долговечный
- Холлофайбер: упругий, хорошо держит форму

**4. Обивка**
- Натуральная кожа: престижно, долговечно, требует ухода
- Экокожа: практично, доступно по цене
- Ткань: большой выбор цветов и фактур
- Велюр/бархат: роскошно выглядит, требует деликатного ухода

**5. Механизм трансформации**
Если нужна дополнительная спальная зона, выбирайте проверенные механизмы: "клик-кляк", "еврокнижка", "дельфин".`,
    image: sofaModern,
    author: "Анна Дизайнова",
    date: "15 января 2024",
    readTime: "7 мин",
    category: "Выбор мебели",
    tags: ["диван", "гостиная", "выбор мебели"]
  },
  {
    id: 2,
    title: "Правильный уход за деревянной мебелью",
    excerpt: "Секреты долговечности деревянной мебели: как правильно ухаживать, чистить и защищать от повреждений.",
    content: `Деревянная мебель - это инвестиция в красоту и долговечность. Правильный уход поможет сохранить её первозданный вид на десятилетия.

**Ежедневный уход:**
- Протирайте поверхности сухой мягкой тканью
- Избегайте попадания прямых солнечных лучей
- Поддерживайте влажность воздуха 40-60%
- Используйте подставки под горячие предметы

**Еженедельная чистка:**
- Протирайте слегка влажной тканью по направлению волокон
- Сразу же вытирайте насухо
- Используйте специальные средства для дерева

**Глубокая чистка (раз в месяц):**
- Применяйте специальные очистители для дерева
- Наносите защитный воск или масло
- Полируйте мягкой тканью

**Защита от повреждений:**
- Используйте скатерти и салфетки
- Избегайте химических растворителей
- Своевременно устраняйте царапины специальными восками

**Что нельзя делать:**
- Использовать абразивные средства
- Ставить мокрые предметы без подставок
- Располагать рядом с отопительными приборами
- Применять средства с аммиаком или отбеливателем`,
    image: wardrobeModern,
    author: "Михаил Столяров",
    date: "12 января 2024",
    readTime: "5 мин",
    category: "Уход за мебелью",
    tags: ["дерево", "уход", "чистка"]
  },
  {
    id: 3,
    title: "Создание уютной спальни: 10 главных правил",
    excerpt: "Как создать идеальную атмосферу для отдыха в спальне. Советы по выбору мебели, освещения и декора.",
    content: `Спальня - это ваше личное убежище, место для полноценного отдыха и восстановления сил. Вот 10 ключевых правил создания уютной спальни:

**1. Правильная кровать**
Выбирайте кровать исходя из размера комнаты. Матрас должен быть качественным - это основа здорового сна.

**2. Цветовая гамма**
Отдавайте предпочтение спокойным, приглушенным тонам: бежевому, серому, нежно-голубому, лавандовому.

**3. Освещение**
Используйте несколько источников света: основной потолочный, прикроватные лампы, возможно, торшер.

**4. Шторы и портьеры**
Плотные шторы обеспечат качественный сон. Рассмотрите вариант блэкаут для полного затемнения.

**5. Системы хранения**
Встроенные шкафы или комоды помогут поддерживать порядок. Скрытые системы хранения визуально увеличивают пространство.

**6. Текстиль**
Качественное постельное белье, мягкие подушки, теплый плед создают атмосферу комфорта.

**7. Вентиляция**
Свежий воздух критически важен для качественного сна. Регулярно проветривайте комнату.

**8. Минимализм**
Избегайте лишних предметов. Чем меньше хлама, тем спокойнее атмосфера.

**9. Растения**
Некоторые растения (лаванда, алоэ) улучшают качество воздуха и способствуют расслаблению.

**10. Персонализация**
Добавьте личные элементы: любимые фотографии, книги, ароматические свечи.`,
    image: bedModern,
    author: "Елена Уютова",
    date: "10 января 2024",
    readTime: "6 мин",
    category: "Дизайн интерьера",
    tags: ["спальня", "уют", "дизайн", "отдых"]
  },
  {
    id: 4,
    title: "Эргономика рабочего места: выбираем правильное кресло",
    excerpt: "Здоровье позвоночника начинается с правильного кресла. Разбираем, на что обратить внимание при выборе.",
    content: `В эпоху удаленной работы правильное офисное кресло стало критически важным для здоровья. Вот ключевые критерии выбора:

**Поддержка позвоночника:**
- Кресло должно повторять естественные изгибы позвоночника
- Поясничная поддержка - обязательный элемент
- Высота спинки должна доходить минимум до лопаток

**Регулировки:**
- Высота сиденья (бедра параллельны полу)
- Угол наклона спинки (90-110 градусов)
- Высота подлокотников (локти под углом 90 градусов)
- Глубина сиденья (2-3 см между коленями и краем)

**Материалы:**
- Дышащая обивка (сетка или качественная ткань)
- Плотный, но не жесткий наполнитель
- Прочный пластик или металл для основания

**Мобильность:**
- Качественные ролики для вашего типа пола
- Газлифт с надежным механизмом
- Возможность поворота на 360 градусов

**Дополнительные опции:**
- Подголовник для высоких людей
- Регулируемые подлокотники (4D)
- Механизм качания с фиксацией

**Тестирование:**
Обязательно "примерьте" кресло перед покупкой. Посидите минимум 10-15 минут, проверьте все регулировки.

**Бюджет vs качество:**
Хорошее эргономичное кресло - это инвестиция в здоровье. Лучше один раз купить качественное кресло, чем менять дешевые каждый год.`,
    image: chairModern,
    author: "Доктор Осанкин",
    date: "8 января 2024",
    readTime: "8 мин",
    category: "Здоровье",
    tags: ["кресло", "эргономика", "здоровье", "работа"]
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [questionForm, setQuestionForm] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionForm.name || !questionForm.email || !questionForm.question) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Вопрос отправлен!",
      description: "Мы ответим вам в течение 24 часов"
    });

    setQuestionForm({ name: '', email: '', question: '' });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="outline" 
            onClick={() => setSelectedPost(null)}
            className="mb-6"
          >
            ← Вернуться к блогу
          </Button>

          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {selectedPost.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-4">
                      {paragraph.slice(2, -2)}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const listItems = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="mb-6 text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Question Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Остались вопросы?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitQuestion} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        value={questionForm.name}
                        onChange={(e) => setQuestionForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={questionForm.email}
                        onChange={(e) => setQuestionForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="question">Ваш вопрос</Label>
                    <Textarea
                      id="question"
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm(prev => ({ ...prev, question: e.target.value }))}
                      placeholder="Задайте ваш вопрос..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    Отправить вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Блог о мебели
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные советы по выбору, уходу и дизайну мебели от наших экспертов
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-white/90 text-primary">
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  onClick={() => setSelectedPost(post)}
                >
                  Читать далее
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form Section */}
        <section className="bg-muted/50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Не нашли ответ?</h2>
              <p className="text-lg text-muted-foreground">
                Задайте вопрос нашим экспертам, и мы обязательно вам поможем
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Задать вопрос</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitQuestion} className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name">Ваше имя</Label>
                      <Input
                        id="contact-name"
                        value={questionForm.name}
                        onChange={(e) => setQuestionForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={questionForm.email}
                        onChange={(e) => setQuestionForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-question">Ваш вопрос</Label>
                      <Textarea
                        id="contact-question"
                        value={questionForm.question}
                        onChange={(e) => setQuestionForm(prev => ({ ...prev, question: e.target.value }))}
                        placeholder="Задайте ваш вопрос..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить вопрос
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@mebel.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Адрес</h3>
                        <p className="text-muted-foreground">Москва, ул. Мебельная, 1</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Время ответа</h3>
                  <p className="text-muted-foreground text-sm">
                    Мы отвечаем на все вопросы в течение 24 часов в рабочие дни
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;