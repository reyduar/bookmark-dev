// ====== ariel duarte ======
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarksListComponent } from "./components/bookmarks-list.component";
import { AddBookmarkComponent } from "./components/add-bookmark.component";
import { BookmarkDetailsComponent } from "./components/bookmark-details.component";
import { AboutComponent } from "./components/about.component";

const appRoutes: Routes = [
	{	path: '',	pathMatch: 'full', component: BookmarksListComponent	},
	{ path: "bookmarks", component: BookmarksListComponent },
	{ path: "add", component: AddBookmarkComponent },
	{ path: "details/:id", component: BookmarkDetailsComponent },
	{ path: "edit/:id", component: AddBookmarkComponent },
	{ path: "about", component: AboutComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
