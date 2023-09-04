// JavaScript code to dynamically populate the skills list

document.addEventListener('DOMContentLoaded', function() {
    // List of skills
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git'];

    // Select the skills list element by its ID
    const skillsList = document.getElementById('skills-list');

    // Iterate through the skills array and append each skill as a list item
    skills.forEach((skill, index) => {
        setTimeout(() => {
            const listItem = document.createElement('li');
            listItem.innerText = skill;
            skillsList.appendChild(listItem);
        }, index * 500);  // Delay each item by 500ms for a staggered effect
    });
});

