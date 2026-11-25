import { Component, signal } from '@angular/core';
import { VehiculoCard } from '../../shared/components/vehiculo-card/vehiculo-card';
import { Vehiculo } from '../../core/models/vehiculo.model';

interface ColorToken {
  nombre: string;
  variable: string;
  hex: string;
  uso: string;
  textoClaro: boolean;
}

@Component({
  selector: 'app-guia-estilo',
  standalone: true,
  imports: [VehiculoCard],
  templateUrl: './guia-estilo.html',
  styleUrl: './guia-estilo.scss'
})
export class GuiaEstilo {
  colorCopiado = signal<string | null>(null);

  readonly paleta: ColorToken[] = [
    {
      nombre: 'British Racing Green',
      variable: '$color-racing-green',
      hex: '#004225',
      uso: 'Color primario, cabeceras, títulos y navegación principal',
      textoClaro: true
    },
    {
      nombre: 'Burdeos Clásico',
      variable: '$color-burgundy',
      hex: '#6b1d2f',
      uso: 'Acento secundario, llamadas a la acción (CTA) y tramos cronometrados',
      textoClaro: true
    },
    {
      nombre: 'Cuero Envejecido',
      variable: '$color-leather',
      hex: '#8b5a2b',
      uso: 'Detalles decorativos, metadatos técnicos y anillo de foco (:focus-visible)',
      textoClaro: true
    },
    {
      nombre: 'Papel Pergamino',
      variable: '$color-cream',
      hex: '#f8f5ee',
      uso: 'Fondo general de página e inputs de formulario',
      textoClaro: false
    },
    {
      nombre: 'Cromado Metálico',
      variable: '$color-chrome',
      hex: '#cfd4da',
      uso: 'Bordes de tarjetas, divisores y detalles de carrocería',
      textoClaro: false
    },
    {
      nombre: 'Carbón Antracita',
      variable: '$color-charcoal',
      hex: '#1e2022',
      uso: 'Texto principal de lectura (contraste WCAG AAA) y pie de página',
      textoClaro: true
    }
  ];

  readonly vehiculoMuestra: Vehiculo = {
    id: 99,
    dorsal: '00',
    marca: 'Aston Martin',
    modelo: 'DB5 Vantage',
    anio: 1964,
    categoria: 'Gran Turismo',
    potencia: '282 CV',
    cilindrada: '3.995 cc · 6 cilindros',
    piloto: 'Comisario Técnico',
    copiloto: 'Classic Motor Club',
    destacado: true,
    imagen: 'img/aston-db4.jpg',
    descripcionCorta: 'Componente de muestra reutilizando la clase BEM .vehiculo-card.',
    historial: 'Unidad de exhibición para verificación de tokens visuales.'
  };

  copiarHex(hex: string): void {
    navigator.clipboard?.writeText(hex);
    this.colorCopiado.set(hex);
    setTimeout(() => this.colorCopiado.set(null), 1800);
  }
}