export default () => {
    const tables = document.querySelectorAll('table');

    if (!tables.length)
        return;

    tables.forEach(t => {
        if (!t.parentElement?.classList.contains('table')) {
            const tableDiv = Object.assign(document.createElement('div'), { className: 'table' });

            t.before(tableDiv);
            tableDiv.append(t);
        }

        t.addEventListener('click', e => {
            const tableCell = e.target.closest('td');

            if (!tableCell)
                return;

            t.querySelectorAll('td.on').forEach(r => r.classList.remove('on'));
            tableCell.classList.add('on');
        });
    });
};
