// Smooth Scroll to Section
const scrollButtons = document.querySelectorAll('.scroll-btn');

scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Team Member Hover Interaction
const teamMembers = document.querySelectorAll('.team-member');
const teamMessage = document.getElementById('team-message');

teamMembers.forEach((member) => {
    member.addEventListener('mouseover', () => {
        const description = member.getAttribute('data-description');
        teamMessage.textContent = description;
    });

    member.addEventListener('mouseout', () => {
        teamMessage.textContent = ''; // Clear message on mouse out
  });
});
