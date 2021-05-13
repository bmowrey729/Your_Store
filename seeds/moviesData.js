const {Movies } = require('../models');

const moviedata = [
  {
    title: 'Top Gun',
    release_year: '1986',
    staring: 'Tom Cruise',
    co_staring: 'Anthony Edwards',
    director: 'Tony Scott',
    rateing: 'PG',
    category: 'Action\Adventure',
    length: '109',
    synopsis: 'Devil-may-care navy pilot Pete Mitchell (Tom Cruise) is sent to Miramar Naval Air Station for advanced training. Here he vies with Tom Kasansky (Val Kilmer) for the coveted "Top Gun" award. When not so occupied, Mitchell carries on a romance with civilian consultant Charlotte Blackwood (Kelly McGillis). Shaken up by the death of a friend, Mitchell loses the Top Gun honor to Kasansky. Worried that he may have lost his nerve, Mitchell is given a chance to redeem himself during a tense international crisis involving a crippled US vessel and a flock of predatory enemy planes',
    price: 19.99,
  },
  {
    title: 'Narc',
    release_year: '2002',
    staring: 'Ray Liotta',
    co_staring: 'Jason Patric',
    director: 'Joe Carnahan',
    rateing: 'R',
    category: 'Law\Crime',
    length: '105',
    synopsis: 'Jittery camera moves and a gray-blue palette make it clear that Narc is a gritty police drama in the tradition of The French Connection and Serpico. Jason Patric (Rush, Your Friends & Neighbors) plays Nick Tellis, a former undercover cop with an accidental death on his conscience, which may be why hes agreed to partner with Henry Oak (Ray Liotta), a lieutenant determined to track down the killers of his former partner. This could all be rote, but the grit sticks: writer-director Joe Carnahan takes a huge leap forward from his Tarentino-wannabe first film, Blood, Guts, Bullets & Octane. The entire cast is excellent; Patric and Liotta give rich, textured performances that make their respective obsessions vivid and sad. Narc could use more of the dark humor that occasionally bursts out, but the movies drive and energy make it more than a bleak tale of good intentions gone bad. --Bret Fetzer',
    price: 17.95,
  },
  {
    title: 'Apocalypse Now',
    release_year: '1979',
    staring: 'Martine sheen',
    co_staring: 'Marlon Brando',
    director: 'Francis Ford Coppola',
    rateing: 'R',
    category: 'War',
    length: '153',
    synopsis: 'Francis Coppola had more than his share of production difficulties while shooting his epic-scale Vietnam War drama Apocalypse Now, including disastrous weather conditions, problems with his leading men (Harvey Keitel was fired after less than two weeks on the project and was replaced by Martin Sheen, who suffered a heart attack midway through ',
    price: 19.99,
  },
  {
    title: 'Open Range',
    release_year: '2003',
    staring: 'Robert Duvall',
    co_staring: 'Kevin Costner',
    director: 'Kevin Costner',
    rateing: 'R',
    category: 'Western',
    length: '138',
    synopsis: 'evin Costner stars in and directs the Western Open Range. Robert Duvall stars as Boss Spearman, a rugged old-timer who free-grazes cattle. He and Charley Waite (Costner) have been partners for ten years. As the film opens in the 1880s, the pair and their employees -- the beefy, rugged, likable Mose (Abraham Benrubi) and the impetuous Mexican teenager Buttons (Diego Luna) -- are driving cattle across the West. Mose is attacked and thrown in jail during a visit to a town. The local cattle rancher Baxter (Michael Gambon) wants the free grazers off his land and warns Charley and Boss when they retrieve Mose that they have until the next day to be out of the area. Boss decides to fight back, especially after Baxters men do harm to the foursome. Charley confesses his past as a killer during the Civil War and strikes up a tentative romance with Sue Barlow -- the sister of the town doctor. The films centerpiece is an extended gunfight between the duo (with some assistance from sympathetic townsfolk) and Baxters hired gunmen. ~ Perry Seibert, All Movie Guide',
    price: 22.99,
  },
];

const seedMovies = () => Movies.bulkCreate(moviedata);

module.exports = seedMovies;
