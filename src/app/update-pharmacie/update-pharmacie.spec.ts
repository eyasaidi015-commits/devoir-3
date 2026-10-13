import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePharmacie } from './update-pharmacie';

describe('UpdatePharmacie', () => {
  let component: UpdatePharmacie;
  let fixture: ComponentFixture<UpdatePharmacie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePharmacie],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePharmacie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
