document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('main table').forEach(t => {
        if (!t.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            t.parentNode.insertBefore(wrapper, t);
            wrapper.appendChild(t);
        }
    });
});
