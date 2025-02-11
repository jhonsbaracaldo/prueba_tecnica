import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductALLComponent implements OnInit {
  productos: any[] = [];
  idProductoActualizar: number | null = null;
  idProductoEliminar: number | null = null;
  nuevoProducto = {
    nameproduct: '',
    description: '',
    amount: 0,
    weigth: 0,
    prices: 0
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerTodos().subscribe({
      next: (data) => {
        this.productos = data;  // Asignación directa de datos
      },
      error: (err) => {
        console.error('Error al cargar los productos:', err);
      }
    });
  }

  actualizarProducto(id: number | null): void {
    if (id === null) {
      console.error('El ID del producto no puede ser nulo');
      return;
    }

    const productoParaEnviar = {
      nameproduct: this.nuevoProducto.nameproduct,
      description: this.nuevoProducto.description,
      amount: this.nuevoProducto.amount,
      weigth: this.nuevoProducto.weigth,
      prices: this.nuevoProducto.prices
    };

    console.log('Datos a enviar para actualizar:', productoParaEnviar);

    this.productoService.actualizar(id, productoParaEnviar).subscribe({
      next: () => {
        console.log('Producto actualizado correctamente');
        this.cargarProductos();
        this.nuevoProducto = { nameproduct: '', description: '', amount: 0, weigth: 0, prices: 0 };
        this.idProductoActualizar = null;
      },
      error: (err) => {
        console.error('Error al actualizar el producto:', err);
      }
    });
  }

  eliminarProductoPorId(): void {
    console.log('ID del producto a eliminar:', this.idProductoEliminar);  
    if (this.idProductoEliminar !== null && this.idProductoEliminar !== undefined) {
      this.productoService.eliminar(this.idProductoEliminar).subscribe({
        next: () => {
          console.log(`Producto con ID ${this.idProductoEliminar} eliminado`);
          this.cargarProductos();  
          this.idProductoEliminar = null;  // Resetea el campo
        },
        error: (err) => {
          console.error('Error al eliminar el producto:', err);
        }
      });
    } else {
      console.error('El ID del producto no puede ser nulo o indefinido para eliminar');
    }
  }
}
