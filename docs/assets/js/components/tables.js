export default () => {
    const tables = document.querySelectorAll('table');

    if (!tables.length)
        return;

    tables.forEach(t => {
        const tableDiv = Object.assign(document.createElement('div'), { className: 'table' });

        t.before(tableDiv);
        tableDiv.append(t);
    });
};
