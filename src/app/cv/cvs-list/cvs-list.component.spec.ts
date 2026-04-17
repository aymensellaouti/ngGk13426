import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsListComponent } from './cvs-list.component';

describe('CvsListComponent', () => {
  let component: CvsListComponent;
  let fixture: ComponentFixture<CvsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CvsListComponent]
});
    fixture = TestBed.createComponent(CvsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
