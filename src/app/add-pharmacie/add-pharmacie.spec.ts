import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPharmacie } from './add-pharmacie';

describe('AddPharmacie', () => {
  let component: AddPharmacie;
  let fixture: ComponentFixture<AddPharmacie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPharmacie],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPharmacie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
