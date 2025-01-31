// FAQアコーディオン
const faqQuestions = document.querySelectorAll('.faq-accordion-question');

faqQuestions.forEach(qBtn => {
  const parentItem = qBtn.parentElement; // .faq-accordion-item
  const answerDiv = parentItem.querySelector('.faq-accordion-answer');
  const iconSpan = qBtn.querySelector('.accordion-icon');

  // ページ読み込み時の初期状態をセット
  if (parentItem.classList.contains('open')) {
    // 「開き」状態
    qBtn.setAttribute('aria-expanded', 'true');
    answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
    iconSpan.textContent = '▲'; // 開いているので上向き
  } else {
    // 「閉じ」状態
    qBtn.setAttribute('aria-expanded', 'false');
    answerDiv.style.maxHeight = 0;
    iconSpan.textContent = '▼'; // 閉じているので下向き
  }

  // クリック時の切り替え
  qBtn.addEventListener('click', () => {
    parentItem.classList.toggle('open');
    if (parentItem.classList.contains('open')) {
      // 開く
      qBtn.setAttribute('aria-expanded', 'true');
      answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
      iconSpan.textContent = '▲';
    } else {
      // 閉じる
      qBtn.setAttribute('aria-expanded', 'false');
      answerDiv.style.maxHeight = 0;
      iconSpan.textContent = '▼';
    }
  });
});