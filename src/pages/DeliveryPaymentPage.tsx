import { Truck, CreditCard, Package, Shield, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const DeliveryPaymentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Доставка и оплата</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем удобные способы доставки и оплаты для вашего комфорта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Delivery Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Truck className="mr-3 h-6 w-6 text-wood" />
                Доставка
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Package className="mr-2 h-5 w-5 text-wood" />
                      Доставка по Москве
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <span className="font-medium">Бесплатно от 50 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Срок доставки:</span>
                      <span className="font-medium">1-2 рабочих дня</span>
                    </div>
                    <div className="flex justify-between">
                      <span>При заказе до 50 000 ₽:</span>
                      <span className="font-medium">1 500 ₽</span>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Доставка осуществляется в пределах МКАД. Точное время доставки согласовывается с менеджером.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Package className="mr-2 h-5 w-5 text-wood" />
                      Доставка по Московской области
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <span className="font-medium">2 500 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Срок доставки:</span>
                      <span className="font-medium">2-3 рабочих дня</span>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Доставка в пределах 30 км от МКАД. Более дальние расстояния рассчитываются индивидуально.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Package className="mr-2 h-5 w-5 text-wood" />
                      Самовывоз
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <span className="font-medium text-green-600">Бесплатно</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время работы склада:</span>
                      <span className="font-medium">Пн-Пт: 9:00-18:00</span>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Адрес склада: г. Москва, ул. Складская, 45. Предварительно позвоните для согласования времени.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Assembly Service */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-wood" />
                Сборка мебели
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Стоимость сборки:</span>
                      <span className="font-medium">15% от стоимости товара</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Минимальная стоимость:</span>
                      <span className="font-medium">2 000 ₽</span>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Профессиональная сборка мебели нашими мастерами. Сборка производится в день доставки или в согласованное время.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CreditCard className="mr-3 h-6 w-6 text-wood" />
                Способы оплаты
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Наличными</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Оплата наличными при получении товара. Возможна оплата курьеру при доставке или в нашем магазине при самовывозе.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Банковской картой</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Оплата банковской картой на сайте или при получении товара. Принимаем карты Visa, MasterCard, МИР.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Банковский перевод</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Безналичная оплата для юридических лиц. Предоставляем все необходимые документы для бухгалтерии.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Рассрочка</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        Беспроцентная рассрочка на 6 или 12 месяцев от наших банков-партнёров.
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                        <li>Без первоначального взноса</li>
                        <li>Без переплат</li>
                        <li>Быстрое оформление</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Warranty */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-wood" />
                Гарантия и возврат
              </h3>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Гарантия 2 года</p>
                      <p className="text-sm text-muted-foreground">На всю мебель из натурального дерева</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Возврат в течение 14 дней</p>
                      <p className="text-sm text-muted-foreground">При сохранении товарного вида</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Бесплатное гарантийное обслуживание</p>
                      <p className="text-sm text-muted-foreground">Ремонт или замена при гарантийных случаях</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <Card className="mt-12">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Есть вопросы?</h3>
            <p className="text-muted-foreground mb-4">
              Наши менеджеры ответят на все ваши вопросы по доставке и оплате
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-wood" />
                Работаем ежедневно с 9:00 до 21:00
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                +7 (495) 123-45-67
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryPaymentPage;