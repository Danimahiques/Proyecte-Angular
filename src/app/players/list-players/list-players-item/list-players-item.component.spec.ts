import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayersItemComponent } from './list-players-item.component';

describe('ListPlayersItemComponent', () => {
  let component: ListPlayersItemComponent;
  let fixture: ComponentFixture<ListPlayersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlayersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlayersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
