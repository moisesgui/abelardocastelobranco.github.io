import React from "react";

import { FaCheck } from 'react-icons/fa';
import "./Couse.style.css";

const Course = () => {
  return (
    <section class="course">
      <h1>Você está passando por algum desses problemas?</h1>
      <p class="course-title">
        Aqui você encontrará alguns dos serviços em que nós somos especialistas.
      </p>
      <div class="course-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div>
          <ul class="course-item">
            <li><FaCheck size="16px" />Demissão com ou sem justa causa</li>
            <li><FaCheck size="16px" />Horas extras não pagas</li>
            <li><FaCheck size="16px" />Adicional de periculosidade</li>
            <li><FaCheck size="16px" />Adicional de insalubridade</li>
            <li><FaCheck size="16px" />Adicional noturno</li>
            <li><FaCheck size="16px" />Rescisão indireta</li>
          </ul>
        </div>
        <div>
          <ul class="course-item">
              <li><FaCheck size="16px" />Não teve CTPS assinada</li>
              <li><FaCheck size="16px" />Estabilidade gestante</li>
              <li><FaCheck size="16px" />Assédio moral</li>
              <li><FaCheck size="16px" />Não pagamento de rescisão</li>
              <li><FaCheck size="16px" />Acidente de trabalho</li>
              <li><FaCheck size="16px" />Entre outras...</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Course;
