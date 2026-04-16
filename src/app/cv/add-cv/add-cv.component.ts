import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { APP_CONFIG } from 'src/app/config/app-const.config';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv.model';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);

  form = this.formBuilder.group(
    {
      name: ['', [Validators.required], []],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    },
    {
      validators: [],
      asyncValidators: [],
      updateOn: 'change',
    },
  );
  constructor() {
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age < 18) {
          this.path?.setValue('');
          this.path?.disable();
        } else {
          this.path?.enable();
        }
      },
    });
    //this.form.statusChanges
    const form = localStorage.getItem(APP_CONFIG.savedCvForm);
    if (form) {
      this.form.patchValue(JSON.parse(form));
    }
    // this.name.valueChanges.subscribe({
    //   next:(value) => console.log(value)
    // })
    // this.name.statusChanges.subscribe({
    //   next:(status) => console.log({status})
    // })
  }
  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(
        APP_CONFIG.savedCvForm,
        JSON.stringify(this.form.value),
      );
    }
  }
  addCv() {
    console.log({ cv: this.form.getRawValue() });

    this.cvService.addCv(this.form.getRawValue() as Cv).subscribe({
      next: (cv) => {
        this.form.reset();
        localStorage.removeItem(APP_CONFIG.savedCvForm);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        console.log({ e });
      },
    });
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
