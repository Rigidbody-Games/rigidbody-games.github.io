import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellcasterTermsOfServiceComponent } from './spellcaster-terms-of-service.component';

describe('SpellcasterTermsOfServiceComponent', () => {
  let component: SpellcasterTermsOfServiceComponent;
  let fixture: ComponentFixture<SpellcasterTermsOfServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpellcasterTermsOfServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellcasterTermsOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
