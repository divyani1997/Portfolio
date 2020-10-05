import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SworkComponent } from './swork.component';

describe('SworkComponent', () => {
  let component: SworkComponent;
  let fixture: ComponentFixture<SworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
