import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoralistComponent } from './editoralist.component';

describe('EditoralistComponent', () => {
  let component: EditoralistComponent;
  let fixture: ComponentFixture<EditoralistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditoralistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditoralistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
