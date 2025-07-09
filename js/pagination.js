document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 8;
    const items = document.querySelectorAll('.property-item');
    const paginationLinks = document.querySelectorAll('.page-link');

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        items.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        paginationLinks.forEach(link => link.parentElement.classList.remove('active'));
        paginationLinks.forEach(link => {
            if (parseInt(link.dataset.page) === page) {
                link.parentElement.classList.add('active');
            }
        });
    }

    paginationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.dataset.page);
            if (!isNaN(page)) {
                showPage(page);
            }
        });
    });

    showPage(1);
});
