import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHobbylistComponent } from './new-hobbylist.component';

describe('NewHobbylistComponent', () => {
  let component: NewHobbylistComponent;
  let fixture: ComponentFixture<NewHobbylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHobbylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHobbylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
