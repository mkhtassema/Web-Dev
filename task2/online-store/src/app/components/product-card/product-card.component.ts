import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;
  selectedImage!: string;

  ngOnInit(): void {
    this.selectedImage = this.product.images[0];
  }

  selectImage(img: string): void {
    this.selectedImage = img;
  }

  shareTelegram(product: Product): void {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  shareWhatsApp(product: Product): void {
    const text = encodeURIComponent(`Check this product: ${product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

}
