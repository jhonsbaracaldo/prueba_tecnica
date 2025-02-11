import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductoComponent implements OnInit {
  productos: any[] = [];
  nuevoProducto = {
    nameproduct: '',
    description: '',
    amount: '',
    weigth: '',
    price :''
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerTodos().subscribe((data) => {
      this.productos = data;
    });
  }

  guardarProducto(): void {
    const productoParaEnviar = { ...this.nuevoProducto };

    this.productoService.guardar(productoParaEnviar).subscribe(() => {
      this.cargarProductos();
      this.nuevoProducto = { nameproduct: '', description: '', amount: '', weigth: '' , price: ''};
    });
  }  

}
