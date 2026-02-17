import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 5G 8 ГБ/256 ГБ',
      description: 'Смартфон Samsung с отличной камерой и производительностью',
      price: 478990,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/h69/11604086390270/samsung-galaxy-s24-5g-256-gb-cernyj-116040863-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=1',
        'https://picsum.photos/300/200?random=2',
        'https://picsum.photos/300/200?random=3'
      ],

      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-cernyj-116040863/'
    },
    {
      id: 2,
      name: 'iPhone 15 128 ГБ',
      description: 'Apple iPhone 15 – мощный смартфон с отличной камерой',
      price: 506990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/h70/63048418019966/apple-iphone-15-128gb-cernyj-104113080-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=4',
        'https://picsum.photos/300/200?random=5',
        'https://picsum.photos/300/200?random=6'
      ],

      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-cernyj-104113080/'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12 Pro 8/256 ГБ',
      description: 'Смартфон Xiaomi с мощной батареей и камерой',
      price: 164990,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h62/66937579386878/xiaomi-redmi-note-12-pro-8-gb-256-gb-grafitovyj-106817258-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=7',
        'https://picsum.photos/300/200?random=8',
        'https://picsum.photos/300/200?random=9'
      ],

      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-8-gb-256-gb-grafitovyj-106817258/'
    },
    {
      id: 4,
      name: 'MacBook Air 13 M2 256 ГБ',
      description: 'Ноутбук Apple MacBook Air M2 – мощь и легкость',
      price: 515990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h32/h7c/69732077818302/apple-macbook-air-m2-256gb-silver-105641457-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=10',
        'https://picsum.photos/300/200?random=11',
        'https://picsum.photos/300/200?random=12'
      ],

      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-256-gb-silver-105641457/'
    },
    {
      id: 5,
      name: 'PlayStation 5 с дисководом',
      description: 'Игровая приставка Sony PlayStation 5 с дисководом',
      price: 289990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h1b/48929179627134/sony-playstation-5-825-gb-s-cernyim-diskovodom-117251876-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=13',
        'https://picsum.photos/300/200?random=14',
        'https://picsum.photos/300/200?random=15'
      ],

      link: 'https://kaspi.kz/shop/p/sony-playstation-5-825-gb-s-cernyim-diskovodom-117251876/'
    },
    {
      id: 6,
      name: 'Apple Watch Series 9 45 мм',
      description: 'Смарт-часы Apple Watch Series 9 45 мм',
      price: 189990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/hf6/67739334427678/apple-watch-series-9-45-mm-chernyj-117220021-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=16',
        'https://picsum.photos/300/200?random=17',
        'https://picsum.photos/300/200?random=18'
      ],

      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-chernyj-117220021/'
    },
    {
      id: 7,
      name: 'AirPods Pro 2',
      description: 'Беспроводные наушники Apple AirPods Pro 2',
      price: 99990,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h4c/67155026980894/apple-airpods-pro-2-s-nakopitelnym-korobkom-106815693-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=19',
        'https://picsum.photos/300/200?random=20',
        'https://picsum.photos/300/200?random=21'
      ],

      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-s-nakopitelnym-korobkom-106815693/'
    },
    {
      id: 8,
      name: 'Xiaomi Redmi Buds 4',
      description: 'Беспроводные наушники Xiaomi Redmi Buds 4',
      price: 7990,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/hd8/66931763009086/xiaomi-redmi-buds-4-chernyj-106794200-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=22',
        'https://picsum.photos/300/200?random=23',
        'https://picsum.photos/300/200?random=24'
      ],

      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-4-chernyj-106794200/'
    },
    {
      id: 9,
      name: 'Dyson V15 Detect',
      description: 'Пылесос Dyson V15 Detect Absolute',
      price: 319990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h1e/49924463690782/dyson-v15-detect-absolute-bagrobbles-109876124-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=1',
        'https://picsum.photos/300/200?random=11',
        'https://picsum.photos/300/200?random=21'
      ],

      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-bagrobbles-109876124/'
    },
    {
      id: 10,
      name: 'Apple iPad 10.9"',
      description: 'Планшет Apple iPad 10.9" 64 ГБ',
      price: 249990,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h55/66022752671294/apple-ipad-10-9-64-gb-cernyj-104324587-1.jpg',
      images: [
        'https://picsum.photos/300/200?random=43',
        'https://picsum.photos/300/200?random=56',
        'https://picsum.photos/300/200?random=34'
      ],

      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-64-gb-cernyj-104324587/'
    }
  ];
}

