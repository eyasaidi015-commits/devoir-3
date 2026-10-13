import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pharmacie } from '../model/pharmacie.model';
import { PharmacieService } from '../services/pharmacie-service';

@Component({
  selector: 'app-update-pharmacie',
  imports: [FormsModule],
  templateUrl: './update-pharmacie.html',
  styleUrl: './update-pharmacie.css'
})
export class UpdatePharmacie implements OnInit {
  currentPharmacie = new Pharmacie();
  dateOuvertureStr = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pharmacieService: PharmacieService
  ) {}

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.currentPharmacie = { ...this.pharmacieService.consulterPharmacie(id) };
    this.dateOuvertureStr = new Date(this.currentPharmacie.dateOuverture)
      .toISOString().substring(0, 10);
  }

  updatePharmacie() {
    this.currentPharmacie.dateOuverture = new Date(this.dateOuvertureStr);
    this.pharmacieService.updatePharmacie(this.currentPharmacie);
    this.router.navigate(['pharmacies']);
  }
}