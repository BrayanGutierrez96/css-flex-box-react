import "../Pagina.css";

function Page() {
  return (
    <>
      <header>
        <div className="header_logo">
          <img
            className="header_logo_img"
            src="logoReat.png"
            alt="aqui va el logo"
          />
        </div>
        <nav>
          <ul className="nav_links">
            <li className="nav_links_link">
              <a className="nav_links_link_a" href="">
                Home
              </a>
            </li>
            <li className="nav_links_link">
              <a className="nav_links_link_a" href="">
                About
              </a>
            </li>
            <li className="nav_links_link">
              <a className="nav_links_link_a" href="">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section_main">
          <h1>Pagina de prueba</h1>
          <section className="section_main_text">
            <article className="section_main_text_article1">
              <h2>Titulo 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                earum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sint laboriosam dignissimos atque eius quidem numquam
                praesentium repellendus deserunt voluptate reprehenderit.
              </p>
            </article>
            <article className="section_main_text_article2">
              <h2>Titulo 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores impedit totam labore natus consectetur
                similique ad nisi modi! Consequatur harum recusandae explicabo
                numquam accusamus dignissimos nisi eaque accusantium, aliquam
                exercitationem.
              </p>
            </article>
          </section>
        </section>
        <aside>
          <ul>
            <li className="nav_links_link">
              <iframe
                width="300"
                height="150"
                src="https://www.youtube.com/embed/mcHGY5fxFCI?si=IiDVXmVnstDhVjzp"
                title="YouTube video player"
                style={{ border: "0px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </li>
            <li className="nav_links_link">
              <iframe
                width="300"
                height="150"
                src="https://www.youtube.com/embed/XlKARQ1vYe4?si=3Pu6iwjw6z37_cOP"
                title="YouTube video player"
                style={{ border: "0px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </li>
          </ul>
        </aside>
      </main>
      <footer>
        <p className="footer_text">@Copyright Brayan 2024</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d637.932293405953!2d-75.59968451059979!3d6.20773792826186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1723652406254!5m2!1ses!2sco"
          width="300"
          height="150"
          style={{ border: "0px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </footer>
    </>
  );
}

export default Page;
