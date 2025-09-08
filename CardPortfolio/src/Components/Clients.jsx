import React from "react";
import enchanting from "../assets/images/enchentingpet.png";
import pavana from "../assets/images/pavanamoon.png";
import lynkloom from "../assets/images/lynkloom.png";
const clients = [
  {
    id: 1,
    img: enchanting,
    alt: "Client logo 1",
    link: "https://www.enchantingpets.com/",
  },
  {
    id: 2,
    img: pavana,
    alt: "Client logo 2",
    link: "https://pavanamoonlightcamping.com/",
  },
  {
    id: 3,
    img: lynkloom,
    alt: "Client logo 3",
    link: "https://lynkloom.com/",
  },
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
