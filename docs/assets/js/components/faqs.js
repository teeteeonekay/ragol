export default () => {
    const faqsDiv = document.querySelector('div.faqs');

    if (!faqsDiv)
        return;

    let faqNodes = [];

    Array.from(faqsDiv.children).forEach(n => {
        switch (n.tagName) {
            case 'H2':
                break;
            case 'H3':
                faqNodes.push({ questionNode: n, answerNodes: [] });
                break;
            default:
                faqNodes[faqNodes.length - 1].answerNodes.push(n);
                break;
        }
    });

    const faqsFragment = document.createDocumentFragment();
    
    faqNodes.forEach(n => {
        const itemDiv = Object.assign(document.createElement('div'), { className: 'faqs__item' });
        const questionButton = Object.assign(document.createElement('button'), { className: 'faqs__question-button' });
        const answerDiv = Object.assign(document.createElement('div'), { className: 'faqs__answer' });

        while (n.questionNode.firstChild) {
            questionButton.append(n.questionNode.firstChild);
        }

        n.questionNode.classList.add('faqs__question');
        n.questionNode.append(questionButton);
        itemDiv.append(n.questionNode, answerDiv);
        answerDiv.append(...n.answerNodes);
        answerDiv.style.maxHeight = '0px';
        faqsFragment.append(itemDiv);
    });

    faqsDiv.append(faqsFragment);
    
    faqsDiv.addEventListener('click', e => {
        const questionButton = e.target.closest('button');
        
        if (!questionButton)
            return;

        const itemDiv = questionButton.closest('.faqs__item');
        const answerDiv = itemDiv.querySelector('.faqs__answer');
        const itemDivIsOn = itemDiv.classList.toggle('faqs__item--on');

        answerDiv.style.maxHeight = itemDivIsOn ? answerDiv.scrollHeight + 'px' : '0px';
    });
};
