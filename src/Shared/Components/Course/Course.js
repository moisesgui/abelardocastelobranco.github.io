import React from "react";
import "./Couse.style.css";

const Course = () => {
  return (
    <section class="course">
      <h1>Você está passando por algum desses problemas?</h1>
      <p class="course-title">
        Aqui abaixo você encontrará alguns dos serviços em que nós somos especialistas!
      </p>
      <div class="course-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div>
          <ul class="course-item">
            <li>Demissão com ou sem justa causa</li>
            <li>Horas extras não pagas</li>
            <li>Adicional de periculosidade</li>
            <li>Adicional de insalubridade</li>
            <li>Adicional noturno</li>
            <li>Rescisão indireta</li>
          </ul>
        </div>
        <div>
          <ul class="course-item">
              <li>Não teve CTPS assinada</li>
              <li>Estabilidade gestante</li>
              <li>Assédio moral</li>
              <li>Não pagamento de rescisão</li>
              <li>Acidente de trabalho</li>
              <li>Entre outras...</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Course;
