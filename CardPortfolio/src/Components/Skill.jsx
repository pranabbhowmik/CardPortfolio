import React from "react";
import python from "../assets/images/python.png";
import html from "../assets/images/html.png";
import jwt from "../assets/images/jwt.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwindcss.png";
import redux from "../assets/images/redux.png";
import github from "../assets/images/github (2).png";
import c from "../assets/images/c.png";
import express from "../assets/images/express.png";
import css from "../assets/images/css.png";
import Postman from "../assets/images/postman.png";
import js from "../assets/images/javascript.png";
import mysql from "../assets/images/sql.png";
import postsql from "../assets/images/postsql.png";
import nodejs from "../assets/images/nodejs.png";
import router from "../assets/images/router.png";
import helmet from "../assets/images/reacthelmet.png";
import typescript from "../assets/images/typescript.png";
import tenstack from "../assets/images/tenstack.png";
import mongo from "../assets/images/mongo.png";
import nextjs from "../assets/images/nextjs.png";
import Stripe from "../assets/images/stripe.png";
import zod from "../assets/images/zod.png";
// Example skill logos (replace with your paths)
const skills = [
  { id: 1, img: c },
  { id: 2, img: js },
  { id: 3, img: python },
  { id: 4, img: react },
  { id: 5, img: nextjs },

  { id: 6, img: github },
  { id: 7, img: redux },
  { id: 8, img: mysql },
  { id: 9, img: mongo },
  { id: 10, img: express },
  { id: 11, img: tailwind },
  { id: 12, img: typescript },
  { id: 13, img: html },
  { id: 14, img: css },
  { id: 15, img: Postman },
  { id: 16, img: helmet },
  { id: 17, img: router },
  { id: 18, img: nodejs },
  { id: 19, img: postsql },
  { id: 20, img: tenstack },
  { id: 21, img: jwt },
  { id: 22, img: Stripe },
  { id: 23, img: zod },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h3 className="skills-title">My Skills</h3>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <img src={skill.img} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
