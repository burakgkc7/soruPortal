import { CevapComponent } from './components/cevap/cevap.component';
import { KSorulisteleComponent } from './components/k-sorulistele/k-sorulistele.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { LoginComponent } from './components/login/login.component';
import { SoruComponent } from './components/soru/soru.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:SoruComponent
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'kategori',
    component:KategoriComponent
  },
  {
    path:'ksorulistele/:kategoriId',
    component:KSorulisteleComponent
  },
  {
    path:'cevap/:soruId',
    component:CevapComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
