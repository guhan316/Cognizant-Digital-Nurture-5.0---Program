
// Ex 2.1: Declaring event details using correct keywords
const eventName = "National Level Tech Symposium"; 
const eventDate = "2026-09-15";
let availableSeats = 3; 

// Ex 2.2: Template literal concatenation
console.log(`Event: ${eventName} is scheduled on ${eventDate}. Remaining seats: ${availableSeats}`);


// MODULE 3: Conditionals, Loops, and Error Handling 

const studentEvents = [
    { name: "Web Dev Workshop", date: "2026-10-05", seats: 10, isPast: false },
    { name: "Legacy C Programming", date: "2025-02-10", seats: 5, isPast: true }, // Past event
    { name: "Cyber Security Hackathon", date: "2026-11-20", seats: 0, isPast: false } // Future event
];

console.log("--- Filtering Available Student Events ---");

// Ex 3.1 & 3.2: Use loop and if-else 
studentEvents.forEach(function(item) {
    if (item.isPast || item.seats <= 0) {
        console.log(`Hidden: ${item.name} (Either past event or housefull)`);
    } else {
        console.log(`Displayed: ${item.name} - ${item.seats} seats left`);
    }
});

// Ex 3.3: Try-Catch registration
function registerStudent() {
    try {
        console.log("Attempting booking process...");
        if (availableSeats <= 0) {
            throw new Error("Registration Failed: No seats left in this slot!");
        }
        availableSeats--;
        console.log(`Registration Success! Remaining slots left: ${availableSeats}`);
    } catch (err) {
        console.error(err.message);
    }
}


registerStudent();
registerStudent();