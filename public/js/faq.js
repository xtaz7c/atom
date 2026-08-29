// Seleciona todos os botões de pergunta
   const questions = document.querySelectorAll(".faq-question");

   questions.forEach((question) => {
      question.addEventListener("click", () => {
         const item = question.parentElement;
         const answer = item.querySelector(".faq-answer");

         // Fecha outras respostas abertas
         document
            .querySelectorAll(".faq-answer.active")
            .forEach((activeAnswer) => {
               if (activeAnswer !== answer) {
                  activeAnswer.classList.remove("active");
               }
            });

         // Abre/fecha a resposta clicada
         answer.classList.toggle("active");

         // Estiliza o botão quando estiver ativo
         item.classList.toggle("active", answer.classList.contains("active"));
      });
   });