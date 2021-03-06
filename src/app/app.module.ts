import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import localeEnGb from '@angular/common/locales/en-GB';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {registerLocaleData} from '@angular/common';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {PostsComponent} from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

registerLocaleData(localeEnGb);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-GB'},
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
