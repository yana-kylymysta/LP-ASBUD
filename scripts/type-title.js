//TYPE TITLE 
function splitTextNodes(element) {
  const childNodes = Array.from(element.childNodes);
  
  childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/).map(word => {
        if (word.trim() === '') {
          return `<span class="space">${word}</span>`; 
        } else {
          const letters = word.split('').map(letter => {
            return `<span class="letter">${letter}</span>`;
          }).join('');
          return `<span class="word">${letters}</span>`; 
        }
      }).join('');
      
      const wrapper = document.createElement('span');
      wrapper.innerHTML = words;
      node.replaceWith(wrapper);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      splitTextNodes(node); 
    }
  });
}


const typeTitle = document.querySelector('.type-title');

splitTextNodes(typeTitle);





