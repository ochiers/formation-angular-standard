import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { DemoComponent } from './navigation/demo.component';
import { DemoDetailComponent } from './navigation/demo-detail.component';
import { DemoViewComponent } from './navigation/demo-view.component';
import { DemoEditComponent } from './navigation/demo-edit.component';
import { PageNotFoundComponent } from './navigation/page-not-found.component';
import { AuthGuard } from './navigation/auth-guard';
import { SaveFormsGuard } from './navigation/save-forms-guard';

const appRoutes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Demo List' }
  },
  {
    path: 'demo-detail',
    component: DemoDetailComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'view/:id', pathMatch: 'full' },
      { path: 'view/:id', component: DemoViewComponent },
      { path: 'edit/:id', component: DemoEditComponent, canDeactivate: [SaveFormsGuard] }
    ]
  },
  {
    path: 'demo-from-custom-module',
    loadChildren: './modules/demo/demo.module#DemoModule', // Lazy load
  },
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }