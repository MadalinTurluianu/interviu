import { Component, Input } from '@angular/core';
@Component({
  selector: 't-column',
  standalone: true,
  imports: [],
  templateUrl: './table-column.component.html',
  styleUrl: './table-column.component.css',
})
export class TableColumnComponent<T extends Record<string, string | number>> {
  @Input() name!: string;
  @Input() property!: keyof T;
  @Input() sortable!: boolean;
}
