
// Show or Hide the social section
function toggleSocial() {
    const socialSection = document.getElementById('social');
    socialSection.classList.toggle('hide-this');
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Document has been loaded');
    const socialTogglerButton = document.getElementById('socialToggler');
    console.log(socialTogglerButton);

    // Add event istener for button click
    socialTogglerButton.addEventListener('click', function () {
        console.log('Clicked');
        toggleSocial();
    })
});
