import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Song } from '../models/song.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [CommonModule, MatExpansionModule],
  standalone: true,
})
export class AccordionComponent {
  @Input() song!: Song;

  getBackgroundColor(pageNumber: number): string {
    const darkGreyPages = [207, 208, 273, 274, 283, 284];

    if (darkGreyPages.includes(pageNumber)) {
      return 'rgb(232,232,232)';
    }

    if (pageNumber >= 1 && pageNumber <= 30) {
      return 'rgb(252,228,172)';
    } else if (pageNumber >= 31 && pageNumber <= 199) {
      return 'rgb(255,255,255)';
    } else if (pageNumber >= 200 && pageNumber <= 240) {
      return 'rgb(180,211,162)';
    } else if (pageNumber >= 260) {
      return 'rgb(157,214,245)';
    }

    return 'rgb(255,255,255)';
  }
}
