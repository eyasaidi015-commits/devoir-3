import { Injectable } from '@angular/core';
import { Pharmacie } from '../model/pharmacie.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {
  pharmacies: Pharmacie[] = [
    {
      idPharmacie: 100001,
      nomPharmacie: 'Pharmacie dr. Hajer Missaoui',
      adressePharmacie: 'En face clinique Les Violettes, résidence Ines Av. Dali Jazi, Nabeul',
      telephonePharmacie: '50 930 930',
      dateOuverture: new Date('2015-03-12')
    },
    {
      idPharmacie: 100002,
      nomPharmacie: 'Pharmacie De Nuit AMIRA BEN JANNET',
      adressePharmacie: 'Avenue Elgarci, Boucharray, Nabeul',
      telephonePharmacie: '70 314 335',
      dateOuverture: new Date('2018-09-01')
    },
    {
      idPharmacie: 100003,
      nomPharmacie: 'Pharmacie Les Jasmins',
      adressePharmacie: 'Centre Médical Eya, près Clinique el Amen, Av. Hédi Nouira, Nabeul',
      telephonePharmacie: '72 270 840',
      dateOuverture: new Date('2021-06-20')
    },
    {
      idPharmacie: 100004,
      nomPharmacie: 'Pharmacie Saoussen Abdeddayem',
      adressePharmacie: 'Avenue Mrezga, Nabeul',
      telephonePharmacie: '72 000 000',
      dateOuverture: new Date('2019-11-05')
    }
  ];

  listePharmacies(): Pharmacie[] {
    return this.pharmacies;
  }

  ajouterPharmacie(pharm: Pharmacie): void {
    this.pharmacies.push(pharm);
  }

  supprimerPharmacie(pharm: Pharmacie): void {
    const index = this.pharmacies.indexOf(pharm);
    if (index > -1) {
      this.pharmacies.splice(index, 1);
    }
  }

  consulterPharmacie(id: number): Pharmacie {
    return this.pharmacies.find(p => p.idPharmacie == id)!;
  }

  updatePharmacie(pharm: Pharmacie): void {
    const index = this.pharmacies.findIndex(p => p.idPharmacie == pharm.idPharmacie);
    this.pharmacies[index] = pharm;
  }
}