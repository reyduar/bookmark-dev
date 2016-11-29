// ====== ariel duarte ======
import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../model/bookmark';
import { BookmarkService } from '../../services/bookmark.service';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'bookmarks-list',
    templateUrl: 'components/home/bookmarks-list.html',
    providers: [ BookmarkService ]
})

export class BookmarksListComponent implements OnInit{
  public bookmark:Bookmark;
  public bookmarks:Bookmark[];
  public loading:string;
  public box:string;
  public navPages:string;
  public searchTerm:string;
  public currentPage: number;
  public totalPages: number;
  public totalRealPages: number;
  public pages:number[] = [];

   constructor(private _bookmarksService: BookmarkService, private _router: Router){
     this.searchTerm = "";
     this.box = 'show';
     this.navPages = 'hide';
     this.currentPage = 0;
   }

  getBookmarks(){
    //let bookmark_table = <HTMLElement>document.querySelector(".loading");
    //bookmark_table.style.visibility = "visilbe";
    this.loading = 'show';
    this._bookmarksService.getAllBookmarksPageable()
    .subscribe(
        //Bind to view
        results => {
          this.bookmarks = results._embedded.bookmarks;
          if(results._embedded.bookmarks.length > 0){
            this.totalPages = results.page.totalPages;
            this.totalRealPages = this.totalPages - 1;
            this.navPages = 'show';
            this.loading = 'hide';
          }else{
            this.navPages = 'hide';
          }
          if(results._embedded.bookmarks.length >= 3){
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

  searchPageable(){
    //let bookmark_table = <HTMLElement>document.querySelector(".loading");
    //bookmark_table.style.visibility = "visilbe";
    this.loading = 'show';
    this._bookmarksService.getBookmarksBySearches(this.searchTerm, this.currentPage)
    .subscribe(
        //Bind to view
        results => {
          this.bookmarks = results._embedded.bookmarks;
          if(results._embedded.bookmarks.length > 0){
            this.totalPages = results.page.totalPages;
            this.totalRealPages = this.totalPages - 1;
            this.navPages = 'show';
            this.loading = 'hide';
          }else{
            this.navPages = 'hide';
          }


          if(results._embedded.bookmarks.length >= 3){
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

  /*Pageable control*/
  previous(){
    if(this.currentPage+1 > 1){
      this.currentPage--;
      this.searchPageable();
    }
  }

  next(){
    if(this.currentPage+1 < this.totalPages){
      this.currentPage++;
      this.searchPageable();
    }
  }
}
