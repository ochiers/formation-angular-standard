import { Injectable } from '@angular/core';
import { Router, CanDeactivate, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Services
import { Constants } from './../../core/services/constants.service';
import { MixinService } from './../../core/services/mixin.service';
import { ResourcesService } from './../../core/services/resources.service';

// Components
import { UserNewComponent } from './../components/new/user-new.component';
import { UserEditComponent } from './../components/edit/user-edit.component';

@Injectable()
export class UserGuardService implements CanDeactivate<UserNewComponent | UserEditComponent> {

    /**
     * Creates an instance of UserGuardService.
     * @memberof UserGuardService
     */
    constructor(
    ) { }

    /**
     * Indicates if a route can be deactivated
     *
     * @param {PharmacienNewComponent} target
     * @returns
     * @memberof PharmGuardService
     */
    canDeactivate(target: UserNewComponent | UserEditComponent) {
        if (!target.isFormSaved) { return window.confirm('Etes-vous sûr de vouloir annuler votre saisie ?'); }
        return true;
    }
}