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

          {(activeTab === 'customers' || activeTab === 'finance' || activeTab === 'analytics' || activeTab === 'settings') && (
            <div className="animate-fade-in">
              <Card className="p-12 bg-card border-border text-center">
                <Icon name="Construction" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Раздел в разработке</h3>
                <p className="text-muted-foreground">Этот функционал будет доступен в следующей версии</p>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;