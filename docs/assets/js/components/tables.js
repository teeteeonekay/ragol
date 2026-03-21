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

        tableThs.forEach(h => {
            const textContent = h.textContent.trim();

            if (textContent === 'DEF') {
                h.classList.add('stat', 'def');
            } else if (textContent === 'POW') {
                h.classList.add('stat', 'pow');
            } else if (textContent === 'DEX') {
                h.classList.add('stat', 'dex');
            } else if (textContent === 'MIND') {
                h.classList.add('stat', 'mind');
            }
        });
        
        tableTds.forEach(d => {
            const textContent = d.textContent.trim();

            if (textContent.startsWith('±')) {
                d.classList.add('stat', 'zero');
            } else if (textContent.startsWith('+')) {
                d.classList.add('stat', 'positive');
            } else if (textContent.startsWith('-')) {
                d.classList.add('stat', 'negative');
            }
        });
    });
};
