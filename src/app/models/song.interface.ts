// src/app/models/song.interface.ts
export interface Song {
  id: number; // Unique identifier for the song
  pageNumber: number; // Page number to be displayed
  title: string; // Title of the song
  musicFilePath: string; // Path to the music file
  picturePath: string; // Path to the song's picture file
}
