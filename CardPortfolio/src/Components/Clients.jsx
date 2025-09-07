import React from "react";
import python from "../assets/images/python.png";
import html from "../assets/images/html.png";
import js from "../assets/images/jwt.png";
import react from "../assets/images/react.png";
const clients = [
  {
    id: 1,
    img: python,
    alt: "Client logo 1",
    link: "#",
  },
  {
    id: 2,
    img: html,
    alt: "Client logo 2",
    link: "#",
  },
  {
    id: 3,
    img: js,
    alt: "Client logo 3",
    link: "#",
  },

  {
    id: 4,
    img: react,
    alt: "Client logo 4",
    link: "#",
  },
  //   {
  //     id: 5,
  //     img: "./assets/images/logo-5-color.png",
  //     alt: "Client logo 5",
  //     link: "#",
  //   },
  //   {
  //     id: 6,
  //     img: "./assets/images/logo-6-color.png",
  //     alt: "Client logo 6",
  //     link: "#",
  //   },
];

const Clients = () => {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">
        {clients.map((client) => (
          <li className="clients-item" key={client.id}>
            <a href={client.link} target="_blank" rel="noopener noreferrer">
              <img src={client.img} alt={client.alt} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
