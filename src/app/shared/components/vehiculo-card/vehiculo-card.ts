import { Component, input, output } from '@angular/core';
import { Vehiculo } from '../../../core/models/vehiculo.model';

@Component({
  selector: 'app-vehiculo-card',
  standalone: true,
  templateUrl: './vehiculo-card.html',
  styleUrl: './vehiculo-card.scss'
})
export class VehiculoCard {
  vehiculo = input.required<Vehiculo>();
  verFicha = output<Vehiculo>();

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/600x400/004225/f8f5ee?text=Classic+Motor+Club';
  }
}