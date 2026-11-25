import { Component, signal, computed, inject } from '@angular/core';
import { VehiculosService } from '../../core/services/vehiculos';
import { Vehiculo, CategoriaVehiculo } from '../../core/models/vehiculo.model';
import { VehiculoCard } from '../../shared/components/vehiculo-card/vehiculo-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [VehiculoCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class Catalogo {
  private vehiculosService = inject(VehiculosService);

  readonly categorias: ('TODAS' | CategoriaVehiculo)[] = [
    'TODAS',
    'Pre-65',
    'Gran Turismo',
    'Sport Clásico',
    'Popular Histórico'
  ];

  // Signals de estado local
  vehiculos = signal<Vehiculo[]>([]);
  categoriaActiva = signal<'TODAS' | CategoriaVehiculo>('TODAS');
  busquedaTexto = signal<string>('');
  vehiculoSeleccionado = signal<Vehiculo | null>(null);

  // Signal computada: se recalcula automáticamente en tiempo real
  vehiculosFiltrados = computed(() => {
    const categoria = this.categoriaActiva();
    const termino = this.busquedaTexto().toLowerCase().trim();

    return this.vehiculos().filter(v => {
      const cumpleCategoria = categoria === 'TODAS' || v.categoria === categoria;
      const cumpleBusqueda =
        v.marca.toLowerCase().includes(termino) ||
        v.modelo.toLowerCase().includes(termino) ||
        v.anio.toString().includes(termino) ||
        v.dorsal.includes(termino);

      return cumpleCategoria && cumpleBusqueda;
    });
  });

  constructor() {
    this.vehiculosService.getVehiculos().subscribe(datos => {
      this.vehiculos.set(datos);
    });
  }

  seleccionarCategoria(cat: 'TODAS' | CategoriaVehiculo): void {
    this.categoriaActiva.set(cat);
  }

  actualizarBusqueda(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.busquedaTexto.set(input.value);
  }

  limpiarFiltros(): void {
    this.categoriaActiva.set('TODAS');
    this.busquedaTexto.set('');
  }

  abrirFicha(vehiculo: Vehiculo): void {
    this.vehiculoSeleccionado.set(vehiculo);
  }

  cerrarFicha(): void {
    this.vehiculoSeleccionado.set(null);
  }
}