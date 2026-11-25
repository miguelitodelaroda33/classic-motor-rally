import { Component } from '@angular/core';

interface EtapaPrograma {
  hora: string;
  titulo: string;
  ubicacion: string;
  distancia: string;
  descripcion: string;
  esTramoCronometrado: boolean;
}

@Component({
  selector: 'app-itinerario',
  standalone: true,
  templateUrl: './itinerario.html',
  styleUrl: './itinerario.scss'
})
export class Itinerario {
  readonly programa: EtapaPrograma[] = [
    {
      hora: '08:30',
      titulo: 'Apertura de Parque Cerrado y Verificaciones',
      ubicacion: 'Lonja de San Lorenzo de El Escorial',
      distancia: '0 km',
      descripcion: 'Acreditación de equipos, entrega de libro de ruta (Roadbook), placas oficiales y verificación técnica.',
      esTramoCronometrado: false
    },
    {
      hora: '10:00',
      titulo: 'Salida Oficial · Etapa 1: Puerto de la Cruz Verde',
      ubicacion: 'San Lorenzo -> Robledo de Chavela',
      distancia: '48 km',
      descripcion: 'Primer sector de regularidad controlada con media impuesta de 49,9 km/h por carretera de montaña.',
      esTramoCronometrado: true
    },
    {
      hora: '11:45',
      titulo: 'Reagrupamiento y Control de Paso',
      ubicacion: 'Plaza Mayor de Navaluenga',
      distancia: '92 km',
      descripcion: 'Parada técnica de 45 minutos para refrigerio de participantes y exposición abierta al público.',
      esTramoCronometrado: false
    },
    {
      hora: '12:30',
      titulo: 'Etapa 2: Tramo de los Pantanos y Puerto de Navacerrada',
      ubicacion: 'Navaluenga -> Cercedilla',
      distancia: '145 km',
      descripcion: 'Sector técnico de navegación con controles secretos de paso al segundo.',
      esTramoCronometrado: true
    },
    {
      hora: '14:30',
      titulo: 'Llegada a Meta, Comida de Hermandad y Entrega de Trofeos',
      ubicacion: 'Real Club de Golf La Herrería',
      distancia: '185 km',
      descripcion: 'Almuerzo oficial del Classic Motor Club y ceremonia de premiación por categorías.',
      esTramoCronometrado: false
    }
  ];
}