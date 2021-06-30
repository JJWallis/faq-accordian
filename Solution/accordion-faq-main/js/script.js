const qAndA = document.querySelectorAll(".question-and-answer");

for (eachQAndA of qAndA) {
  const questionDiv = eachQAndA.querySelector("button");
  const question = eachQAndA.querySelector("h2");
  const arrow = eachQAndA.querySelector(".question i");
  const answer = eachQAndA.querySelector(".answer");
  console.log(arrow);

  questionDiv.addEventListener("click", function () {
    if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      question.classList.add("active");
      arrow.classList.add("active");
    } else {
      answer.classList.add("hide");
      question.classList.remove("active");
      arrow.classList.remove("active");
    }
  });
};
