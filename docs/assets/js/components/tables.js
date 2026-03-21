export default () => {
    const tables = document.querySelectorAll('table');

    if (!tables.length)
        return;

    tables.forEach(t => {
        const tableDiv = Object.assign(document.createElement('div'), { className: 'table' });
        const tableThs = t.querySelectorAll('th');
        const tableTds = t.querySelectorAll('td');

        t.before(tableDiv);
        tableDiv.append(t);

        tableThs.forEach(d => {
            const textContent = d.textContent.trim();

            if (textContent === 'DEF') {
                d.classList.add('def');
            } else if (textContent === 'POW') {
                d.classList.add('pow');
            } else if (textContent === 'DEX') {
                d.classList.add('dex');
            } else if (textContent === 'MIND') {
                d.classList.add('mind');
            }
        });
        
        tableTds.forEach(d => {
            const textContent = d.textContent.trim();

            if (textContent.startsWith('±')) {
                d.classList.add('zero');
            } else if (textContent.startsWith('+')) {
                d.classList.add('positive');
            } else if (textContent.startsWith('-')) {
                d.classList.add('negative');
            }
        });
    });
};
