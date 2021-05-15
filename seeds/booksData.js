const { Books } = require('../models');

const booksdata = [
  {
    title: 'Command and Control',
    author: 'ERIC SCHLOSSER',
    release_date: '2002',
    synopsis: 'Famed investigative journalist Eric Schlosser digs deep to uncover secrets about the management of America’s nuclear arsenal. A ground-breaking account of accidents, near-misses, extraordinary heroism, and technological breakthroughs, Command and Control explores the dilemma that has existed since the dawn of the nuclear age: how do you deploy weapons of mass destruction without being destroyed by them? That question has never been resolved--and Schlosser reveals how the combination of human fallibility and technological complexity still poses a grave risk to mankind.',
    length: '675',
    price: 16.95,
  },
  {
    title: 'Lone Survivor',
    author: 'Marcus Luttrell',
    release_date: '2010',
    synopsis: 'This is the story of fire team leader Marcus Luttrell, the sole survivor of Operation Redwing, and the desperate battle in the mountains that led, ultimately, to the largest loss of life in Navy SEAL history. But it is also, more than anything, the story of his teammates, who fought ferociously beside him until he was the last one left-blasted unconscious by a ',
    length: '390',
    price: 16.95,
  },
  {
    title: 'From the Shadows',
    author: 'Robert M. Gates',
    release_date: '2010',
    synopsis: 'From the former secretary of defense, a strikingly candid, vivid account of serving Presidents George W. Bush and Barack Obama during the wars in Iraq and Afghanistan.    When Robert M. Gates received a call from the White House, he thought he’d long left Washington politics behind: After working for six presidents in both the CIA and the National Security Council, he was happily serving as president of Texas A&M University. But when he was asked to help a nation mired in two wars and to aid the troops doing the fighting, he answered what he felt was the call of duty.',
    length: '673',
    price: 22.95,
  },
  {
    title: 'Last Ape Standing',
    author: 'Chip Walter',
    release_date: '2011',
    synopsis: 'Over the past 150 years scientists have discovered evidence that at least twenty-seven species of humans evolved on planet Earth. These werent simply variations on apes, but upright-walking humans who lived side by side, competing, cooperating, sometimes even mating with our direct ancestors. Why did the line of ancient humans who eventually ',
    length: '236',
    price: 11.99,
  },
  {
    title: 'The Rise and Fall of the Third Reich',
    author: ' William L. Shirer',
    release_date: '1960',
    synopsis: 'When the Third Reich fell, it fell swiftly. The Nazis had little time to cover up their memos, their letters, or their diaries. William L. Shirers definitive book on the Third Reich uses these unique sources. Combined with his personal experience with the Nazis, living through the war as an international correspondent, The Rise and Fall of the Third Reich not only earned Shirer a National Book Award but is recognized as one of the most important and authoritative books about the Third Reich and Nazi Germany ever written. The diaries of propaganda minister Joseph Goebbels as well as evidence and other testimony gained at the Nuremberg Trials could not have found more artful hands.',
    length: '1266',
    price: 10.81,
  },
  
];

const seedBooks = () => Books.bulkCreate(booksdata);

module.exports = seedBooks;
