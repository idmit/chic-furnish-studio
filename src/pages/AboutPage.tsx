import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Map from '@/components/Map';
import ContactForm from '@/components/ContactForm';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">О нашей компании</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Уже более 15 лет мы создаем качественную мебель для уютных домов. 
            Наша миссия — сделать каждый дом особенным с помощью красивой и функциональной мебели.
          </p>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Наша история</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Компания была основана в 2008 году как небольшая мастерская по производству 
                мебели из натурального дерева. Мы начинали с изготовления столов и стульев 
                для местных кафе и ресторанов.
              </p>
              <p>
                Сегодня мы выросли в крупную компанию, которая предлагает широкий ассортимент 
                мебели для дома и офиса. Несмотря на рост, мы сохранили приверженность 
                качеству и индивидуальному подходу к каждому клиенту.
              </p>
              <p>
                Вся наша мебель изготавливается из экологически чистых материалов с 
                использованием современных технологий и традиционных ремесленных методов.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Наши принципы</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-wood rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold mb-1">Качество</h3>
                  <p className="text-muted-foreground text-sm">
                    Используем только натуральные материалы высшего качества
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-wood rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold mb-1">Экологичность</h3>
                  <p className="text-muted-foreground text-sm">
                    Заботимся об окружающей среде и используем возобновляемые ресурсы
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-wood rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold mb-1">Индивидуальность</h3>
                  <p className="text-muted-foreground text-sm">
                    Каждый предмет мебели уникален и создан с особым вниманием к деталям
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info and Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Как нас найти</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Contact Cards */}
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-wood" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  г. Москва<br />
                  ул. Примерная, д. 123<br />
                  стр. 1
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-wood" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">
                  +7 (495) 123-45-67<br />
                  +7 (495) 123-45-68
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-4 text-wood" />
                <h3 className="font-semibold mb-2">Режим работы</h3>
                <p className="text-muted-foreground">
                  Пн-Пт: 9:00 - 20:00<br />
                  Сб-Вс: 10:00 - 18:00
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Map />
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Есть вопросы о нашей мебели или хотите заказать индивидуальный проект? 
                Мы будем рады помочь вам.
              </p>
              <p>
                Наши специалисты ответят на все ваши вопросы и помогут подобрать 
                идеальную мебель для вашего дома.
              </p>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-wood" />
                <span>info@furniture-store.ru</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;