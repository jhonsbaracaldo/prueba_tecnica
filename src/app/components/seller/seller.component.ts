import { Component, OnInit } from '@angular/core';
import { VendedorServiceAll } from '../../services/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class VendedorComponent implements OnInit {
  vendedores: any[] = [];
  nuevoVendedor = {
  nombre: '',
  apellido: '',
    nit: ''
  };

  constructor(private VendedorServiceAll: VendedorServiceAll) {}

  ngOnInit(): void {
    this.cargarVendedores();
  }

  cargarVendedores(): void {
    this.VendedorServiceAll.obtenerTodos().subscribe((data) => {
      this.vendedores = data;
    });
  }

  guardarVendedor(): void {
    const vendedorParaEnviar = {
      name_seller: this.nuevoVendedor.nombre,
      lastname: this.nuevoVendedor.apellido,
      nit_seller: this.nuevoVendedor.nit
    };
  
    console.log('guardar:', vendedorParaEnviar);
  
    this.VendedorServiceAll.guardar(vendedorParaEnviar).subscribe(() => {
      this.cargarVendedores();
      this.nuevoVendedor = { nombre: '', apellido: '', nit: '' };
    });
  }

  
}
