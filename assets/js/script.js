document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('search').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let projects = document.querySelectorAll('.project-card');

    projects.forEach(project => {
        let title = project.getAttribute('data-title').toLowerCase();
        project.style.display = title.includes(filter) ? "block" : "none";
    });
});
