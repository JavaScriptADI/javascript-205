// ===============================================
// Class Work 1 — Playlist
// Tools: map · filter · find · reduce · some · arrow functions
// RULE: no `for` / `while` in this file. Array methods only.
// Run it after every task: node classWork_1.js
// ===============================================

const songs = [
    { title: "Suliko",         artist: "Nino",   seconds: 185, plays: 1200, liked: true  },
    { title: "Tbilisi Nights", artist: "Gio",    seconds: 242, plays: 860,  liked: false },
    { title: "Mountain Road",  artist: "Nino",   seconds: 318, plays: 2300, liked: true  },
    { title: "Rain",           artist: "Mariam", seconds: 147, plays: 410,  liked: true  },
    { title: "Old City",       artist: "Gio",    seconds: 276, plays: 1750, liked: false },
];


// --- Task 1 — map -------------------------------------------
// Make an array of just the titles.
// Expected: [ 'Suliko', 'Tbilisi Nights', 'Mountain Road', 'Rain', 'Old City' ]

const titles = songs.map(song => song.title);
console.log("1:", titles);


// --- Task 2 — map -------------------------------------------
// Make an array of the song lengths in whole minutes.
// Hint: Math.round(song.seconds / 60)
// Expected: [ 3, 4, 5, 2, 5 ]

const minutes = songs.map(song => Math.round(song.seconds / 60));
console.log("2:", minutes);


// --- Task 3 — filter + map ----------------------------------
// The titles of the liked songs only.
// Expected: [ 'Suliko', 'Mountain Road', 'Rain' ]

const likedTitles = songs.filter(song => song.liked).map(song => song.title);
console.log("3:", likedTitles);


// --- Task 4 — find ------------------------------------------
// Find the song called "Rain". You want ONE object, not an array.
// Expected: { title: 'Rain', artist: 'Mariam', seconds: 147, plays: 410, liked: true }

const rain = songs.find(song => song.title === "Rain");
console.log("4:", rain);


// --- Task 5 — reduce ----------------------------------------
// The length of the whole playlist in seconds.
// Expected: 1168

const totalSeconds = songs.reduce(
    (sum, song) => song.seconds + sum, 
    0
);
console.log("5:", totalSeconds);


// --- Task 6 — map, returning an object ----------------------
// Turn every song into { title, minutes }.
// Careful: an arrow function that returns an object needs ({ ... })
// Expected: [ { title: 'Suliko', minutes: 3 }, { title: 'Tbilisi Nights', minutes: 4 }, ... ]

const shortInfo = songs.map(song => ({
    title: song.title,
    minutes: Math.round(song.seconds / 60)
}))

// shortInfo.forEach(console.log);
console.log("6:", shortInfo);


// --- Task 7 — reduce ----------------------------------------
// The title of the most played song.
// Hint: keep the "best song so far", start from songs[0].
// Expected: Mountain Road

const mostPlayed = songs.reduce(
    (mostPlayedSong, song) => {
        if (mostPlayedSong.plays < song.plays) {
            return song;
        } 
        return mostPlayedSong;
    },
    songs[0]
);
console.log("7:", mostPlayed);


// --- Task 8 — some ------------------------------------------
// Is there at least one song longer than 5 minutes (300 seconds)?
// Expected: true

const hasLongSong = songs.some(song => song.seconds >= 5 * 60);
console.log("8:", hasLongSong);


// --- Task 9 — filter + reduce -------------------------------
// How many times were Nino's songs played in total?
// Expected: 3500

const ninoPlays = songs
    .filter(song => song.artist === "Nino")
    .reduce((plays, song) => plays + song.plays, 0);
console.log("9:", ninoPlays);


// --- Task 10 — stretch --------------------------------------
// Write summary(songs) that returns this text, using the methods above:
// Expected: 5 songs · 19 min · 3 liked

function summary(list) {
    const count = list.length;
    const totalDuration = Math.round(
        list.reduce((totalSeconds, song) => totalSeconds + song.seconds, 0) / 60
    );
    const totalLikes = list.reduce((likes, song) => song.liked ? likes + 1 : likes, 0);

    return `${count} songs * ${totalDuration} min * ${totalLikes} liked`;
}
console.log("10:", summary(songs));
