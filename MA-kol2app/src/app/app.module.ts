import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MABlogComponent } from './components/ma-blog/ma-blog.component';
import { MaBlogItemComponent } from './components/ma-blog-item/ma-blog-item.component';
import { MaBlogDetailsComponent } from './components/ma-blog-details/ma-blog-details.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MABlogComponent,
    MaBlogItemComponent,
    MaBlogDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
