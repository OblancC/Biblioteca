import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoradetailsComponent } from './editoradetails.component';

describe('EditoradetailsComponent', () => {
  let component: EditoradetailsComponent;
  let fixture: ComponentFixture<EditoradetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditoradetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditoradetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
