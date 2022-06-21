import React from "react";
import advogado from "../../../assets/imgs/foto-adv.jpg";
import "./Facilities.style.css";

const Facilities = () => {
  return (
    <section class="facilities">
      <h1>Nossa visão</h1>
      <p>
        Quem somos e qual nossa visão.
      </p>

      <div class="row">

        <div class="vision-content">
          
          <div class="vision-1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div>
              <h3>Visão</h3>
            </div>
            <p>
            Prover soluções jurídicas com criatividade, segurança e ética como pilares de sustentação para transformação da sociedade por meio da realização dos sonhos e ideais de nossos clientes.
            </p>
          </div>


          <div class="vision-1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div>
              <h3>Missão</h3> 
            </div>
              <p>
              Ser referência em soluções jurídicas para o setor trabalhista, empresas e funcionários.
              </p>
          </div>

          <div class="vision-1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div>
              <h3>Valores</h3>
            </div>
              <p>• Valorização das pessoas;</p>
              <p>• Ética e integridade;</p>
              <p>• Qualidade, segurança e eficiência.</p>
            </div>
        </div>
        
        <div class="cont1" data-aos="fade-left">
          <img class="img-adv" src={advogado} alt="advogado" />
        </div>
        
      </div>
    </section>
  );
};

export default Facilities;
