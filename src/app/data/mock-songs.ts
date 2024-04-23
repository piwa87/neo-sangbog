import { Song } from '../models/song.interface';

export const MOCK_SONGS: Song[] = [
  {
    id: 1,
    pageNumber: 1,
    title: 'Song One',
    musicFilePath: 'assets/music/song1.mp3',
    picturePath: 'assets/images/song1.jpg',
  },
  {
    id: 2,
    pageNumber: 2,
    title: 'Song Two',
    musicFilePath: 'assets/music/song2.mp3',
    picturePath: 'assets/images/song2.jpg',
  },
  {
    id: 3,
    pageNumber: 3,
    title: 'Song Three',
    musicFilePath: 'assets/music/song3.mp3',
    picturePath: 'assets/images/song3.jpg',
  },
  {
    id: 4,
    pageNumber: 4,
    title: 'Song Four',
    musicFilePath: 'assets/music/song4.mp3',
    picturePath: 'assets/images/song4.jpg',
  },

  {
    id: 35,
    pageNumber: 35,
    title: 'Herre, du er min Gud',
    musicFilePath: 'assets/songs/35.mp3',
    picturePath: 'assets/lyrics/35.jpg',
  },
];
