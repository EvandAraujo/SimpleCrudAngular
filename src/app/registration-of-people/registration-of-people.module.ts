import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IConfig, NgxMaskModule } from "ngx-mask";
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from "../shared/shared.module";
import { RegistrationOfPeopleListComponent } from "./registration-of-people-list/registration-of-people-list.component";
import { RegistrationOfPeopleListRoutingModule } from "./registration-of-people.routing.module";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null!;

@NgModule({
  declarations: [
    RegistrationOfPeopleListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgbModule,
    RegistrationOfPeopleListRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [

  ],
  providers: [

  ]
})

export class RegistrationOfPeopleModule { }