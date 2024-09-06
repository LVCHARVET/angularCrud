import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { ProductInterface } from '../interfaces/product.interface';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-product-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-get.component.html',
  styleUrl: './product-get.component.css',
})

export class ProductGetComponent {

  products: ProductInterface[] = [];
  productIdToDelete: string | null = null;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsService.loadProducts().subscribe({
      next: (products) => {
        console.log('liste des produits chargées avec succès: ', products);
        this.products = products;
      },
      error: (error) => {
        console.error(`Erreur lors de la récupération de la liste des produits :`, error);
      },
    });
  }

  editProduct(id: string) {
    this.router.navigate(['/edit', id]);
  }

  handleDeleteProduct() {
    if (this.productIdToDelete) {
      this.productsService.deleteProduct(this.productIdToDelete).subscribe({
        next: (product) => {
          console.log('Produit supprimé avec succès: ', product);
          this.products = this.products.filter((p) => p.id !== this.productIdToDelete);
          this.productIdToDelete = null;
        },
        error: (error) => {
          console.error('Erreur lors de la suppression du produit :', error);
        }
      });
    }
  }

  handleConfirmDelete(id: string) {
    this.productIdToDelete = id;
    const modalElement = document.getElementById('confirmDeleteModal')!;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  handleCancelDelete() {
    this.productIdToDelete = null;
  }
}
