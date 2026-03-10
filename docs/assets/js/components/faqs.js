export default () => {
    const faqsHeading = document.querySelector('h2#faqs');
    const faqNodes = [];
    const faqsDiv = Object.assign(document.createElement('div'), { className: 'faqs' });

    for (let node = faqsHeading.nextElementSibling; node && node.tagName !== 'HR'; node = node.nextElementSibling) {
        switch (node.tagName) {
            case 'H3':
                faqNodes.push({ questionNode: node, answerNodes: [] });
                break;
            default:
                faqNodes[faqNodes.length - 1].answerNodes.push(node);
                break;
        }
    }

    faqsHeading.before(faqsDiv);
    faqsDiv.append(faqsHeading);

    faqNodes.forEach(n => {
        const questionDiv = Object.assign(document.createElement('div'), { className: 'question' });
        const questionButton = document.createElement('button');
        const answerDiv = Object.assign(document.createElement('div'), { className: 'answer' });

        while (n.questionNode.firstChild) {
            questionButton.append(n.questionNode.firstChild);
        }

        n.questionNode.append(questionButton);
        questionDiv.append(n.questionNode, answerDiv);
        faqsDiv.append(questionDiv);
        answerDiv.append(...n.answerNodes);
        answerDiv.style.maxHeight = '0';

        questionButton.addEventListener('click', () => {
            answerDiv.style.maxHeight = questionDiv.classList.toggle('on')
                ? answerDiv.scrollHeight + 'px'
                : '0';
        });
    });
};
