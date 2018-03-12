import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule }   from './app-routing.module';

import { AppComponent } from './app.component';

// Template & Bindings
import { SizerComponent } from './binding/sizer.component';

// Components
import { HooksComponent } from './components/hooks/hooks.component';
import { InteractionsComponent } from './components/interactions/interactions.component';

// Directives
import { HighlightDirective } from './directives/highlight.directive';
import { InputMaxLengthDirective } from './directives/input-max-length.directive';

// Pipes
import { ExponentialPipe } from './pipes/exponential.pipe';

// Forms
import { DemoFormComponent } from './forms/demo-form.component';
import { DemoReactFormComponent } from './forms/demo-react-form.component';
import { ForbiddenValidatorDirective } from './forms/forbidden-validator.directive';
import { DemosComponent } from './di/demos.component';

// Services
import { DemoService } from './di/demo.service';
import { Logger } from './di/logger.service';

// Http
import { DemoInterceptor } from './http/demo.interceptor';

// Navigation
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
  declarations: [
    AppComponent,
    SizerComponent,
    HooksComponent,
    SizerComponent,
    InteractionsComponent,
    HighlightDirective,
    InputMaxLengthDirective,
    ExponentialPipe,
    DemoFormComponent,
    DemoReactFormComponent,
    ForbiddenValidatorDirective,
    DemosComponent,
    DemoComponent,
    DemoDetailComponent,
    DemoViewComponent,
    DemoEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AppRoutingModule
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- pour le debugage
    )
  ],
  providers: [
    DemoService,
    Logger,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptor,
      multi: true,
    },
    AuthGuard,
    SaveFormsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
