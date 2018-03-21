import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Vendor modules
import { BreadcrumbModule, CalendarModule, DataTableModule, ToolbarModule, DialogModule } from 'primeng/primeng';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';

// Custom components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BreadCrumbComponent } from './components/breadCrumb/breadcrumb.component';

// Services
import { Spinner } from './services/spinner.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BreadcrumbModule,
        CalendarModule,
        DataTableModule,
        ToolbarModule,
        DialogModule,
        SimpleNotificationsModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
        SpinnerComponent,
        BreadCrumbComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BreadcrumbModule,
        CalendarModule,
        ToolbarModule,
        DialogModule,
        DataTableModule,
        SimpleNotificationsModule,
        BsDropdownModule,
        CollapseModule,
        NavbarComponent,
        SidebarComponent,
        SpinnerComponent,
        BreadCrumbComponent
    ],
    providers: [
        Spinner
    ]
})
export class SharedModule { }