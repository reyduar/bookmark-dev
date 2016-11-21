// ====== ariel duarte ======
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Bookmark } from '../model/bookmark';
import { BookmarkService } from '../services/bookmark.service';

@Component({
    selector: "bookmark-details",
    templateUrl: 'app/views/bookmark-details.html',
    providers: [ BookmarkService ]
})

export class BookmarkDetailsComponent implements OnInit{
  public idParam = "";
  public title = "";
  public bookmark:Bookmark;

  constructor(private _bookmarkService: BookmarkService,
              private _router: Router,
              private _actroute: ActivatedRoute){}

  ngOnInit(){
    this._actroute.params.forEach((params: Params) => {
      this.idParam = params['id'];
    });

    this.getBookmark(this.idParam);
  }

  getBookmark(id: string){
    this._bookmarkService.getBookmarkById(id)
    .subscribe(
        //Bind to view
        results => {
          this.bookmark = results;
          this.title = this.bookmark.name;
          console.log(this.bookmark);
        },
      err => {
        // Log errors if any
        console.log(err);
        this._router.navigate(["/bookmarks"]);
      });
  }


}
