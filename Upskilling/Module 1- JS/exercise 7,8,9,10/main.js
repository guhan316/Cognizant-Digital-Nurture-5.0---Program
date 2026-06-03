// === MODULE 10: Modern JavaScript Features & State ===
// Ex 10.1: Proper variable scopes
let initialEvents = []; 

// Ex 7.1: Accessing DOM element nodes cleanly
const container = document.querySelector("#eventContainer");
const categorySelect = document.querySelector("#categoryFilter");
const searchField = document.querySelector("#searchInput");
const spinner = document.querySelector("#loadingSpinner");

// === MODULE 9: Async JS, Promises, & Mock Async/Await fetch simulations ===
// Ex 9.3: Simulating a promise-based server delay fetch operation
async function fetchPortalContent() {
    // Show spinner UI element
    spinner.classList.remove("d-none");
    container.innerHTML = ""; 

    try {
        // Simulating standard server delay latency
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Mock data matching regular campus activities
        initialEvents = [
            { id: 101, title: "Mock Technical Interview Drive", track: "Placement", remainingSpots: 4 },
            { id: 102, title: "Inter-College Hackathon 2026", track: "Technical", remainingSpots: 1 },
            { id: 103, title: "Java Spring Boot Masterclass", track: "Technical", remainingSpots: 0 }
        ];
        
        // Render out the data
        renderCards(initialEvents);
    } catch (error) {
        console.error("Data load issue: ", error);
    } finally {
        // Hide loading animation spinner on termination
        spinner.classList.add("d-none");
    }
}

// === MODULE 7 & 10: Dynamic Creation & ES6 implementation ===
// Ex 10.1: Default parameter argument fallback configuration
function renderCards(targetArray = []) {
    container.innerHTML = ""; 

    if (targetArray.length === 0) {
        container.innerHTML = `<p class="text-center text-muted">No relevant events found.</p>`;
        return;
    }

    targetArray.forEach(function(item) {
        // Ex 10.2: Destructuring out values directly from object keys
        const { id, title, track, remainingSpots } = item;

        // Ex 7.2: Creating physical dynamic card container blocks
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-6";

        // Simple string injection containing basic structural status labels
        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm border">
                <div class="card-body">
                    <span class="badge bg-secondary mb-2">${track}</span>
                    <h5 class="card-title text-dark">${title}</h5>
                    <p class="small text-muted mb-3" id="spot-count-${id}">Available Seats: ${remainingSpots}</p>
                    <button class="btn btn-sm ${remainingSpots > 0 ? 'btn-dark' : 'btn-secondary disabled'}" 
                            id="btn-${id}" onclick="handleBooking(${id})">
                        ${remainingSpots > 0 ? 'Register Now' : 'Housefull'}
                    </button>
                </div>
            </div>
        `;
        // Appending element safely back to layout tree node
        container.appendChild(colDiv);
    });
}

// === MODULE 7 & 8: Event Handlers and Interactive Action Methods ===
// Ex 8.1: Action controller linked explicitly from inline onclick attributes
window.handleBooking = function(eventId) {
    // Find target element references inside arrays
    const targetEvent = initialEvents.find(ev => ev.id === eventId);
    
    if (targetEvent && targetEvent.remainingSpots > 0) {
        // Ex 7.3: Modify state data array value structures
        targetEvent.remainingSpots--; 
        
        // Ex 7.3: Dynamically manipulate UI nodes directly to reflect update
        const labelText = document.querySelector(`#spot-count-${eventId}`);
        const actionBtn = document.querySelector(`#btn-${eventId}`);
        
        labelText.innerText = `Available Seats: ${targetEvent.remainingSpots}`;
        
        if (targetEvent.remainingSpots === 0) {
            actionBtn.innerText = "Housefull";
            actionBtn.className = "btn btn-sm btn-secondary disabled";
        }
    }
};

// Ex 10.3: Cloning database structures via spread arrays before mutation filtering
function filterPortalView() {
    const activeCategory = categorySelect.value;
    const query = searchField.value.toLowerCase().trim();

    // Clone source array instance cleanly
    const localClone = [...initialEvents];

    const processedOutput = localClone.filter(function(ev) {
        const matchesCategory = (activeCategory === "All" || ev.track === activeCategory);
        const matchesSearch = ev.title.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    renderCards(processedOutput);
}

// Ex 8.2: Onchange trigger handling
categorySelect.onchange = filterPortalView;

// Ex 8.3: Keydown stroke capture binding
searchField.onkeydown = function() {
    // Tiny timeout ensures typing buffer parses smoothly inside input elements
    setTimeout(filterPortalView, 10);
};

// Initial page activation boot trigger execution sequence
fetchPortalContent();