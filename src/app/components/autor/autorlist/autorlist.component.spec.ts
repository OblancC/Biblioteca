import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorlistComponent } from './autorlist.component';

describe('AutorlistComponent', () => {
  let component: AutorlistComponent;
  let fixture: ComponentFixture<AutorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
