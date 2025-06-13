// 🧠 Quiz Logic
function checkQuiz() {
    const answers = {
      q1: "b",
      q2: "c",
      q3: "b",
      q4: "a",
      q5: "b"
    };
  
    let score = 0;
    let total = Object.keys(answers).length;
  
    for (let key in answers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    }
  
    document.getElementById("result").textContent = `You scored ${score} out of ${total}!`;
  }
  
  // 🌐 Language Switching
  document.getElementById("languageSwitcher").addEventListener("change", function () {
    const selectedLang = this.value;
  
    fetch(`translations/lang.json`)
      .then(response => response.json())
      .then(data => {
        const translations = data[selectedLang];
        document.querySelectorAll("[data-i18n]").forEach(element => {
          const key = element.getAttribute("data-i18n");
          if (translations[key]) {
            element.innerHTML = translations[key];
          }
        });
      });
  });
  