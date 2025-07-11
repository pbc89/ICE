const images = [
  { src: 'images/ICE1.jpg', answer: 'ICE' },
  { src: 'images/terror1.jpg', answer: 'Terrorist' },
  { src: 'images/ICE2.jpg', answer: 'ICE' },
  { src: 'images/terror2.jpg', answer: 'Terrorist' },
];

let current = 0;
let score = 0;

function showImage() {
  document.getElementById('quiz-image').src = images[current].src;
  document.getElementById('progress').innerText = `Question ${current + 1} of ${images.length}`;
}

function guess(userAnswer) {
  if (userAnswer === images[current].answer) {
    score++;
  }
  current++;
  if (current < images.length) {
    showImage();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('score').innerText = `${score} / ${images.length}`;
  createShareButtons();
}

function restartQuiz() {
  current = 0;
  score = 0;
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('result-container').style.display = 'none';
  showImage();
}

function createShareButtons() {
  const shareDiv = document.getElementById('share-buttons');
  const text = encodeURIComponent(`I got ${score}/${images.length} on the ICE or terrorist quiz! Try it yourself: [Your Site URL]`);
  shareDiv.innerHTML = `
    <a href="https://twitter.com/intent/tweet?text=${text}" target="_blank">Share on Twitter</a>
  `;
}

// Start the quiz on page load
showImage();
