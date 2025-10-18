import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const pcOptimizations = [
    {
      title: 'Базовая оптимизация',
      description: 'Очистка системы, отключение лишних служб, оптимизация автозагрузки',
      price: '1 500₽',
      features: ['Чистка реестра', 'Удаление мусора', 'Настройка автозагрузки', 'Оптимизация служб'],
      icon: 'Zap',
      boost: '+20% FPS'
    },
    {
      title: 'Геймерская оптимизация',
      description: 'Полная настройка системы под максимальную производительность в играх',
      price: '3 000₽',
      features: ['Все из Базовой', 'Настройка GPU', 'Разгон процессора', 'Оптимизация сети', 'Твики Windows'],
      icon: 'Gamepad2',
      boost: '+40% FPS',
      popular: true
    },
    {
      title: 'Премиум пакет',
      description: 'Максимальная оптимизация + индивидуальная настройка под вашу систему',
      price: '5 000₽',
      features: ['Все из Геймерской', 'Персональные настройки', 'Тонкая настройка BIOS', 'Приоритеты процессов', 'Месяц поддержки'],
      icon: 'Crown',
      boost: '+60% FPS'
    }
  ];

  const phoneOptimizations = [
    {
      title: 'Базовая для Android',
      description: 'Очистка и ускорение смартфона',
      price: '800₽',
      features: ['Удаление кэша', 'Оптимизация памяти', 'Отключение фоновых процессов'],
      icon: 'Smartphone',
      boost: '+30% скорости'
    },
    {
      title: 'Геймерская для iOS',
      description: 'Настройка iPhone под игры',
      price: '1 200₽',
      features: ['Оптимизация iOS', 'Очистка памяти', 'Настройка производительности'],
      icon: 'Apple',
      boost: '+25% FPS'
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'После оптимизации CS2 стал выдавать стабильные 240 FPS! Раньше фризило до 120. Рекомендую!',
      game: 'CS2'
    },
    {
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Премиум пакет полностью оправдал цену. Valorant летает, никаких просадок. Ребята знают своё дело!',
      game: 'Valorant'
    },
    {
      name: 'Максим В.',
      rating: 5,
      text: 'Оптимизация телефона творит чудеса. Pubg Mobile на ультра настройках без лагов. Спасибо!',
      game: 'PUBG Mobile'
    },
    {
      name: 'Артем С.',
      rating: 5,
      text: 'Быстро, качественно, профессионально. Прирост FPS в Dota 2 примерно 50%. Однозначно 5 звёзд!',
      game: 'Dota 2'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Cpu" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold gradient-text">OptimizePro</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#pc" className="text-foreground/80 hover:text-primary transition-colors">Оптимизации ПК</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Прайс-лист</a>
            <a href="#reviews" className="text-foreground/80 hover:text-primary transition-colors">Отзывы</a>
          </div>
          <Sheet open={chatOpen} onOpenChange={setChatOpen}>
            <SheetTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Icon name="Headphones" className="text-primary" />
                  Онлайн-консультация
                </SheetTitle>
                <SheetDescription>
                  Напишите нам, и мы подберём оптимальную оптимизацию для вашей системы
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Как к вам обращаться?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о проблеме или задайте вопрос..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </Button>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💬 Обычно отвечаем в течение 5 минут
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/40 px-4 py-2 text-sm">
            🚀 Максимальная производительность
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text glow-effect">
            Разгони свой ПК до предела
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Профессиональная оптимизация для ПК и телефонов. Увеличим FPS, уберём лаги и фризы. Гарантированный результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Заказать оптимизацию
            </Button>
            <Button size="lg" variant="outline" className="border-primary/40 text-lg px-8">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Посмотреть результаты
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: 'Gauge', value: '+60%', label: 'FPS' },
              { icon: 'Zap', value: '1000+', label: 'Клиентов' },
              { icon: 'Star', value: '5.0', label: 'Рейтинг' },
              { icon: 'Clock', value: '24/7', label: 'Поддержка' }
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all hover:scale-105">
                <Icon name={stat.icon as any} className="text-primary mb-3 mx-auto" size={32} />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pc" className="container mx-auto px-4 py-20 bg-card/30">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Оптимизации для ПК</h3>
          <p className="text-foreground/70 text-lg">Выберите пакет под ваши задачи</p>
        </div>

        <Tabs defaultValue="pc" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="pc" className="text-lg">
              <Icon name="Monitor" size={20} className="mr-2" />
              Для ПК
            </TabsTrigger>
            <TabsTrigger value="phone" className="text-lg">
              <Icon name="Smartphone" size={20} className="mr-2" />
              Для телефонов
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pc">
            <div className="grid md:grid-cols-3 gap-8">
              {pcOptimizations.map((opt, idx) => (
                <Card 
                  key={idx} 
                  className={`relative overflow-hidden transition-all hover:scale-105 ${
                    opt.popular ? 'border-primary card-glow' : 'border-border/40'
                  }`}
                >
                  {opt.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-primary to-secondary">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <Icon name={opt.icon as any} className="text-primary mb-4" size={48} />
                    <CardTitle className="text-2xl">{opt.title}</CardTitle>
                    <CardDescription>{opt.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-4xl font-bold gradient-text">{opt.price}</div>
                      <Badge variant="outline" className="mt-2 border-secondary text-secondary">
                        {opt.boost}
                      </Badge>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {opt.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Выбрать пакет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="phone">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {phoneOptimizations.map((opt, idx) => (
                <Card key={idx} className="border-border/40 hover:border-primary/40 transition-all hover:scale-105">
                  <CardHeader>
                    <Icon name={opt.icon as any} className="text-primary mb-4" size={48} />
                    <CardTitle className="text-2xl">{opt.title}</CardTitle>
                    <CardDescription>{opt.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-4xl font-bold gradient-text">{opt.price}</div>
                      <Badge variant="outline" className="mt-2 border-secondary text-secondary">
                        {opt.boost}
                      </Badge>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {opt.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Выбрать пакет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Прайс-лист</h3>
          <p className="text-foreground/70 text-lg">Прозрачные цены без скрытых платежей</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-border/40">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { service: 'Базовая оптимизация ПК', price: '1 500₽', time: '1-2 часа' },
                  { service: 'Геймерская оптимизация ПК', price: '3 000₽', time: '2-3 часа' },
                  { service: 'Премиум пакет ПК', price: '5 000₽', time: '3-4 часа' },
                  { service: 'Оптимизация Android', price: '800₽', time: '30-60 мин' },
                  { service: 'Оптимизация iOS', price: '1 200₽', time: '30-60 мин' },
                  { service: 'Разгон процессора', price: '2 000₽', time: '1-2 часа' },
                  { service: 'Настройка BIOS', price: '1 500₽', time: '1 час' },
                  { service: 'Консультация', price: 'Бесплатно', time: '15-30 мин' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div>
                      <div className="font-medium">{item.service}</div>
                      <div className="text-sm text-foreground/60">⏱️ {item.time}</div>
                    </div>
                    <div className="text-xl font-bold gradient-text">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="container mx-auto px-4 py-20 bg-card/30">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Отзывы клиентов</h3>
          <p className="text-foreground/70 text-lg">Более 1000 довольных геймеров</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <Card key={idx} className="border-border/40 hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <Badge variant="outline" className="border-secondary text-secondary">
                    {review.game}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Cpu" className="text-primary" size={28} />
                <h4 className="text-xl font-bold gradient-text">OptimizePro</h4>
              </div>
              <p className="text-foreground/60 text-sm">
                Профессиональная оптимизация игровых систем с 2020 года
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>support@optimizepro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @optimizepro</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Мы в соцсетях</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-border/40">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="border-border/40">
                  <Icon name="Youtube" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="border-border/40">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
            © 2024 OptimizePro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
