import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ElectronicsComponent } from './components/navbar/electronics/electronics.component';
import { MusicComponent } from './components/navbar/music/music.component';
import { SportsOutdoorsComponent } from './components/navbar/sports-outdoors/sports-outdoors.component';
import { FashionComponent } from './components/navbar/fashion/fashion.component';
import { CarsPartsComponent } from './components/navbar/cars-parts/cars-parts.component';
import { KidsComponent } from './components/navbar/kids/kids.component';
import { HomeGardenComponent } from './components/navbar/home-garden/home-garden.component';
import { MiscComponent } from './components/navbar/misc/misc.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { ProductsComponent } from './components/products/products.component';
import { PostComponent } from './components/products/post/post.component';
import { ProductService } from './services/product.service';
import { ShowComponent } from './components/products/show/show.component';
import { EditComponent } from './components/products/edit/edit.component';
import { DeleteComponent } from './components/products/delete/delete.component';
import { FooterComponent } from './components/products/footer/footer.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ElectronicsComponent,
    MusicComponent,
    SportsOutdoorsComponent,
    FashionComponent,
    CarsPartsComponent,
    KidsComponent,
    HomeGardenComponent,
    MiscComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    ProductsComponent,
    PostComponent,
    ShowComponent,
    EditComponent,
    DeleteComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, ProductService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
