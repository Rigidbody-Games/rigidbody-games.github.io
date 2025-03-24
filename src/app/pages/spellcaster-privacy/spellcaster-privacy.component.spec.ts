import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellcasterPrivacyComponent } from './spellcaster-privacy.component';

describe('SpellcasterPrivacyComponent', () => {
  let component: SpellcasterPrivacyComponent;
  let fixture: ComponentFixture<SpellcasterPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpellcasterPrivacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellcasterPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
