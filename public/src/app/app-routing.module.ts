import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ElectronicsComponent } from './components/navbar/electronics/electronics.component';
import { MusicComponent } from './components/navbar/music/music.component';
import { FashionComponent } from './components/navbar/fashion/fashion.component';
import { KidsComponent } from './components/navbar/kids/kids.component';
import { MiscComponent } from './components/navbar/misc/misc.component';
import { SportsOutdoorsComponent } from './components/navbar/sports-outdoors/sports-outdoors.component';
import { HomeGardenComponent } from './components/navbar/home-garden/home-garden.component';
import { CarsPartsComponent } from './components/navbar/cars-parts/cars-parts.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { ProductsComponent } from './components/products/products.component';
import { PostComponent } from './components/products/post/post.component';
import { ShowComponent } from './components/products/show/show.component';
import { EditComponent } from './components/products/edit/edit.component';
import { DeleteComponent } from './components/products/delete/delete.component';
import { SearchComponent } from './components/search/search.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  { path: 'post', component:  PostComponent},
  { path: 'post/:id',  component: ShowComponent, children: [
    { path: 'edit/:id', redirectTo: '/edit/:id', pathMatch: 'full'},
    { path: 'delete/:id', redirectTo: '/delete/:id', pathMatch: 'full' }
  ]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [
    { path: 'profile/post', redirectTo: '/post', pathMatch: 'full'},
    { path: 'edit/:id', redirectTo: '/edit/:id', pathMatch: 'full'},
    { path: 'delete/:id', redirectTo: '/delete/:id', pathMatch: 'full'}
  ]},
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'delete/:id', component: DeleteComponent, canActivate: [AuthGuard] },
  { path: 'electronics', component: ElectronicsComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'music', component: MusicComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'fashion', component: FashionComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'sports&outdoors', component: SportsOutdoorsComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'kids', component: KidsComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'home&garden', component: HomeGardenComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'cars&parts', component: CarsPartsComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'misc', component: MiscComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'signup', component: SignupComponent, canActivate: [NotAuthGuard], children: [
    { path: 'signup/login',redirectTo: '/login', pathMatch: 'full'}
  ] },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard]},
  { path: 'category/:category_name', redirectTo: ':category_name', pathMatch: 'full' },
  {  path: 'search', component: SearchComponent, children: [
    { path: 'post/:id', redirectTo: '/post/:id', pathMatch: 'full' }
  ]},
  { path: 'searchDetail', component: SearchDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
