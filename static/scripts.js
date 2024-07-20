
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggleButtons = document.querySelectorAll('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    sidebarToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-closed');
            mainContent.classList.toggle('full-width');
        });
    });
});
