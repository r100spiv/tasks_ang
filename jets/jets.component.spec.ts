import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetsComponent } from './jets.component';

describe('JetsComponent', () => {
  let component: JetsComponent;
  let fixture: ComponentFixture<JetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
