export default () => {
    const tables = document.querySelectorAll('table');

    if (!tables.length)
        return;

    tables.forEach(t => {
        if (!t.parentElement?.classList.contains('table-wrapper')) {
            const tableDiv = Object.assign(document.createElement('div'), { className: 'table-wrapper' });

            t.before(tableDiv);
            tableDiv.append(t);
        }

        t.addEventListener('click', e => {
            const tableCell = e.target.closest('td');

            if (!tableCell)
                return;

            t.querySelectorAll('td.table__cell--on').forEach(r => r.classList.remove('table__cell--on'));
            tableCell.classList.add('table__cell--on');
        });
    });
};
