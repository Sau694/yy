document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-card img");
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Modal inner content
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" alt="Expanded View">
    `;

    document.body.appendChild(modal);

    const modalImage = modal.querySelector(".modal-content");
    const closeBtn = modal.querySelector(".close");

    // Open modal on image click
    images.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = img.src;
        });
    });

    // Close modal when clicking close button or outside modal image
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
//video
document.addEventListener('DOMContentLoaded', function() {
    const videoSlides = document.querySelectorAll('.video-slide');
    let activeIndex = 0;

    // Function to show the active video
    function showVideo(index) {
        // Hide all videos
        videoSlides.forEach((slide) => slide.classList.remove('active'));
        // Show the active video
        videoSlides[index].classList.add('active');
        // Play the video
        const video = videoSlides[index].querySelector('video');
        video.play();
    }

    // Initialize by showing the first video
    showVideo(activeIndex);

    // Add event listeners to detect when a video ends
    videoSlides.forEach((slide, index) => {
        const video = slide.querySelector('video');
        video.addEventListener('ended', () => {
            // Move to the next video
            activeIndex = (activeIndex + 1) % videoSlides.length;
            showVideo(activeIndex);
        });
    });
});
