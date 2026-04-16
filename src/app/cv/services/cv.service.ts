import { inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { APP_CONFIG } from 'src/app/config/app-const.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
    new Cv(
      1,
      'Farid',
      'Chouakria',
      'Ingénieur',
      '12345678',
      20,
      'rotating_card_profile3.png',
    ),
    new Cv(2, 'Stephane', 'Bailly', 'Ingénieur', '12345679', 20, ''),
    new Cv(3, 'Aymen', 'Sellaouti', 'Ingénieur', '12345688', 20, '           '),
  ];
  http = inject(HttpClient);
  //  x = new Subject().
  /**
   * Le flux des cvs séléctionnés
   */
  #selectedCv$ = new Subject<Cv>();
  /**
   * Le flux des cvs séléctionnés
   */
  selectedCv$ = this.#selectedCv$.asObservable();
  /**
   * Retourne le flux de la liste des cvs
   * @returns Observable<Cv[]>
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  /**
   * Retourne la liste des fake cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
    return this.#cvs;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  deleteCvById(id: number): Observable<{count: number}> {
    // Todo: Ajouter le token pour pouvoir supprimer
    const headers = new HttpHeaders().set(
      APP_CONFIG.headerParam,
      localStorage.getItem(APP_CONFIG.authToken) ?? ''
    );
    // const params = new HttpParams().set(APP_CONFIG.authParam, 'Token');
    return this.http.delete<{ count: number }>(APP_API.cv + id, {headers});
  }
  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index > -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Ajouter le cv aux flux des cvs séléctionnés
   * @param cv : le cv sélectionné
   */
  selectCv(cv: Cv) {
    // Ajoute un cv au flux
    this.#selectedCv$.next(cv);
  }
}
