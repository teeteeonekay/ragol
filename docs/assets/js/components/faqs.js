export default () => {
    const faqsDiv = document.querySelector('div.faqs');

    if (!faqsDiv)
        return;

    const faqNodes = [];

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
        const questionDiv = Object.assign(document.createElement('div'), { className: 'question' });
        const questionButton = document.createElement('button');
        const answerDiv = Object.assign(document.createElement('div'), { className: 'answer' });

        while (n.questionNode.firstChild) {
            questionButton.append(n.questionNode.firstChild);
        }

        n.questionNode.append(questionButton);
        questionDiv.append(n.questionNode, answerDiv);
        answerDiv.append(...n.answerNodes);
        answerDiv.style.maxHeight = '0px';
        faqsFragment.append(questionDiv);
    });

    faqsDiv.append(faqsFragment);
    
    faqsDiv.addEventListener('click', e => {
        const questionButton = e.target.closest('button');
        
        if (!questionButton)
            return;

        const questionDiv = questionButton.closest('.question');
        const answerDiv = questionDiv.querySelector('.answer');
        const questionDivIsOn = questionDiv.classList.toggle('on');

        answerDiv.style.maxHeight = questionDivIsOn ? answerDiv.scrollHeight + 'px' : '0px';
    });
};
