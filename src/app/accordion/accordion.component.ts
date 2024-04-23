// src/app/accordion/accordion.component.ts
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Song } from '../models/song.interface'; // Ensure the path is correct

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [MatExpansionModule],
  standalone: true,
})
export class AccordionComponent {
  @Input() song!: Song;
}
