document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const projects = document.querySelectorAll('.gallery-item');

    projects.forEach(project => {
        const text = project.querySelector('.text').innerText.toLowerCase();
        if (text.includes(query)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
});
