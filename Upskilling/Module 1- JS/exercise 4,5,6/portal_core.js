//  MODULE 4: Functions & Closures
function trackCategoryRegistrations(categoryName) {
    let count = 0; // Remembers state inside closure scope
    return function() {
        count++;
        console.log(`Total registrations for [${categoryName}] track: ${count}`);
    };
}
const trackCodingRegs = trackCategoryRegistrations("Coding Contests");


// MODULE 5: Objects and Prototypes 
class CampusEvent {
    constructor(title, tracks, spots) {
        this.title = title;
        this.tracks = tracks;
        this.spots = spots;
    }
}


CampusEvent.prototype.checkAvailability = function() {
    return this.spots > 0;
};


// MODULE 6: Arrays and CRUD Methods 

const eventDatabase = [];


eventDatabase.push(new CampusEvent("CodeSprint 1.0", "Coding Contests", 25));
eventDatabase.push(new CampusEvent("Rock Show", "Music Events", 150));
eventDatabase.push(new CampusEvent("Debug Madness", "Coding Contests", 0));
eventDatabase.push(new CampusEvent("Symphony Concert", "Music Events", 40));


console.log("--- Object.entries() Breakdown ---");
Object.entries(eventDatabase[0]).forEach(([key, val]) => {
    console.log(`${key}: ${val}`);
});


console.log("--- Filtered Music Tracks ---");
const musicTracks = eventDatabase.filter(ev => ev.tracks === "Music Events");
console.log(musicTracks);


console.log("--- Formatted Titles via .map() ---");
const readableCards = eventDatabase.map(ev => `Workshop on ${ev.title}`);
console.log(readableCards);


trackCodingRegs();
trackCodingRegs();