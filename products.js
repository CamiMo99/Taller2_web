const products = [{
        name: 'kill this love',
        img: '/data/kill.jpg',
        nameG: 'BLACKPINK',
        typeG: 'Female group',
        company: 'YG entertainment',
        imgDes: '/data/Dkill.jpg',
        imgSell: '/data/Pkill.jpg',
        miniTitle: 'BLACKPINK Mini Album Vol. 2 - KILL THIS LOVE',
        intro: '* CD + Booklet (52 P) + Photo Zine (16 P) + Accordion Lyrics Book (10 P) + 4 Random Photocards + 1 Random Polaroid + Sticker Set + Folded Poster (On Pack).',
        date: 2019,
        price: 16.35,
    },
    {
        name: 'timeless',
        img: '/data/suju.jpg',
        nameG: 'Super Junior',
        typeG: 'Male group',
        company: 'SM Entertainment',
        imgDes: '/data/Dsuju.jpg',
        imgSell: '/data/Psuju.jpg',
        miniTitle: 'Super Junior Vol. 9 - TIMELESS',
        intro: '* CD + Booklet (104 P) + Random Tag + Folded Poster (On Pack) + Random Photocard * Provided totally random.',
        date: 2019,
        price: 17.08,
    },
    {
        name: 'Layers',
        img: '/data/layer.jpg',
        nameG: 'Ong Seong Wu',
        typeG: 'solo',
        company: 'Fantagio',
        imgDes: '/data/Dlayer.jpg',
        imgSell: '/data/Player.jpg',
        miniTitle: 'Ong Seong Wu Mini Album Vol. 1 - LAYERS',
        intro: '* CD + Booklet (124 P) + Name Card * Postcard Set : Preorder benefit. First press only.',
        date: 2020,
        price: 11.48,
    },
    {
        name: 'Reality in black',
        img: '/data/mamamoo.jpg',
        nameG: 'MAMAMOO',
        typeG: 'Female group',
        company: 'Victor Entertainment',
        imgDes: '/data/Dmamamoo.jpg',
        imgSell: '/data/Pmamamoo.jpg',
        miniTitle: 'MAMAMOO Album Vol. 2 - Reality In BLACK',
        intro: '* CD + Booklet (80 P) + Lenticular Card + Lyrics Card (12 P) + Random Photocard (2 P)',
        date: 2019,
        price: 15.55,
    },
    {
        name: 'DYE',
        img: '/data/got7.jpg',
        nameG: 'GOT7',
        typeG: 'Male group',
        company: 'JYP Entertainment',
        imgDes: '/data/Ddye.jpg',
        imgSell: '/data/Pdye.jpg',
        miniTitle: 'GOT7 Mini Album - DYE',
        intro: '* CD + Booklet (80 P) + Random Bookmark + Random Photocard (2 P) * Random GOT7 Tourlog Photo Essay Vol. 2 (60 P) + Random Lyrics Postcard : Preorder benefit. First press only. * Provided totally random. If purchased 2 or more copies, different version albums will be provided.',
        date: 2020,
        price: 13.69,
    },
    {
        name: 'Color on me',
        img: '/data/color.jpg',
        nameG: 'Kang Daniel',
        typeG: 'Solo',
        company: 'Konnect Entertainment',
        imgDes: '/data/Dcolor.jpg',
        imgSell: '/data/Pcolor.jpg',
        miniTitle: 'Kang Daniel Mini Album - Color On Me',
        intro: '* CD + Booklet (76 P) + 1 Random Clear Film + 1 Random Photocard + Postcard (3 P) + Sticker + Bookmark',
        date: 2019,
        price: 14.13,
    },
    {
        name: 'The perfect red',
        img: '/data/red.jpg',
        nameG: 'Red Velvet',
        typeG: 'Female group',
        company: 'SM Entertainment',
        imgDes: '/data/Dred.jpg',
        imgSell: '/data/Pred.jpg',
        miniTitle: 'Red Velvet Vol. 2 - THE PERFECT RED VELVET',
        intro: '* CD + Booklet (56 P) + Lyrics Sheet (24 P) + 1 Random Photocard',
        date: 2018,
        price: 14.99,
    },
    {
        name: 'Map of soul: 7',
        img: '/data/bts.jpg',
        nameG: 'BTS',
        typeG: 'Male group',
        company: 'BigHit',
        imgDes: '/data/Dbts.jpg',
        imgSell: '/data/Pbts.jpg',
        miniTitle: 'BTS - MAP OF THE SOUL : 7',
        intro: '* CD + Booklet (36 P) + Lyric Book (52 P) + Mini Book (20 P) + Random Photocard + Postcard + Sticker + Coloring Paper * Provided totally random. If purchased 4 or more copies, 4 different version albums will be provided.',
        date: 2020,
        price: 20.42,
    },

    {
        name: 'WHY?',
        img: '/data/why.jpg',
        nameG: 'Jeong Min',
        typeG: 'Solo',
        company: 'Startship Entertainment',
        imgDes: '/data/Dwhy.jpg',
        imgSell: '/data/Pwhy.jpg',
        miniTitle: 'JEONG MIN Single Album Vol. 2 - Why?',
        intro: '* CD + Booklet (20 P) + 1 Random Photocard * Secret Card : Totally random. Included in part of first press albums only.',
        date: 2019,
        price: 13.47,
    },
    {
        name: 'I trust',
        img: '/data/trust.jpg',
        nameG: '(G)I-DLE',
        typeG: 'Female group',
        company: 'Cube Entertainment',
        imgDes: '/data/Dtrust.jpg',
        imgSell: '/data/Ptrust.jpg',
        miniTitle: '(G)I-DLE Mini Album Vol. 3 - I TRUST',
        intro: '* CD + Booklet (100 P) + Random Brochure + Random Mini Poster (On Pack) + Random Photocard + Random Translucent Photocard + Random Lenticular Photocard (First press only)',
        date: 2020,
        price: 11.89,
    },
    {

        name: 'One & only',
        img: '/data/astro.jpg',
        nameG: 'ASTRO',
        typeG: 'Male group',
        company: 'Fantagio',
        imgDes: '/data/Donly.jpg',
        imgSell: '/data/Ponly.jpg',
        miniTitle: 'ASTRO Special Single Album - ONE & ONLY',
        intro: '* CD + Booklet (72 P) + Random Message Card + Random Photocard (Group 1 P, Selfie 1 P) * Signed Polaroid : Totally random. Included in part of first press albums only.',
        date: 2020,
        price: 10.55,
    },
    {

        name: 'Flourishing',
        img: '/data/chungHa.jpg',
        nameG: 'Chung Ha',
        typeG: 'Solo',
        company: 'MNH Entretainment',
        imgDes: '/data/Dchunga.jpg',
        imgSell: '/data/Pchunga.jpg',
        miniTitle: 'Chung Ha Mini Album Vol. 4 - Flourishing',
        intro: '* CD + Booklet (76 P) + Lyrics (8 P) + 1 Random Postcard + 1 Random Photocard',
        date: 2019,
        price: 13.48,
    },
    {

        name: 'ITZ ICY',
        img: '/data/itzy.jpg',
        nameG: 'ITZY',
        typeG: 'Female group',
        company: 'JYP Entertainment',
        imgDes: '/data/Ditzy.jpg',
        imgSell: '/data/Pitzy.jpg',
        miniTitle: 'ITZY - IT’z ICY',
        intro: '* CD + Photobook (80 P) * Provided totally random.',
        date: 2019,
        price: 11.76,
    },
    {

        name: 'Dazzle Dazzle',
        img: '/data/weki.jpg',
        nameG: 'Weki Meki',
        typeG: 'Female group',
        company: 'Fantagio',
        imgDes: '/data/Dweki.jpg',
        imgSell: '/data/Pweki.jpg',
        miniTitle: 'Weki Meki DIGITAL SINGLE DAZZLE DAZZLE OFFICIAL MD - CONCEPT POSTCARD BOOK',
        intro: '* Color Pet Sleeve + Postcard Book (30 P) + Random Selfie Photocard',
        date: 2020,
        price: 12.59,
    },
    {

        name: 'Obsession',
        img: '/data/exo.jpg',
        nameG: 'EXO',
        typeG: 'Male group',
        company: 'SM Entertainment',
        imgDes: '/data/Dexo.jpg',
        imgSell: '/data/Pexo.jpg',
        miniTitle: 'EXO Album Vol. 6 - OBSESSION',
        intro: '* CD + Lyric Book (32 P) + Booklet (20 P * 6 EA) + Folded Poster (On Pack) + Photo Slide + Random Photocard * Provided totally random.',
        date: 2019,
        price: 16.53,
    },
    {

        name: 'Love poem',
        img: '/data/lovepoem.jpg',
        nameG: 'IU',
        typeG: 'solo',
        company: 'Kakao M',
        imgDes: '/data/Dlove.jpg',
        imgSell: '/data/Plove.jpg',
        miniTitle: 'IU Mini Album Vol. 5 - Love Poem',
        intro: '* CD + Booklet (112 P) + Photocard + Bookmark',
        date: 2019,
        price: 12.99,
    },
    {

        name: 'fantasia',
        img: '/data/monsta.jpg',
        nameG: 'MONSTA X',
        typeG: 'Male group',
        company: 'Startship Entertainment',
        imgDes: '/data/Dmonsta.jpg',
        imgSell: '/data/Pmonsta.jpg',
        miniTitle: 'MONSTA X Mini Album - FANTASIA X',
        intro: '* CD + Booklet (108 P) + Random Photocard + Sticker * Unit Photocard + Color Polaroid + Triangle Stand : Preorder benefit. First press only.',
        date: 2020,
        price: 28.99,
    },
    {

        name: 'plant',
        img: '/data/plant.jpg',
        nameG: 'Se Jeong',
        typeG: 'Solo',
        company: 'Jellyfish Entertainment',
        imgDes: '/data/Dplant.jpg',
        imgSell: '/data/Pplant.jpg',
        miniTitle: 'Se Jeong (Gugudan) Mini Album Vol. 1 - Plant',
        intro: '* CD + Booklet (64 P) + Random Bookmark + Random Postcard + Se Jeongs Letter + Random Photocard',
        date: 2020,
        price: 11.45,
    },
    {

        name: 'Poison',
        img: '/data/poison.jpg',
        nameG: 'VAV',
        typeG: 'Male group',
        company: 'Ateam',
        imgSell: '/data/Ppoison.jpg',
        imgDes: '/data/Dpoison.jpg',
        miniTitle: 'VAV Mini Album Vol. 5 - POISON',
        intro: '* CD + Booklet (88 P) + Folded Poster (On Pack) + 1 Random Photocard',
        date: 2019,
        price: 11.12,
    },
    {

        name: 'going seventeen',
        img: '/data/seventeen.jpg',
        nameG: 'Seventeen',
        typeG: 'Male group',
        company: 'Pledis Entertainment',
        imgDes: '/data/Dseven.jpg',
        imgSell: '/data/Pseventeen.jpg',
        miniTitle: 'Seventeen Mini Album Vol.3 - Going Seventeen',
        intro: '* CD + Booklet (100 P) + Lyrics Paper (8 P) + Boarding Declaration Sheet + 1 Random Member Photocard + 1 Random Unit Photocard + 1 Random Paddle Bookmark',
        date: 2016,
        price: 14.15,
    },

    {

        name: 'gateway',
        img: '/data/gateway.jpg',
        nameG: 'Astro',
        typeG: 'Male group',
        company: 'Fantagio',
        imgDes: '/data/Dgateway.jpg',
        imgSell: '/data/Pgateway.jpg',
        miniTitle: 'ASTRO Mini Album Vol. 7 - GATEWAY',
        intro: '* CD + Booklet (72 P) + Folding Postcard + Random Selfie Photocard (2 P) + Random Folding Poster (On Pack)',
        date: 2020,
        price: 18.25,
    },
];
module.exports = products;