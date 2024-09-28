import React from "react";

import profilePicture from "../../../static/assets/images/LuisRoma.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      Estudiante del curso "Full Stack Developer" ofrecido por Lanbide - País Vasco y Fundación Vass Madrid-España. 
      Desde siempre apasionado por la programación, fue el último año cuando decidí embarcarme formalmente en este campo que me fascina. 
      Busco colaborar en proyectos dirigidos a Desarrolladores Jr. que me permitan aprender y aplicar mis conocimientos, convencido de que la programación es una habilidad que se perfecciona con la práctica y desarrollo constante. Tengo disponibilidad completa y un fuerte deseo de contribuir al desarrollo de proyectos innovadores.
      <p>Luis Manuel Vasquez Roma</p>
      </div>      
    </div>
  );
}