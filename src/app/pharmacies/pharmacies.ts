import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pharmacie } from '../model/pharmacie.model';
import { PharmacieService } from '../services/pharmacie-service';

@Component({
  selector: 'app-pharmacies',
  imports: [DatePipe, RouterLink],
  templateUrl: './pharmacies.html',
  styleUrl: './pharmacies.css'
})
export class Pharmacies {
  pharmacies: Pharmacie[];

  constructor(private pharmacieService: PharmacieService) {
    this.pharmacies = this.pharmacieService.listePharmacies();
  }

  supprimerPharmacie(p: Pharmacie) {
    if (confirm('Voulez-vous vraiment supprimer cette pharmacie ?')) {
      this.pharmacieService.supprimerPharmacie(p);
    }
  }
}