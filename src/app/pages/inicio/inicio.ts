import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VehiculosService } from '../../core/services/vehiculos';
import { Vehiculo } from '../../core/models/vehiculo.model';
import { VehiculoCard } from '../../shared/components/vehiculo-card/vehiculo-card';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, VehiculoCard],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
  private vehiculosService = inject(VehiculosService);

  vehiculos = signal<Vehiculo[]>([]);
  vehiculoSeleccionado = signal<Vehiculo | null>(null);

  destacados = computed(() =>
    this.vehiculos().filter(v => v.destacado)
  );

  constructor() {
    this.vehiculosService.getVehiculos().subscribe(datos => {
      this.vehiculos.set(datos);
    });
  }

  abrirFicha(vehiculo: Vehiculo): void {
    this.vehiculoSeleccionado.set(vehiculo);
  }

  cerrarFicha(): void {
    this.vehiculoSeleccionado.set(null);
  }
}