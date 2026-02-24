import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  categories = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  selectedCategoryId: number | null = null;

  products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Samsung Galaxy S24',
      description: 'Powerful Samsung smartphone',
      price: 478990,
      rating: 4,
      image: 'https://gadgetstore.kz/wa-data/public/shop/products/61/09/961/images/2725/2725.970.jpg',
      images: [],
      link: 'https://kaspi.kz/',
      likes: 0
    },
    {
      id: 2,
      categoryId: 1,
      name: 'iPhone 15',
      description: 'Apple smartphone',
      price: 506990,
      rating: 5,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/200/200/1fb1dc37be4292afac59b900a3357606/ec51be7853fb090c5d8472fd17ece079c841d967723d8f0d587f17b80b4acbc2.jpg',
      images: [],
      link: 'https://kaspi.kz/',
      likes: 0
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Xiaomi Redmi Note 12',
      description: 'Xiaomi phone',
      price: 164990,
      rating: 4,
      image: 'https://sanmi.kz/upload/iblock/866/redmi-note-12-6-128gb-ice-blue-109619135-1.jpg',
      images: [],
      link: 'https://kaspi.kz/',
      likes: 0
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Google Pixel 8',
      description: 'Google smartphone',
      price: 399990,
      rating: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1K5jisjjcdc0xBaC8Tlwtzb7PfPKedSvaw&s',
      images: [],
      link: 'https://kaspi.kz/',
      likes: 0
    },
    {
      id: 5,
      categoryId: 1,
      name: 'OnePlus 11',
      description: 'OnePlus flagship',
      price: 289990,
      rating: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkd1WHkkX83FcCfGdRYkgilVmp6oHBizbeQ&s',
      images: [],
      link: 'https://kaspi.kz/',
      likes: 0
    },

    // LAPTOPS
    { id: 6, categoryId: 2, name: 'MacBook Air M2', description: 'Apple laptop', price: 515990, rating: 5, image: 'https://gadgetstore.kz/wa-data/public/shop/products/71/06/671/images/2167/2167.970.jpg', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 7, categoryId: 2, name: 'ASUS ROG', description: 'Gaming laptop', price: 699990, rating: 5, image: 'https://itmag.kz/upload/iblock/8/42/product_image_115642_1343413.jpg', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 8, categoryId: 2, name: 'HP Pavilion', description: 'HP laptop', price: 399990, rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3P3bpasbo70MpeLNRsa5vRRLI1m0d_x4Hg&s', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 9, categoryId: 2, name: 'Lenovo ThinkPad', description: 'Business laptop', price: 459990, rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnPP6VZji-JsEpbStxA6dH8eJI0KzO5sQrg&s', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 10, categoryId: 2, name: 'Acer Nitro', description: 'Gaming laptop', price: 489990, rating: 4, image: 'https://m.media-amazon.com/images/I/71sgAr9atBS._AC_SL1500_.jpg', images: [], link: 'https://kaspi.kz/', likes: 0 },

    // HEADPHONES
    { id: 11, categoryId: 3, name: 'AirPods Pro 2', description: 'Apple earbuds', price: 99990, rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASHGdXMXIerI-1nWWHcRm7FEo9H1_1HSphQ&s', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 12, categoryId: 3, name: 'Sony WH-1000XM5', description: 'Sony headphones', price: 149990, rating: 5, image: 'https://sonycenter.kz/image/cache/catalog/products/new_img/audio/wh1000xm5/naushniki-sony-wh1000xm5-06-600x600.png', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 13, categoryId: 3, name: 'Xiaomi Buds 4', description: 'Xiaomi earbuds', price: 7990, rating: 4, image: 'https://e-katalog.kz/jpg_zoom1/2509103.jpg', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 14, categoryId: 3, name: 'JBL Tune 510BT', description: 'JBL headphones', price: 29990, rating: 4, image: 'https://images.satu.kz/175914247_w700_h500_naushniki-jbl-tune.jpg', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 15, categoryId: 3, name: 'Marshall Major IV', description: 'Marshall headphones', price: 89990, rating: 4, image: 'https://pi.mdev.kz/44a79018-7d98-4cdf-aee5-79ddc5a66577', images: [], link: 'https://kaspi.kz/', likes: 0 },

    // TABLETS
    { id: 16, categoryId: 4, name: 'iPad 10.9', description: 'Apple tablet', price: 249990, rating: 4, image: 'https://api.technodom.kz/f3/api/v1/images/800/800/286899_1.jpg', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 17, categoryId: 4, name: 'Samsung Tab S9', description: 'Samsung tablet', price: 329990, rating: 4, image: 'https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-x916bzaeskz/gallery/kz-ru-galaxy-tab-s9-ultra-5g-x916-469928-sm-x916bzaeskz-539304067?$Q90_1248_936_F_PNG$', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 18, categoryId: 4, name: 'Lenovo Tab P11', description: 'Lenovo tablet', price: 199990, rating: 4, image: 'https://object.pscloud.io/cms/cms/Photo/img_0_64_946_0_6_RMXFNR.webp', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 19, categoryId: 4, name: 'Huawei MatePad', description: 'Huawei tablet', price: 189990, rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pG5ofVaG3hjHzO9js3tIInJKaLFIaJtPpg&s', images: [], link: 'https://kaspi.kz/', likes: 0 },
    { id: 20, categoryId: 4, name: 'Xiaomi Pad 6', description: 'Xiaomi tablet', price: 179990, rating: 4, image: 'https://e-katalog.kz/jpg_zoom1/2429056.jpg', images: [], link: 'https://kaspi.kz/', likes: 0 },
  ];

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  handleDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
