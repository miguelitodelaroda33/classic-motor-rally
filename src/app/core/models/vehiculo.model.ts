export type CategoriaVehiculo = 'Pre-65' | 'Gran Turismo' | 'Sport Clásico' | 'Popular Histórico';

export interface Vehiculo {
  id: number;
  dorsal: string;
  marca: string;
  modelo: string;
  anio: number;
  categoria: CategoriaVehiculo;
  potencia: string;
  cilindrada: string;
  piloto: string;
  copiloto: string;
  destacado: boolean;
  imagen: string;
  descripcionCorta: string;
  historial: string;
}