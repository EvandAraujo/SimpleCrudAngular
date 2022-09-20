import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageSizeEnum } from '../enums/page-size.enum';
import { SimpleFilter } from '../models/simple-filter.model';

@Component({
  selector: 'app-base-paginator',
  templateUrl: './base-paginator.component.html',
  styleUrls: ['./base-paginator.component.scss']
})

export class BasePaginator implements OnInit {

  @Output() getData = new EventEmitter();
  @Input() collectionSize: number = 0;
  @Input() pageIndex: number = 1;
  @Input() pageSize: number = PageSizeEnum.Twelve;
  @Input() pageSizeSelect = PageSizeEnum.getAll();

  filter = new SimpleFilter();
  totalToShow = 200;

  ngOnInit(): void {
    this.filter.pageSize = this.pageSize;
    this.filter.pageIndex = 1;
    this.getData.emit(this.filter);
  }

  public nextOrPreviewed() {
    this.filter.pageSize = this.pageSize;
    this.filter.pageIndex = this.pageIndex;
    this.getData.emit(this.filter);
  }

  public changeSizePage($event: any) {
    this.pageSize = parseInt($event.value, 0); 
    this.pageIndex = 1;
    this.filter.pageSize = this.pageSize;
    this.filter.pageIndex = this.pageIndex;
    this.getData.emit(this.filter);
  }
}
