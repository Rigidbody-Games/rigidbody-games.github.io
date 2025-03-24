import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { GamesComponent } from './pages/games/games.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SpellcasterPrivacyComponent } from './pages/spellcaster-privacy/spellcaster-privacy.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'games', component: GamesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'spellcaster-privacy', component: SpellcasterPrivacyComponent },
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
