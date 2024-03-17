


// Function to display user profile information
function displayProfile() {
    // Sample data for demonstration purposes
    const userProfile = {
        username: 'JohnDoe',
        uploadedPhotos: 5,
        totalBids: 12,
        totalSpent: 250
    };

    const profileInfo = document.querySelector('.profile-info');
    profileInfo.innerHTML = `
        <p><strong>Username:</strong> ${userProfile.username}</p>
        <p><strong>Uploaded Photos:</strong> ${userProfile.uploadedPhotos}</p>
        <p><strong>Total Bids:</strong> ${userProfile.totalBids}</p>
        <p><strong>Total Spent:</strong> ${userProfile.totalSpent}$</p>
    `;
}

// Function to handle clicking on the Home tab
function goToHome() {
    // Add code to navigate to the Home page
    console.log('Navigating to Home page');
}

function addBid() {
    // Add your code to handle bidding here
    console.log('Bid placed');
    // You can add functionality to update the bid amount or perform other actions here
}

// Function to handle clicking on the Profile tab
function goToProfile() {
    // Add code to navigate to the Profile page
    console.log('Navigating to Profile page');
}

// Function to handle clicking on the About tab
function goToAbout() {
    // Add code to navigate to the About page
    console.log('Navigating to About page');
}

// Function to handle clicking on the Contact tab
function goToContact() {
    // Add code to navigate to the Contact page
    console.log('Navigating to Contact page');
}
let photoPrice = 0;
let totalPrice = 0;
let numUsers = 0;

function previewPhoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('uploaded-photo').setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function updatePrice() {
    document.getElementById('photo-price').value = photoPrice;
}

function addBid() {
    const bidAmount = 7;
    const fullPrice = photoPrice;
    if (totalPrice + bidAmount <= fullPrice) {
        totalPrice += bidAmount;
        numUsers++;
        document.getElementById('total-price').textContent = totalPrice + '$';
        document.getElementById('num-users').textContent = numUsers;
    } else {
        alert("You've reached the full price to buy the picture.");
    }
}

window.onload = function() {
    // Assuming the uploader sets the price programmatically
    photoPrice = 300;
    updatePrice();
};

// Create a new image element
const newImage = document.createElement('img');

// Set image attributes
newImage.src = 'image.jpg'; // Specify the path to your image
newImage.alt = 'Description of the image';
newImage.width = 300; // Set width of the image
newImage.height = 200; // Set height of the image

// Get the container where you want to append the image
const container = document.querySelector('.image-container');
// Set the source and other attributes of the image
newImage.src = 'path_to_your_image.jpg';
newImage.alt = 'Description of the image'; // Add an alt attribute for accessibility


// Append the image to the container
container.appendChild(newImage);

// Call the displayProfile function when the page loads
window.onload = function() {
    displayProfile();
};
// Function to logout the user
function logout() {
    // Clear user session (e.g., remove authentication token)
    // Example: localStorage.removeItem('authToken');

    // Redirect to login page
    window.location.href = 'path/to/login.html'; // Replace 'path/to/login.html' with the correct file pa}

// Add event listener to logout button
document.getElementById('logout-button').addEventListener('click', logout);
}
// Sample photo data (replace with your actual data)
const photos = [
    { id: 1, title: "Sunset", category: "landscape", tags: ["sunset", "nature"], price: 20 },
    { id: 2, title: "Mountains", category: "landscape", tags: ["mountains", "nature"], price: 25 },
    { id: 3, title: "Portrait", category: "portrait", tags: ["people", "portrait"], price: 15 },
    // Add more photo objects as needed
];

// Function to render filtered photos
function renderPhotos(photos) {
    const photoGallery = document.getElementById("photo-gallery");
    photoGallery.innerHTML = "";

    photos.forEach(photo => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");
        photoDiv.innerHTML = `
            <img src="path/to/${photo.id}.jpg" alt="${photo.title}">
            <h3>${photo.title}</h3>
            <p>Price: $${photo.price}</p>
        `;
        photoGallery.appendChild(photoDiv);
    });
}

// Function to apply filters
function applyFilters() {
    const categoryFilter = document.getElementById("category-filter").value;
    const tagFilter = document.getElementById("tag-filter").value.toLowerCase();
    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;

    // Filter photos based on selected criteria
    let filteredPhotos = photos.filter(photo => {
        const categoryMatch = categoryFilter === "all" || photo.category === categoryFilter;
        const tagMatch = photo.tags.some(tag => tag.includes(tagFilter));
        const priceMatch = (!minPrice || photo.price >= minPrice) && (!maxPrice || photo.price <= maxPrice);
        return categoryMatch && tagMatch && priceMatch;
    });

    renderPhotos(filteredPhotos);
}

// Function to reset filters
function resetFilters() {
    document.getElementById("category-filter").value = "all";
    document.getElementById("tag-filter").value = "";
    document.getElementById("min-price").value = "";
    document.getElementById("max-price").value = "";

    renderPhotos(photos); // Reset to display all photos
}

// Initial rendering of all photos
renderPhotos(photos);
// Function to simulate searching for photos
function searchPhotos() {
    // Get the search term from the input field
    const searchTerm = document.getElementById('search-input').value;

    // Display search term in console (for demonstration)
    console.log('Search term:', searchTerm);

    // Here, you can implement logic to fetch photos from the server based on the search term
    // For demonstration, let's simulate fetching results and display them in the results section
    displaySearchResults(['Photo 1', 'Photo 2', 'Photo 3']); // Passing sample search results
}
// Function to display search results
function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('search-results');

    // Clear previous search results
    searchResultsDiv.innerHTML = '';

    // Display search results
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result;
        searchResultsDiv.appendChild(resultItem);
    });
}
