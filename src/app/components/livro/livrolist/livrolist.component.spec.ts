import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrolistComponent } from './livrolist.component';

describe('LivrolistComponent', () => {
  let component: LivrolistComponent;
  let fixture: ComponentFixture<LivrolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
