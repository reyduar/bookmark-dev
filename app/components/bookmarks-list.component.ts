// ====== ariel duarte ======
import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../model/bookmark';
import { BookmarkService } from '../services/bookmark.service';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'bookmarks-list',
    templateUrl: 'views/bookmarks-list.html',
    providers: [ BookmarkService ]
})

export class BookmarksListComponent implements OnInit{
  public bookmark:Bookmark;
  public bookmarks:Bookmark[];
  public loading:string;
  public box:string;
  public searchTerm:string;

   constructor(private _bookmarksService: BookmarkService, private _router: Router){
     this.searchTerm = "";
     this.box = 'show';
   }

  getBookmarks(){
    //let bookmark_table = <HTMLElement>document.querySelector(".loading");
    //bookmark_table.style.visibility = "visilbe";
    this.loading = 'show';
    this._bookmarksService.getBookmarks()
    .subscribe(
        //Bind to view
        results => {
          this.bookmarks = results._embedded.bookmarks;
          this.loading = 'hide';
          if(this.bookmarks.length >= 3){
            this.box = 'hide';
          }else{
             this.box = 'show';
          }
          //bookmark_table.style.display = "none";
        },
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  search(){
    //let bookmark_table = <HTMLElement>document.querySelector(".loading");
    //bookmark_table.style.visibility = "visilbe";
    this.loading = 'show';
    this._bookmarksService.getBookmarkByName(this.searchTerm)
    .subscribe(
        //Bind to view
        results => {
          this.bookmarks = results._embedded.bookmarks;
          this.loading = 'hide';
          if(this.bookmarks.length >= 3){
            this.box = 'hide';
          }else{
            this.box = 'show';
          }
          //bookmark_table.style.display = "none";
        },
      err => {
        // Log errors if any
        console.log(err);
      });
  }


  ngOnInit(){
    this.getBookmarks();
  }

  deleteBookmark(id:string){
    this._bookmarksService.deleteBookmark(id)
    .subscribe(
        response => {
          this._router.navigate(["bookmarks"]);
          this.getBookmarks();
        },
      err => {
        this._router.navigate(["bookmarks"]);
        this.getBookmarks();
      });
  }
}
