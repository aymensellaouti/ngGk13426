import { AbstractControl, AsyncValidatorFn } from "@angular/forms"
import { map, of } from "rxjs";
import { CvService } from "../cv/services/cv.service";

export const uniqueCinValidator = (cvService: CvService): AsyncValidatorFn => {
  return (control: AbstractControl) => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.getCvsByProperty('cin', cin).pipe(
      // [cv]
      map(cvs => cvs.length ? {'uniqueCin': 'Le cin existe déjà'} : null)
    );
  }
}

//Autre syntaxe pour écrire une fonction
export function uniqueCin1Validator(cvService: CvService): AsyncValidatorFn {

  return (control: AbstractControl) => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.getCvsByProperty('cin', cin).pipe(
      // [cv]
      map((cvs) => (cvs.length ? { uniqueCin: 'Le cin existe déjà' } : null)),
    );
  };

}
