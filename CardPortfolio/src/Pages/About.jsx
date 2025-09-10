import Clients from "../Components/Clients";
import AboutSeo from "../Components/Seo/AboutSeo";
import Service from "../Components/Services";
import Skills from "../Components/Skill";
import Testimonials from "../Components/Testimonials";

export default function About() {
  return (
    <>
      <AboutSeo />
      <article className="about active" data-page="about">
        {/* Header */}
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        {/* About Text */}
        <section className="about-text">
          <p>
            I'm a passionate Full-Stack Developer specializing in the MERN
            stack. I enjoy building modern, scalable, and user-friendly web
            applications. With strong expertise in React, Tailwind CSS, Node.js,
            Express, Next.js, TypeScript, and MongoDB or MySQL, I create
            solutions that are functional, efficient, and visually appealing.
          </p>
          <p>
            My aim is to design and develop applications that deliver seamless
            user experiences while ensuring clean architecture and maintainable
            code. I love exploring new technologies and transforming ideas into
            reality through code.
          </p>
        </section>
        <Service />
        <Testimonials />
        <Skills />
        <Clients />
      </article>
    </>
  );
}
