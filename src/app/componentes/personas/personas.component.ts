import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.getAllPersonas();
  }
  getAllPersonas():void {
    this.personas = this.personaService.getAllPersonas()
  }
  borrarPersonaDeLista(personaParaBorrar: Persona) {
		// con este truco borramos a la persona pero en realidad deberíamos 
		// llamar al service 
    this.personas = this.personaService.removePersona(this.personas,personaParaBorrar)
  }
}
