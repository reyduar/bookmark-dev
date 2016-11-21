// ====== ariel duarte ======
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarksListComponent } from "./components/bookmarks-list.component";
import { AddBookmarkComponent } from "./components/add-bookmark.component";
import { BookmarkDetailsComponent } from "./components/bookmark-details.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'bookmarks',
		pathMatch: 'full'
	},
	{ path: "bookmarks", component: BookmarksListComponent },
	{ path: "add", component: AddBookmarkComponent },
	{ path: "details/:id", component: BookmarkDetailsComponent },
	{ path: "edit/:id", component: AddBookmarkComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
