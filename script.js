const questions = document.querySelectorAll('div');

for (const question of questions) {
  question.addEventListener('click', () => {
    if (question.classList.contains("show-answer")) {
      question.classList.remove("show-answer");

    } else {
      for(const question of questions) {
        question.classList.remove("show-answer"); 
      }

      question.classList.add("show-answer");
    }
  })
}