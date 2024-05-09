import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutordetailsComponent } from './autordetails.component';

describe('AutordetailsComponent', () => {
  let component: AutordetailsComponent;
  let fixture: ComponentFixture<AutordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutordetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
