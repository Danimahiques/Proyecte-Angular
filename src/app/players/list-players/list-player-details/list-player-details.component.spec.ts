import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayerDetailsComponent } from './list-player-details.component';

describe('ListPlayerDetailsComponent', () => {
  let component: ListPlayerDetailsComponent;
  let fixture: ComponentFixture<ListPlayerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlayerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
