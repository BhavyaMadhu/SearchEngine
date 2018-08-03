import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() cardList;
    @Input() cardTitle;
    @Input() cardLimit;
    @Input() cardColumnDefs;
}
