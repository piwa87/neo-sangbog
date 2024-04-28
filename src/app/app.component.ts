import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { HeaderComponent } from './header/header.component';
import { Song } from './models/song.interface';
import { WHITE_SONGS } from './db/white-songs';
import { YELLOW_SONGS } from './db/yellow-songs';
import { GREEN_SONGS } from './db/green-songs';
import { BLUE_SONGS } from './db/blue-songs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    AccordionComponent,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    FormsModule,
  ],
})
export class AppComponent {
  allSongs: Song[] = [
    ...YELLOW_SONGS,
    ...WHITE_SONGS,
    ...GREEN_SONGS,
    ...BLUE_SONGS,
  ];

  filteredSongs: Song[] = [...this.allSongs];
  filterText = '';
  activeSongId: number | null = null;

  constructor() {
    this.filterSongs();
  }

  toggleAccordion(songId: number): void {
    this.activeSongId = this.activeSongId === songId ? null : songId;
  }

  filterSongs(): void {
    this.filteredSongs = this.allSongs.filter((song) =>
      song.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
