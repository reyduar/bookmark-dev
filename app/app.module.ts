// ====== ariel duarte ======
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { BookmarksListComponent } from './components/home/bookmarks-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AddBookmarkComponent } from './components/add/add-bookmark.component';
import { BookmarkDetailsComponent } from './components/detail/bookmark-details.component';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, BookmarksListComponent, FooterComponent, AddBookmarkComponent, BookmarkDetailsComponent, AboutComponent ],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
