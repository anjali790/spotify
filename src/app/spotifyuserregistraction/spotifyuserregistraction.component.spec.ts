import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyuserregistractionComponent } from './spotifyuserregistraction.component';

describe('SpotifyuserregistractionComponent', () => {
  let component: SpotifyuserregistractionComponent;
  let fixture: ComponentFixture<SpotifyuserregistractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyuserregistractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyuserregistractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
