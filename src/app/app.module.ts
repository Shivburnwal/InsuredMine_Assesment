import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Include/footer/footer.component';
import { HeaderComponent } from './Include/header/header.component';
import { AboutComponent } from './Pages/about/about.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserDBService } from './Service/user-db.service';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    LayoutComponent,
    LoginComponent,
    DashboardComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
