import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelect = new EventEmitter<string>();
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect (nav: string) {
    this.featureSelect.emit(nav);
  }
}
