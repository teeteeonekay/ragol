export default () => {
    const contentsHeading = document.querySelector('h2#contents');
    const contentsNodes = [];
    const contentsDiv = Object.assign(document.createElement('div'), { className: 'contents' });

    for (let node = contentsHeading.nextElementSibling; node && node.tagName !== 'HR'; node = node.nextElementSibling) {
        contentsNodes.push(node);
    }

    contentsHeading.before(contentsDiv);
    contentsDiv.append(contentsHeading);
    contentsDiv.append(...contentsNodes);
};
