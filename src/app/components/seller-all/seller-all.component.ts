import { Component, OnInit } from '@angular/core';
import { VendedorServiceAll } from '../../services/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './seller-all.component.html',
  styleUrls: ['./seller-all.component.css'],
})
export class SellerAllComponent implements OnInit {
  vendedores: any[] = [];
  idVendedorActualizar: number | null = null;
  idVendedorEliminar: number | null = null;
  nuevoVendedor = {
    nombre: '',
    apellido: '',
    nit: ''
  };

  constructor(private vendedorServiceAll: VendedorServiceAll) {}

  ngOnInit(): void {
    this.cargarVendedores();
  }

  cargarVendedores(): void {
    this.vendedorServiceAll.obtenerTodos().subscribe({
      next: (data) => {
        this.vendedores = data;
      },
      error: (err) => {
        console.error('Error al cargar los vendedores:', err);
      }
    });
  }
  

  actualizarVendedor(id: number | null): void {
    if (id === null) {
      console.error('El ID del vendedor no puede ser nulo');
      return;
    }
  
    const vendedorParaEnviar = {
      name_seller: this.nuevoVendedor.nombre,
      lastname: this.nuevoVendedor.apellido,
      nit_seller: this.nuevoVendedor.nit
    };
  
    console.log('Datos a enviar para actualizar:', vendedorParaEnviar);
  
    this.vendedorServiceAll.actualizar(id, vendedorParaEnviar).subscribe(() => {
      this.cargarVendedores();
      this.nuevoVendedor = { nombre: '', apellido: '', nit: '' };
      this.idVendedorActualizar = null;
    });
  }
  

  eliminarVendedorPorId(): void {
    if (this.idVendedorEliminar !== null) {
      this.vendedorServiceAll.eliminar(this.idVendedorEliminar).subscribe({
        next: () => {
          console.log(`Vendedor con ID ${this.idVendedorEliminar} eliminado`);
          this.cargarVendedores();  // Recarga la lista de vendedores
          this.idVendedorEliminar = null;  // Resetea el campo
        },
        error: (err) => {
          console.error('Error al eliminar el vendedor:', err);
        }
      });
    }
  }
}
