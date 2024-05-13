import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Song } from '../models/song.interface';
import { CommonModule } from '@angular/common';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [CommonModule, MatExpansionModule, LightboxModule],
  standalone: true,
})
export class AccordionComponent {
  @Input() song!: Song;
  @Input() isActive: boolean = false;
  @Output() toggle = new EventEmitter<void>();
  @ViewChild('audioPlayer') audioPlayer?: ElementRef<HTMLAudioElement>;

  public albums: Array<any> = [];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 5; i++) {
      const src = `path_to_your_image/image${i}.jpg`;
      const caption = `Image ${i}`;
      const thumb = `path_to_your_thumbnail/thumb${i}.jpg`;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };

      this.albums.push(album);
    }
  }

  stopAudio(): void {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.pause();
      // this.audioPlayer.nativeElement.currentTime = 0; // Optionally reset the time
    }
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  onClickHeader(): void {
    this.toggle.emit();
  }

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
