import { Component, OnInit } from '@angular/core';
import { VendedorServiceAll } from '../../services/venta.service'; 

@Component({
  selector: 'app-sale-all',
  templateUrl: './sale-all.component.html',
  styleUrls: ['./sale-all.component.css']
})
export class SaleAllComponent implements OnInit {

  ventas: any[] = []; // Tipo any[]

  constructor(private vendedorService: VendedorServiceAll) {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas() {
    this.vendedorService.obtenerTodos().subscribe({
      next: (ventas) => {
        this.ventas = ventas;
        console.log("Ventas obtenidas:", this.ventas);
      },
      error: (error) => {
        console.error('Error al obtener las ventas:', error);
      }
    });
  }
}