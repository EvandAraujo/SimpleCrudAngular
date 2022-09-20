import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { takeUntil } from "rxjs";
import { SubscriptionCancel } from "src/app/shared/components/subsctiption-cancel";
import { PageSizeEnum } from "src/app/shared/enums/page-size.enum";
import { SimpleFilter } from "src/app/shared/models/simple-filter.model";
import { ValidationsFormService } from "src/app/shared/services/validations-form.service";
import Swal from "sweetalert2";
import { Person } from "../models/person.model";
import { PersonService } from "../services/person.service";
import { BrazilianUfStatic } from "../statics/brazilian-uf.static";

@Component({
  selector: 'app-registration-of-people-list',
  templateUrl: './registration-of-people-list.component.html',
  styleUrls: ['./registration-of-people-list.component.scss']
})

export class RegistrationOfPeopleListComponent extends SubscriptionCancel implements OnInit {

  public people: Person[] = [];
  public brazilianUfStatic = BrazilianUfStatic;
  public brazilianUfStatics: Array<any> = [];
  public collectionSize: number = 0;
  public simpleFilter: SimpleFilter = new SimpleFilter();
  public form!: FormGroup;
  public modalOpen: boolean = false;
  public errorMessage?: string;

  constructor(
    private service: PersonService,
    public validationsFormService: ValidationsFormService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.setInitialPage()
    this.getAllPersons();
    this.getBrazilianUfs();

  }

  private setInitialPage() {
    this.simpleFilter.term = "";
    this.simpleFilter.pageSize = PageSizeEnum.Twelve;
    this.simpleFilter.pageIndex = 1;
  }

  public getAllPersons(simpleFilter?: SimpleFilter) {
    this.spinner.show();
    if (simpleFilter) {
      this.simpleFilter.pageSize = simpleFilter.pageSize;
      this.simpleFilter.pageIndex = simpleFilter.pageIndex;
    }

    this.service.getAllPersons(this.simpleFilter).pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.collectionSize = response.count!;
      this.people = response.itens!.map(x => {
        x.brazilianUf = this.brazilianUfStatic.GetById(x.brazilianUfId!)!;
        return x;
      });
      this.spinner.hide();
    });
  }

  public getBrazilianUfs() {
    this.brazilianUfStatics = this.brazilianUfStatic.GetAll().sort((a,b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });;
  }

  public onBrazilianUfChange(event: any) {
    if(event.target.value == "null")
    this.form.controls['brazilianUfId'].setValue(null);
  }

  public enableForm(person?: Person) {

    if(!person)
    person = new Person();

    this.modalOpen = true;
    this.form = this.formBuilder.group({
      id: [person != null ? person.id : null],
      name: [person != null ? person.name : null, { validators: [ Validators.required, Validators.maxLength(100)] }],
      lastName: [person != null ? person.lastName : null, { validators: [ Validators.required, Validators.maxLength(100)] }],
      email: [person != null ? person.email : null, { validators: [ Validators.required, Validators.email, Validators.maxLength(100)] }],
      phoneNumber: [person != null ? person.phoneNumber : null, { validators: [ Validators.required, Validators.maxLength(100)] }],
      nationality: [person != null ? person.nationality : null, { validators: [ Validators.required, Validators.maxLength(100)] }],
      zoneInformationPostalCode: [person != null ? person.zoneInformationPostalCode : null, { validators: [ Validators.required, Validators.maxLength(100)] }],
      brazilianUfId: [person != null ? person.brazilianUfId : null, { validators: [ Validators.required] }],
      city: [person != null ? person.city : null, { validators: [ Validators.required, Validators.maxLength(100)] }],
      publicPlace: [person != null ? person.publicPlace : null, { validators: [ Validators.required, Validators.maxLength(100)] }]
    });
  }

  public alterModalOpenForClosed() {
    this.modalOpen = true;
  }

  public save() {
    this.spinner.show();
    if (this.form.valid && this.form.controls['brazilianUfId'].value != "null" ) {
      if (this.form.controls['id'].value) {
        this.service.updatePerson(this.form.value).pipe(takeUntil(this.destroy$)).subscribe((data) => {
          this.getAllPersons();
        }, (error) => {
          this.errorMessage = error.message;
        });
      } else {
        this.form.controls['id'].setValue(undefined);
        this.service.createPerson(this.form.value).pipe(takeUntil(this.destroy$)).subscribe((data) => {
          this.getAllPersons();
        }, (error) => {
          this.errorMessage = error.message;
        });
      }
    }
  }

  deletePerson(person: Person) {
    Swal.fire({
      title: 'Deseja realmente excluir?',
      text: "A pessoa será excluida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4c06',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.service.deletePerson(person.id!).pipe(takeUntil(this.destroy$)).subscribe((data) => {
          this.getAllPersons();
        }, (error) => {
          this.errorMessage = error.message;
        });
      }
    });
  }
}