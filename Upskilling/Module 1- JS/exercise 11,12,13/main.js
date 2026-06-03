//  MODULE 11: Working with Forms 
const form = document.querySelector("#registrationForm");
const statusAlert = document.querySelector("#statusAlert");


function clearErrors() {
    document.querySelector("#nameError").classList.add("d-none");
    document.querySelector("#emailError").classList.add("d-none");
    document.querySelector("#eventError").classList.add("d-none");
}

// Form Submis
form.onsubmit = function (event) {
    
    event.preventDefault();
    clearErrors();

  
    const nameInput = form.elements["studentName"].value.trim();
    const emailInput = form.elements["studentEmail"].value.trim();
    const eventInput = form.elements["selectedEvent"].value;

    //  MODULE 13: Debugging Logic 
    console.log("--- Debugging Form Payload Capture ---");
    console.log(`Inspecting values -> Name: "${nameInput}", Email: "${emailInput}", Track Selected: "${eventInput}"`);

    let hasErrors = false;

    if (!nameInput) {
        document.querySelector("#nameError").classList.remove("d-none");
        hasErrors = true;
    }
    if (!emailInput || !emailInput.includes("@")) {
        document.querySelector("#emailError").classList.remove("d-none");
        hasErrors = true;
    }
    if (!eventInput) {
        document.querySelector("#eventError").classList.remove("d-none");
        hasErrors = true;
    }

   
    if (hasErrors) {
        console.warn("Validation Stopped: Check payload inputs inside the UI view layout boundary.");
        return;
    }

 
    const payload = { studentName: nameInput, studentEmail: emailInput, courseTrack: eventInput };

    // Pass data forward to execute communication processing routines
    sendNetworkPayload(payload);
};


// MODULE 12: AJAX & Fetch API Simulation Framework 
function sendNetworkPayload(dataObject) {
    statusAlert.className = "alert alert-warning mt-3 small text-center";
    statusAlert.innerText = "Connecting to internal registration server...";
    statusAlert.classList.remove("d-none");

    console.log("Network status: Launching request packet dispatch...");

  
    setTimeout(function () {
        
  fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(dataObject),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP connection fault routine exception occurred.");
            }
            return response.json();
        })
        .then(function (jsonResult) {
            statusAlert.innerText = `Registration Secured! Reference ID generation match code: ${jsonResult.id}`;
            console.log("Server response payload matched successfully: ", jsonResult);
            
          
            form.reset();
        })
        .catch(function (networkError) {
            // Error pipeline fallback handling routines
            statusAlert.className = "alert alert-danger mt-3 small text-center";
            statusAlert.innerText = "Server unreachable. Please inspect backend environment pathways.";
            console.error("Fetch request failure: ", networkError);
        });

    }, 1500); 
}