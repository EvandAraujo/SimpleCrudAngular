import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PhoneMaskDirective } from "./directives/telephone-mask.directive";
import { BasePaginator } from "./paginator/base-paginator.component";

@NgModule({
  declarations: [
    BasePaginator,
    PhoneMaskDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    BasePaginator,
    PhoneMaskDirective
  ],
  providers: [

  ]
})

export class SharedModule { }