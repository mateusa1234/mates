// profile.js

// Sample profile information
const userProfile = {
    username: 'JohnDoe',
    uploadedPhotos: 5,
    totalBids: 12,
    totalSpent: 250
};

// Function to display profile information
function displayProfileInfo() {
    const profileInfoContainer = document.querySelector('.profile-info');
    profileInfoContainer.innerHTML = `
        <p><strong>Username:</strong> ${userProfile.username}</p>
        <p><strong>Uploaded Photos:</strong> ${userProfile.uploadedPhotos}</p>
        <p><strong>Total Bids:</strong> ${userProfile.totalBids}</p>
        <p><strong>Total Spent:</strong> ${userProfile.totalSpent}$</p>
    `;
}

// Event listener to display profile information when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayProfileInfo();
});
// Function to preview profile picture
function previewProfilePicture(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-picture").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Function to save profile
function saveProfile() {
    const bio = document.getElementById("bio").value;
    // You can add additional fields such as name, email, etc.

    // Here you can handle saving profile data to a server or local storage
    // For demonstration purposes, let's just log the profile data
    console.log("Bio:", bio);
    // You can add more profile data logging or saving operations here
}
// Function to preview profile picture
function previewProfilePicture(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-picture").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Function to edit profile
function editProfile() {
    const bio = document.getElementById("bio");
    const bioText = bio.innerText;
    const bioTextarea = document.createElement("textarea");
    bioTextarea.value = bioText;
    bio.replaceWith(bioTextarea);

    const editButton = document.querySelector(".profile-stats button");
    editButton.innerText = "Save";
    editButton.onclick = saveProfile;

    // You can similarly allow editing other profile information such as name, email, etc.
}

// Function to save profile
function saveProfile() {
    const bioTextarea = document.querySelector(".profile-stats textarea");
    const newBio = bioTextarea.value;
    const bio = document.createElement("span");
    bio.innerText = newBio;
    bioTextarea.replaceWith(bio);

    const saveButton = document.querySelector(".profile-stats button");
    saveButton.innerText = "Edit Profile";
    saveButton.onclick = editProfile;

    // Here you can handle saving profile data to a server or local storage
    // For demonstration purposes, let's just log the profile data
    console.log("New Bio:", newBio);
    // You can add more profile data logging or saving operations here
}

// Function to display user's posts (dummy data)
function displayUserPosts() {
    const userPostsDiv = document.querySelector(".user-posts");
    // Assuming posts is an array of post objects, replace it with your actual data
    const posts = [
        { id: 1, imageUrl: "post1.jpg", caption: "Great day at the beach!" },
        { id: 2, imageUrl: "post2.jpg", caption: "Exploring the city streets." },
        // Add more post objects as needed
    ];

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <img src="${post.imageUrl}" alt="Post Image">
            <p>${post.caption}</p>
        `;
        userPostsDiv.appendChild(postDiv);
    });

    // Update post count
    document.getElementById("post-count").innerText = posts.length;
}

// Call the function to display user's posts
displayUserPosts();

