import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilItemComponent } from './appareil-item.component';

describe('AppareilItemComponent', () => {
  let component: AppareilItemComponent;
  let fixture: ComponentFixture<AppareilItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
