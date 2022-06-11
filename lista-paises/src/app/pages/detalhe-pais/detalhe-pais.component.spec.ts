import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePaisComponent } from './detalhe-pais.component';

describe('DetalhePaisComponent', () => {
  let component: DetalhePaisComponent;
  let fixture: ComponentFixture<DetalhePaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
