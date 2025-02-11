import { Component, OnInit } from '@angular/core';
import { VendedorServiceAll } from '../../services/venta.service';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
    venta = {
        id_seller: null,
        id_product: null,
        amount: null,
        date: null,
        price: null
    };

    productos: any[] = [];
    productoSeleccionado: any = null;
    ventaRealizada: any = null;
    mostrarPopup: boolean = false;

    constructor(private vendedorService: VendedorServiceAll, private productoService: ProductoService) { }

    ngOnInit(): void {
        this.cargarProductos();
    }

    cargarProductos() {
        this.productoService.obtenerTodos().subscribe({
            next: (productos) => {
                this.productos = productos;
            },
            error: (error) => {
                console.error('Error al cargar los productos:', error);
            }
        });
    }

    seleccionarProducto(producto: any) {
        this.productoSeleccionado = producto;
        this.venta.id_product = producto.id_product;
        this.venta.price = producto.prices;
    }

    guardarVenta() {
        if (this.venta.id_seller && this.venta.id_product && this.venta.amount && this.venta.date && this.venta.price) {
            this.vendedorService.guardar(this.venta).subscribe({
                next: (response) => {
                    console.log('Venta guardada exitosamente:', response);
                    const productoSeleccionado = this.productos.find(p => p.id_product === this.venta.id_product);

                    this.ventaRealizada = {
                        producto: productoSeleccionado ? productoSeleccionado.nameproduct : 'Nombre no encontrado',
                        cantidad: this.venta.amount,
                        precio: this.venta.price,
                        fecha: this.venta.date,
                        total: response.total // Obtén el total desde la respuesta del backend
                    };

                    this.mostrarPopup = true;
                    this.limpiarFormulario();
                },
                error: (error) => {
                    console.error('Error al guardar la venta:', error);
                    alert('Error al guardar la venta');
                }
            });
        } else {
            alert('Por favor, completa todos los campos.');
        }
    }

    
    

    cerrarPopup() {
        this.mostrarPopup = false;
    }

    limpiarFormulario() {
        this.venta = {
            id_seller: null,
            id_product: null,
            amount: null,
            date: null,
            price: null
        };
        this.productoSeleccionado = null;
    }
}