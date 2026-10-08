import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pharmacie } from '../model/pharmacie.model';
import { PharmacieService } from '../services/pharmacie-service';

@Component({
  selector: 'app-add-pharmacie',
  imports: [FormsModule],
  templateUrl: './add-pharmacie.html',
  styleUrl: './add-pharmacie.css'
})
export class AddPharmacie {
  newPharmacie = new Pharmacie();

  constructor(
    private pharmacieService: PharmacieService,
    private router: Router
  ) {}

  addPharmacie() {
    this.pharmacieService.ajouterPharmacie(this.newPharmacie);
    this.router.navigate(['pharmacies']);
  }
}