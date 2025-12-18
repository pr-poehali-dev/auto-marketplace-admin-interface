import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type OrderStatus = 'new' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: OrderStatus;
  date: string;
}

interface Product {
  id: string;
  name: string;
  category: 'auto' | 'parts' | 'insurance';
  price: number;
  stock: number;
  status: 'active' | 'inactive';
}

interface Partner {
  id: string;
  name: string;
  type: string;
  revenue: number;
  orders: number;
  status: 'active' | 'pending' | 'blocked';
}

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: string;
  trend: 'up' | 'down';
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  ordersCount: number;
  lastPurchase: string;
  status: 'new' | 'active' | 'vip' | 'inactive';
  registrationDate: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const stats: StatCard[] = [
    { title: 'Заказы сегодня', value: '127', change: '+12%', icon: 'ShoppingCart', trend: 'up' },
    { title: 'Доход', value: '₽4.2М', change: '+23%', icon: 'DollarSign', trend: 'up' },
    { title: 'Активные авто', value: '342', change: '-5%', icon: 'Car', trend: 'down' },
    { title: 'Партнёры', value: '48', change: '+8%', icon: 'Users', trend: 'up' },
  ];

  const orders: Order[] = [
    { id: 'ORD-2401', customer: 'Иван Петров', product: 'Toyota Camry 2024', amount: 2850000, status: 'processing', date: '18.12.2024' },
    { id: 'ORD-2402', customer: 'Мария Сидорова', product: 'ОСАГО Premium', amount: 18500, status: 'new', date: '18.12.2024' },
    { id: 'ORD-2403', customer: 'Алексей Козлов', product: 'Моторное масло Mobil', amount: 3200, status: 'delivered', date: '17.12.2024' },
    { id: 'ORD-2404', customer: 'Ольга Новикова', product: 'Mazda CX-5 2024', amount: 3200000, status: 'shipped', date: '17.12.2024' },
    { id: 'ORD-2405', customer: 'Дмитрий Волков', product: 'Комплект зимних шин', amount: 28000, status: 'processing', date: '16.12.2024' },
  ];

  const products: Product[] = [
    { id: 'PR-001', name: 'Toyota Camry 2024', category: 'auto', price: 2850000, stock: 5, status: 'active' },
    { id: 'PR-002', name: 'Mazda CX-5 2024', category: 'auto', price: 3200000, stock: 3, status: 'active' },
    { id: 'PR-003', name: 'ОСАГО Premium', category: 'insurance', price: 18500, stock: 999, status: 'active' },
    { id: 'PR-004', name: 'Моторное масло Mobil 5W-40', category: 'parts', price: 3200, stock: 150, status: 'active' },
    { id: 'PR-005', name: 'Комплект зимних шин R17', category: 'parts', price: 28000, stock: 42, status: 'active' },
  ];

  const partners: Partner[] = [
    { id: 'PT-001', name: 'ООО "АвтоПремиум"', type: 'Дилер', revenue: 12500000, orders: 45, status: 'active' },
    { id: 'PT-002', name: 'ИП Страховой Дом', type: 'Страховая', revenue: 3800000, orders: 201, status: 'active' },
    { id: 'PT-003', name: 'МегаАвто Запчасти', type: 'Поставщик', revenue: 5200000, orders: 312, status: 'active' },
    { id: 'PT-004', name: 'Новый Партнёр', type: 'Дилер', revenue: 0, orders: 0, status: 'pending' },
  ];

  const customers: Customer[] = [
    { id: 'CL-001', name: 'Иван Петров', email: 'ivan.petrov@mail.ru', phone: '+7 (999) 123-45-67', totalSpent: 8500000, ordersCount: 12, lastPurchase: '15.12.2024', status: 'vip', registrationDate: '15.01.2023' },
    { id: 'CL-002', name: 'Мария Сидорова', email: 'maria.s@gmail.com', phone: '+7 (999) 234-56-78', totalSpent: 3200000, ordersCount: 5, lastPurchase: '18.12.2024', status: 'active', registrationDate: '22.03.2023' },
    { id: 'CL-003', name: 'Алексей Козлов', email: 'alexey.k@yandex.ru', phone: '+7 (999) 345-67-89', totalSpent: 156000, ordersCount: 8, lastPurchase: '17.12.2024', status: 'active', registrationDate: '08.05.2024' },
    { id: 'CL-004', name: 'Ольга Новикова', email: 'olga.nova@mail.ru', phone: '+7 (999) 456-78-90', totalSpent: 5800000, ordersCount: 9, lastPurchase: '16.12.2024', status: 'vip', registrationDate: '11.02.2023' },
    { id: 'CL-005', name: 'Дмитрий Волков', email: 'dmitry.v@inbox.ru', phone: '+7 (999) 567-89-01', totalSpent: 1200000, ordersCount: 3, lastPurchase: '14.12.2024', status: 'active', registrationDate: '30.07.2024' },
    { id: 'CL-006', name: 'Анна Морозова', email: 'anna.m@gmail.com', phone: '+7 (999) 678-90-12', totalSpent: 42000, ordersCount: 1, lastPurchase: '18.12.2024', status: 'new', registrationDate: '18.12.2024' },
    { id: 'CL-007', name: 'Сергей Лебедев', email: 'sergey.leb@mail.ru', phone: '+7 (999) 789-01-23', totalSpent: 380000, ordersCount: 2, lastPurchase: '10.11.2024', status: 'inactive', registrationDate: '15.03.2024' },
    { id: 'CL-008', name: 'Елена Кузнецова', email: 'elena.k@yandex.ru', phone: '+7 (999) 890-12-34', totalSpent: 12500000, ordersCount: 18, lastPurchase: '17.12.2024', status: 'vip', registrationDate: '05.12.2022' },
  ];

  const getStatusBadge = (status: OrderStatus) => {
    const variants: Record<OrderStatus, { label: string; className: string }> = {
      new: { label: 'Новый', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      processing: { label: 'В работе', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      shipped: { label: 'Отправлен', className: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      delivered: { label: 'Доставлен', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
      cancelled: { label: 'Отменён', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    };
    return <Badge className={variants[status].className}>{variants[status].label}</Badge>;
  };

  const getCategoryBadge = (category: Product['category']) => {
    const variants = {
      auto: { label: 'Автомобиль', className: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      parts: { label: 'Запчасти', className: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
      insurance: { label: 'Страховка', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    };
    return <Badge className={variants[category].className}>{variants[category].label}</Badge>;
  };

  const getPartnerStatusBadge = (status: Partner['status']) => {
    const variants = {
      active: { label: 'Активен', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
      pending: { label: 'На проверке', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      blocked: { label: 'Заблокирован', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    };
    return <Badge className={variants[status].className}>{variants[status].label}</Badge>;
  };

  const getCustomerStatusBadge = (status: Customer['status']) => {
    const variants = {
      new: { label: 'Новый', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      active: { label: 'Активный', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
      vip: { label: 'VIP', className: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      inactive: { label: 'Неактивный', className: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
    };
    return <Badge className={variants[status].className}>{variants[status].label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Car" size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-lg text-sidebar-foreground">AutoMarket</h1>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
            { id: 'orders', label: 'Заказы', icon: 'ShoppingCart' },
            { id: 'products', label: 'Каталог', icon: 'Package' },
            { id: 'partners', label: 'Партнёры', icon: 'Users' },
            { id: 'customers', label: 'Клиенты', icon: 'UserCircle' },
            { id: 'finance', label: 'Финансы', icon: 'Wallet' },
            { id: 'analytics', label: 'Аналитика', icon: 'BarChart3' },
            { id: 'settings', label: 'Настройки', icon: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                {activeTab === 'dashboard' && 'Дашборд'}
                {activeTab === 'orders' && 'Управление заказами'}
                {activeTab === 'products' && 'Каталог товаров'}
                {activeTab === 'partners' && 'Партнёры'}
                {activeTab === 'customers' && 'Клиенты'}
                {activeTab === 'finance' && 'Финансы'}
                {activeTab === 'analytics' && 'Аналитика'}
                {activeTab === 'settings' && 'Настройки'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {activeTab === 'dashboard' && 'Обзор ключевых метрик'}
                {activeTab === 'orders' && 'Просмотр и управление заказами'}
                {activeTab === 'products' && 'Автомобили, запчасти и страховые продукты'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-card border-border"
                />
              </div>
              <Button variant="outline" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Icon name="User" size={20} className="text-primary-foreground" />
              </div>
            </div>
          </div>

          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-6 bg-card border-border hover-scale">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                        <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                        <div className="flex items-center gap-1 mt-2">
                          <Icon name={stat.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} className={stat.trend === 'up' ? 'text-green-400' : 'text-red-400'} />
                          <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        stat.trend === 'up' ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}>
                        <Icon name={stat.icon} size={24} className={stat.trend === 'up' ? 'text-green-400' : 'text-red-400'} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Последние заказы</h3>
                  <div className="space-y-3">
                    {orders.slice(0, 4).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{order.customer}</p>
                          <p className="text-sm text-muted-foreground">{order.product}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">{order.amount.toLocaleString('ru-RU')} ₽</p>
                          {getStatusBadge(order.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Топ товары</h3>
                  <div className="space-y-3">
                    {products.slice(0, 4).map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{product.name}</p>
                          {getCategoryBadge(product.category)}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">{product.price.toLocaleString('ru-RU')} ₽</p>
                          <p className="text-sm text-muted-foreground">Остаток: {product.stock}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48 bg-card border-border">
                    <SelectValue placeholder="Статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все статусы</SelectItem>
                    <SelectItem value="new">Новые</SelectItem>
                    <SelectItem value="processing">В работе</SelectItem>
                    <SelectItem value="shipped">Отправлены</SelectItem>
                    <SelectItem value="delivered">Доставлены</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать заказ
                </Button>
              </div>

              <Card className="bg-card border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground">ID</TableHead>
                      <TableHead className="text-muted-foreground">Клиент</TableHead>
                      <TableHead className="text-muted-foreground">Товар</TableHead>
                      <TableHead className="text-muted-foreground">Сумма</TableHead>
                      <TableHead className="text-muted-foreground">Статус</TableHead>
                      <TableHead className="text-muted-foreground">Дата</TableHead>
                      <TableHead className="text-muted-foreground">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="border-border">
                        <TableCell className="font-medium text-foreground">{order.id}</TableCell>
                        <TableCell className="text-foreground">{order.customer}</TableCell>
                        <TableCell className="text-foreground">{order.product}</TableCell>
                        <TableCell className="font-semibold text-foreground">{order.amount.toLocaleString('ru-RU')} ₽</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="text-muted-foreground">{order.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Icon name="Eye" size={18} />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Icon name="Edit" size={18} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6 animate-fade-in">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList className="bg-card border border-border">
                    <TabsTrigger value="all">Все товары</TabsTrigger>
                    <TabsTrigger value="auto">Автомобили</TabsTrigger>
                    <TabsTrigger value="parts">Запчасти</TabsTrigger>
                    <TabsTrigger value="insurance">Страховка</TabsTrigger>
                  </TabsList>
                  <Button>
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить товар
                  </Button>
                </div>

                <TabsContent value="all" className="mt-0">
                  <Card className="bg-card border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-border hover:bg-transparent">
                          <TableHead className="text-muted-foreground">ID</TableHead>
                          <TableHead className="text-muted-foreground">Название</TableHead>
                          <TableHead className="text-muted-foreground">Категория</TableHead>
                          <TableHead className="text-muted-foreground">Цена</TableHead>
                          <TableHead className="text-muted-foreground">Остаток</TableHead>
                          <TableHead className="text-muted-foreground">Статус</TableHead>
                          <TableHead className="text-muted-foreground">Действия</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products.map((product) => (
                          <TableRow key={product.id} className="border-border">
                            <TableCell className="font-medium text-foreground">{product.id}</TableCell>
                            <TableCell className="text-foreground">{product.name}</TableCell>
                            <TableCell>{getCategoryBadge(product.category)}</TableCell>
                            <TableCell className="font-semibold text-foreground">{product.price.toLocaleString('ru-RU')} ₽</TableCell>
                            <TableCell className="text-foreground">{product.stock}</TableCell>
                            <TableCell>
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Активен</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                  <Icon name="Eye" size={18} />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Icon name="Edit" size={18} />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Icon name="Trash2" size={18} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === 'partners' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить партнёра
                </Button>
              </div>

              <Card className="bg-card border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground">ID</TableHead>
                      <TableHead className="text-muted-foreground">Название</TableHead>
                      <TableHead className="text-muted-foreground">Тип</TableHead>
                      <TableHead className="text-muted-foreground">Доход</TableHead>
                      <TableHead className="text-muted-foreground">Заказы</TableHead>
                      <TableHead className="text-muted-foreground">Статус</TableHead>
                      <TableHead className="text-muted-foreground">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {partners.map((partner) => (
                      <TableRow key={partner.id} className="border-border">
                        <TableCell className="font-medium text-foreground">{partner.id}</TableCell>
                        <TableCell className="text-foreground">{partner.name}</TableCell>
                        <TableCell className="text-foreground">{partner.type}</TableCell>
                        <TableCell className="font-semibold text-foreground">{partner.revenue.toLocaleString('ru-RU')} ₽</TableCell>
                        <TableCell className="text-foreground">{partner.orders}</TableCell>
                        <TableCell>{getPartnerStatusBadge(partner.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Icon name="Eye" size={18} />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Icon name="Edit" size={18} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === 'finance' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-green-200 mb-1">Общий доход</p>
                      <h3 className="text-3xl font-bold text-green-100">₽42.8М</h3>
                      <p className="text-xs text-green-300 mt-2">За текущий месяц</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-green-500/30 flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-green-300" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-red-500/20 to-red-600/10 border-red-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-red-200 mb-1">Расходы</p>
                      <h3 className="text-3xl font-bold text-red-100">₽18.2М</h3>
                      <p className="text-xs text-red-300 mt-2">За текущий месяц</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-red-500/30 flex items-center justify-center">
                      <Icon name="TrendingDown" size={24} className="text-red-300" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-blue-200 mb-1">Чистая прибыль</p>
                      <h3 className="text-3xl font-bold text-blue-100">₽24.6М</h3>
                      <p className="text-xs text-blue-300 mt-2">+32% к прошлому</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/30 flex items-center justify-center">
                      <Icon name="DollarSign" size={24} className="text-blue-300" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-purple-200 mb-1">Средний чек</p>
                      <h3 className="text-3xl font-bold text-purple-100">₽186К</h3>
                      <p className="text-xs text-purple-300 mt-2">+8% к прошлому</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-purple-500/30 flex items-center justify-center">
                      <Icon name="Receipt" size={24} className="text-purple-300" />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Icon name="BarChart3" size={20} className="text-primary" />
                    Динамика дохода за неделю
                  </h3>
                  <div className="space-y-4">
                    {[
                      { day: 'Понедельник', amount: 5200000, percent: 85 },
                      { day: 'Вторник', amount: 6800000, percent: 100 },
                      { day: 'Среда', amount: 4500000, percent: 70 },
                      { day: 'Четверг', amount: 7200000, percent: 95 },
                      { day: 'Пятница', amount: 8100000, percent: 100 },
                      { day: 'Суббота', amount: 6200000, percent: 80 },
                      { day: 'Воскресенье', amount: 4800000, percent: 65 },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{item.day}</span>
                          <span className="font-semibold text-foreground">{(item.amount / 1000000).toFixed(1)}М ₽</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Icon name="Users" size={20} className="text-primary" />
                    Топ клиенты по выручке
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'ООО "Авто Альянс"', amount: 8500000, orders: 23 },
                      { name: 'ИП Транс-Авто', amount: 6200000, orders: 18 },
                      { name: 'МегаМоторс ООО', amount: 5800000, orders: 15 },
                      { name: 'ТК "Автолюкс"', amount: 4300000, orders: 12 },
                      { name: 'ООО "Драйв Холдинг"', amount: 3900000, orders: 10 },
                    ].map((client, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-scale">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{client.name}</p>
                            <p className="text-xs text-muted-foreground">{client.orders} заказов</p>
                          </div>
                        </div>
                        <p className="font-bold text-foreground">{(client.amount / 1000000).toFixed(1)}М ₽</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Icon name="ArrowLeftRight" size={20} className="text-primary" />
                  Последние транзакции
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground">Дата</TableHead>
                      <TableHead className="text-muted-foreground">Описание</TableHead>
                      <TableHead className="text-muted-foreground">Категория</TableHead>
                      <TableHead className="text-muted-foreground">Тип</TableHead>
                      <TableHead className="text-muted-foreground text-right">Сумма</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { date: '18.12.2024 14:23', desc: 'Продажа Toyota Camry', category: 'Продажи', type: 'income', amount: 2850000 },
                      { date: '18.12.2024 11:15', desc: 'Закупка запчастей', category: 'Снабжение', type: 'expense', amount: -185000 },
                      { date: '17.12.2024 16:42', desc: 'Страховка ОСАГО', category: 'Продажи', type: 'income', amount: 18500 },
                      { date: '17.12.2024 09:30', desc: 'Аренда склада', category: 'Операционные', type: 'expense', amount: -250000 },
                      { date: '16.12.2024 13:55', desc: 'Продажа Mazda CX-5', category: 'Продажи', type: 'income', amount: 3200000 },
                    ].map((tx, idx) => (
                      <TableRow key={idx} className="border-border">
                        <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                        <TableCell className="font-medium text-foreground">{tx.desc}</TableCell>
                        <TableCell>
                          <Badge className="bg-muted text-foreground border-border">{tx.category}</Badge>
                        </TableCell>
                        <TableCell>
                          {tx.type === 'income' ? (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Приход</Badge>
                          ) : (
                            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Расход</Badge>
                          )}
                        </TableCell>
                        <TableCell className={`text-right font-bold ${tx.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                          {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('ru-RU')} ₽
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Icon name="PieChart" size={20} className="text-primary" />
                    Продажи по категориям
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Автомобили', value: 68, amount: 28600000, color: 'from-purple-500 to-purple-600' },
                      { name: 'Запчасти', value: 22, amount: 9240000, color: 'from-orange-500 to-orange-600' },
                      { name: 'Страхование', value: 10, amount: 4200000, color: 'from-blue-500 to-blue-600' },
                    ].map((cat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${cat.color}`} />
                            <span className="text-sm font-medium text-foreground">{cat.name}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">{cat.value}%</p>
                            <p className="text-xs text-muted-foreground">{(cat.amount / 1000000).toFixed(1)}М ₽</p>
                          </div>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-500`}
                            style={{ width: `${cat.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Общая выручка</p>
                    <p className="text-2xl font-bold text-foreground">₽42.04М</p>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Воронка продаж
                  </h3>
                  <div className="space-y-3">
                    {[
                      { stage: 'Просмотры сайта', count: 8420, percent: 100, color: 'bg-blue-500' },
                      { stage: 'Заявки', count: 1684, percent: 20, color: 'bg-purple-500' },
                      { stage: 'Консультации', count: 842, percent: 10, color: 'bg-orange-500' },
                      { stage: 'Коммерческие предложения', count: 337, percent: 4, color: 'bg-yellow-500' },
                      { stage: 'Сделки', count: 168, percent: 2, color: 'bg-green-500' },
                    ].map((stage, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{stage.stage}</span>
                          <span className="text-sm text-muted-foreground">{stage.count} ({stage.percent}%)</span>
                        </div>
                        <div 
                          className={`h-10 ${stage.color} rounded-lg flex items-center justify-end px-4 transition-all duration-500 hover-scale`}
                          style={{ width: `${stage.percent}%`, minWidth: '120px' }}
                        >
                          <span className="text-white font-bold text-sm">{stage.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-sm text-green-300 mb-1">Конверсия</p>
                    <p className="text-2xl font-bold text-green-200">2.0%</p>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-card border-border hover-scale">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">Среднее время сделки</h3>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">12.5 дней</p>
                  <p className="text-sm text-muted-foreground">От заявки до покупки</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon name="TrendingDown" size={16} className="text-green-400" />
                    <span className="text-sm text-green-400 font-medium">-2 дня к прошлому месяцу</span>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover-scale">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Icon name="Percent" size={20} className="text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">Повторные покупки</h3>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">18%</p>
                  <p className="text-sm text-muted-foreground">Клиентов вернулись</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-green-400" />
                    <span className="text-sm text-green-400 font-medium">+5% к прошлому месяцу</span>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover-scale">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <Icon name="Star" size={20} className="text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">Средний рейтинг</h3>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">4.8 / 5.0</p>
                  <p className="text-sm text-muted-foreground">На основе 342 отзывов</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" size={16} className={star <= 4 ? "text-orange-400 fill-orange-400" : "text-orange-400"} />
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Icon name="Activity" size={20} className="text-primary" />
                  Тренды заказов по дням недели
                </h3>
                <div className="grid grid-cols-7 gap-2">
                  {[
                    { day: 'Пн', orders: 18, height: 60 },
                    { day: 'Вт', orders: 24, height: 80 },
                    { day: 'Ср', orders: 15, height: 50 },
                    { day: 'Чт', orders: 28, height: 95 },
                    { day: 'Пт', orders: 32, height: 100 },
                    { day: 'Сб', orders: 22, height: 70 },
                    { day: 'Вс', orders: 12, height: 40 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div className="w-full h-32 bg-muted/30 rounded-lg flex items-end justify-center p-2 relative group hover-scale">
                        <div 
                          className="w-full bg-gradient-to-t from-primary to-primary/50 rounded transition-all duration-500"
                          style={{ height: `${item.height}%` }}
                        />
                        <div className="absolute top-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs font-bold text-foreground bg-background/80 px-2 py-1 rounded">
                            {item.orders}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{item.day}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-card border-border col-span-2">
                  <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                    <Icon name="User" size={20} className="text-primary" />
                    Профиль администратора
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                        <Icon name="User" size={32} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <Button variant="outline" size="sm">
                          <Icon name="Upload" size={16} className="mr-2" />
                          Загрузить фото
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2">JPG, PNG до 2MB</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Имя</label>
                        <Input defaultValue="Александр" className="bg-muted/30 border-border" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Фамилия</label>
                        <Input defaultValue="Иванов" className="bg-muted/30 border-border" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input defaultValue="admin@automarket.ru" type="email" className="bg-muted/30 border-border" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Телефон</label>
                      <Input defaultValue="+7 (999) 123-45-67" className="bg-muted/30 border-border" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Должность</label>
                      <Select defaultValue="admin">
                        <SelectTrigger className="bg-muted/30 border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Главный администратор</SelectItem>
                          <SelectItem value="manager">Менеджер</SelectItem>
                          <SelectItem value="analyst">Аналитик</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button>
                        <Icon name="Save" size={16} className="mr-2" />
                        Сохранить изменения
                      </Button>
                      <Button variant="outline">Отменить</Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                    Безопасность
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="CheckCircle" size={18} className="text-green-400" />
                        <p className="text-sm font-medium text-green-200">Двухфакторная аутентификация</p>
                      </div>
                      <p className="text-xs text-green-300">Включена</p>
                    </div>

                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Key" size={16} className="mr-2" />
                      Сменить пароль
                    </Button>

                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Smartphone" size={16} className="mr-2" />
                      Активные сессии (3)
                    </Button>

                    <Button variant="outline" className="w-full justify-start text-red-400 border-red-500/30 hover:bg-red-500/10">
                      <Icon name="LogOut" size={16} className="mr-2" />
                      Выйти со всех устройств
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Последний вход</p>
                    <p className="text-sm font-medium text-foreground">18.12.2024, 09:15</p>
                    <p className="text-xs text-muted-foreground mt-1">IP: 192.168.1.105</p>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                    <Icon name="Bell" size={20} className="text-primary" />
                    Уведомления
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Email уведомления о новых заказах', checked: true },
                      { label: 'Push-уведомления о критичных событиях', checked: true },
                      { label: 'Еженедельный отчёт по продажам', checked: true },
                      { label: 'Уведомления об отзывах клиентов', checked: false },
                      { label: 'SMS при крупных сделках (>1М ₽)', checked: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-scale">
                        <label className="text-sm text-foreground cursor-pointer flex-1">{item.label}</label>
                        <div className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${item.checked ? 'bg-primary' : 'bg-muted'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${item.checked ? 'translate-x-5' : 'translate-x-0.5'} translate-y-0.5`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                    <Icon name="Plug" size={20} className="text-primary" />
                    Интеграции
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: '1С:Предприятие', status: 'connected', icon: 'Database' },
                      { name: 'Telegram Bot', status: 'connected', icon: 'MessageCircle' },
                      { name: 'Яндекс.Метрика', status: 'connected', icon: 'BarChart' },
                      { name: 'WhatsApp Business', status: 'disconnected', icon: 'MessageSquare' },
                      { name: 'Bitrix24 CRM', status: 'disconnected', icon: 'Users' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover-scale">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.status === 'connected' ? 'bg-green-500/20' : 'bg-muted'}`}>
                            <Icon name={item.icon} size={20} className={item.status === 'connected' ? 'text-green-400' : 'text-muted-foreground'} />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.status === 'connected' ? 'Подключено' : 'Не подключено'}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          {item.status === 'connected' ? 'Настроить' : 'Подключить'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Icon name="Settings" size={20} className="text-primary" />
                  Общие настройки системы
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Часовой пояс</label>
                    <Select defaultValue="msk">
                      <SelectTrigger className="bg-muted/30 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="msk">Москва (UTC+3)</SelectItem>
                        <SelectItem value="spb">Санкт-Петербург (UTC+3)</SelectItem>
                        <SelectItem value="ekb">Екатеринбург (UTC+5)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Язык интерфейса</label>
                    <Select defaultValue="ru">
                      <SelectTrigger className="bg-muted/30 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ru">Русский</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Валюта по умолчанию</label>
                    <Select defaultValue="rub">
                      <SelectTrigger className="bg-muted/30 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rub">₽ Рубль</SelectItem>
                        <SelectItem value="usd">$ Доллар</SelectItem>
                        <SelectItem value="eur">€ Евро</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Формат даты</label>
                    <Select defaultValue="dd.mm.yyyy">
                      <SelectTrigger className="bg-muted/30 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd.mm.yyyy">ДД.ММ.ГГГГ</SelectItem>
                        <SelectItem value="mm/dd/yyyy">ММ/ДД/ГГГГ</SelectItem>
                        <SelectItem value="yyyy-mm-dd">ГГГГ-ММ-ДД</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-blue-200 mb-1">Новые клиенты</p>
                      <h3 className="text-3xl font-bold text-blue-100">
                        {customers.filter(c => c.status === 'new').length}
                      </h3>
                      <p className="text-xs text-blue-300 mt-2">За последний месяц</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/30 flex items-center justify-center">
                      <Icon name="UserPlus" size={24} className="text-blue-300" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-green-200 mb-1">Активные клиенты</p>
                      <h3 className="text-3xl font-bold text-green-100">
                        {customers.filter(c => c.status === 'active').length}
                      </h3>
                      <p className="text-xs text-green-300 mt-2">Совершают покупки</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-green-500/30 flex items-center justify-center">
                      <Icon name="UserCheck" size={24} className="text-green-300" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-purple-200 mb-1">VIP клиенты</p>
                      <h3 className="text-3xl font-bold text-purple-100">
                        {customers.filter(c => c.status === 'vip').length}
                      </h3>
                      <p className="text-xs text-purple-300 mt-2">Более 5М ₽</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-purple-500/30 flex items-center justify-center">
                      <Icon name="Crown" size={24} className="text-purple-300" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-orange-500/30 hover-scale">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-orange-200 mb-1">Всего клиентов</p>
                      <h3 className="text-3xl font-bold text-orange-100">{customers.length}</h3>
                      <p className="text-xs text-orange-300 mt-2">В базе данных</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-orange-500/30 flex items-center justify-center">
                      <Icon name="Users" size={24} className="text-orange-300" />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48 bg-card border-border">
                    <SelectValue placeholder="Статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все клиенты</SelectItem>
                    <SelectItem value="new">Новые</SelectItem>
                    <SelectItem value="active">Активные</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="inactive">Неактивные</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить клиента
                </Button>
              </div>

              <Card className="bg-card border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground">ID</TableHead>
                      <TableHead className="text-muted-foreground">Клиент</TableHead>
                      <TableHead className="text-muted-foreground">Контакты</TableHead>
                      <TableHead className="text-muted-foreground">Потрачено</TableHead>
                      <TableHead className="text-muted-foreground">Заказов</TableHead>
                      <TableHead className="text-muted-foreground">Последняя покупка</TableHead>
                      <TableHead className="text-muted-foreground">Статус</TableHead>
                      <TableHead className="text-muted-foreground">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id} className="border-border">
                        <TableCell className="font-medium text-foreground">{customer.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-foreground">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">Регистрация: {customer.registrationDate}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Icon name="Mail" size={14} className="text-muted-foreground" />
                              <span className="text-xs text-foreground">{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Phone" size={14} className="text-muted-foreground" />
                              <span className="text-xs text-foreground">{customer.phone}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold text-foreground">
                          {customer.totalSpent >= 1000000 
                            ? `${(customer.totalSpent / 1000000).toFixed(1)}М ₽`
                            : `${(customer.totalSpent / 1000).toFixed(0)}К ₽`
                          }
                        </TableCell>
                        <TableCell className="text-foreground">{customer.ordersCount}</TableCell>
                        <TableCell className="text-muted-foreground">{customer.lastPurchase}</TableCell>
                        <TableCell>{getCustomerStatusBadge(customer.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Icon name="Eye" size={18} />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Icon name="MessageCircle" size={18} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Топ клиенты по выручке
                  </h3>
                  <div className="space-y-3">
                    {customers
                      .sort((a, b) => b.totalSpent - a.totalSpent)
                      .slice(0, 5)
                      .map((customer, idx) => (
                        <div key={customer.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-scale">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              {idx + 1}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{customer.name}</p>
                              <p className="text-xs text-muted-foreground">{customer.ordersCount} заказов</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">
                              {customer.totalSpent >= 1000000 
                                ? `${(customer.totalSpent / 1000000).toFixed(1)}М ₽`
                                : `${(customer.totalSpent / 1000).toFixed(0)}К ₽`
                              }
                            </p>
                            {getCustomerStatusBadge(customer.status)}
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    Регистрации за последние 6 месяцев
                  </h3>
                  <div className="space-y-4">
                    {[
                      { month: 'Июль', count: 12, growth: '+8%' },
                      { month: 'Август', count: 15, growth: '+25%' },
                      { month: 'Сентябрь', count: 18, growth: '+20%' },
                      { month: 'Октябрь', count: 22, growth: '+22%' },
                      { month: 'Ноябрь', count: 28, growth: '+27%' },
                      { month: 'Декабрь', count: 35, growth: '+25%' },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{item.month}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{item.count}</span>
                            <span className="text-xs text-green-400">{item.growth}</span>
                          </div>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-500"
                            style={{ width: `${(item.count / 35) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-card border-border hover-scale">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Icon name="DollarSign" size={20} className="text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">Средний чек</h3>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">₽186К</p>
                  <p className="text-sm text-muted-foreground">На одного клиента</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-green-400" />
                    <span className="text-sm text-green-400 font-medium">+12% к прошлому месяцу</span>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover-scale">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Icon name="Repeat" size={20} className="text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">LTV (пожизненная ценность)</h3>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">₽3.2М</p>
                  <p className="text-sm text-muted-foreground">Средний доход с клиента</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-green-400" />
                    <span className="text-sm text-green-400 font-medium">+18% к прошлому году</span>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover-scale">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <Icon name="Target" size={20} className="text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">Retention Rate</h3>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">68%</p>
                  <p className="text-sm text-muted-foreground">Клиентов возвращаются</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-green-400" />
                    <span className="text-sm text-green-400 font-medium">+5% к прошлому месяцу</span>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;