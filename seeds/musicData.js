const { Music } = require('../models');

const musicdata = [
  {
    song_title: 'Nutshell',
    album_title: 'Unplugged',
    band_title: 'Alice in Chains',
    release_date: '07-30-1996',
    length: '298',
    price: 1.50,
  },
  {
    song_title: 'Brother',
    album_title: 'Unplugged',
    band_title: 'Alice in Chains',
    release_date: '07-30-1996',
    length: '327',
    price: 1.50,
  },
  {
    song_title: 'Rooster',
    album_title: 'Unplugged',
    band_title: 'Alice in Chains',
    release_date: '07-30-1996',
    length: '298',
    price: 1.50,
  },
  {
    song_title: 'What If',
    album_title: 'Human Clay',
    band_title: 'Creed',
    release_date: '01-30-1999',
    length: '318',
    price: 1.50,
  },
  {
    song_title: 'Never Die',
    album_title: 'Human Clay',
    band_title: 'Creed',
    release_date: '01-30-1999',
    length: '291',
    price: 1.50,
  },
  {
    song_title: 'Faceless Man',
    album_title: 'Human Clay',
    band_title: 'Creed',
    release_date: '01-30-1999',
    length: '359',
    price: 1.50,
  },
  {
    song_title: 'Black',
    album_title: 'Ten',
    band_title: 'Pearl Jam',
    release_date: '01-30-1991',
    length: '343',
    price: 1.50,
  },
  {
    song_title: 'Jeremy',
    album_title: 'Ten',
    band_title: 'Pearl Jam',
    release_date: '01-30-1991',
    length: '319',
    price: 1.50,
  },
  {
    song_title: 'Even Flow',
    album_title: 'Ten',
    band_title: 'Pearl Jam',
    release_date: '01-30-1991',
    length: '343',
    price: 1.50,
  },
  
  
];

const seedMusic = () => Music.bulkCreate(musicdata);

module.exports = seedMusic;
