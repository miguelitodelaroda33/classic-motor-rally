import { Component, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion.html',
  styleUrl: './inscripcion.scss'
})
export class Inscripcion {
  private fb = inject(FormBuilder);

  enviado = signal(false);
  registroExitoso = signal(false);
  datosConfirmados = signal<Record<string, string | number | boolean> | null>(null);

  readonly categorias = ['Pre-65', 'Gran Turismo', 'Sport Clásico', 'Popular Histórico'];

  formulario: FormGroup = this.fb.group({
    // Datos del Equipo
    piloto: ['', [Validators.required, Validators.minLength(3)]],
    copiloto: [''],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[0-9+\s]{9,15}$/)]],
    club: [''],

    // Datos del Vehículo Clásico
    marca: ['', [Validators.required, Validators.minLength(2)]],
    modelo: ['', [Validators.required, Validators.minLength(2)]],
    anio: [null, [Validators.required, Validators.min(1920), Validators.max(1985)]],
    matricula: ['', [Validators.required, Validators.minLength(5)]],
    categoria: ['Gran Turismo', Validators.required],

    // Reglamento
    aceptaReglamento: [false, Validators.requiredTrue]
  });

  tieneError(campo: string): boolean {
    const control = this.formulario.get(campo);
    return !!(control && control.invalid && (control.touched || this.enviado()));
  }

  onSubmit(): void {
    this.enviado.set(true);

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.datosConfirmados.set(this.formulario.value);
    this.registroExitoso.set(true);
  }

  nuevaInscripcion(): void {
    this.formulario.reset({ categoria: 'Gran Turismo', aceptaReglamento: false });
    this.enviado.set(false);
    this.registroExitoso.set(false);
    this.datosConfirmados.set(null);
  }
}