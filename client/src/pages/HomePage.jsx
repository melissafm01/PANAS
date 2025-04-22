import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-white p-10">
      <h1 className="text-slate-800 text-5xl py-2 font-bold">Bienvenidos a PanascOOP </h1>
      <p className="text-md text-slate-500">
      panascOOP es una app que impulsa la economía solidaria y conecta a las comunidades.
Facilitamos la gestión de proyectos colectivos y promovemos la participación ciudadana.
Creemos en la colaboración, la educación y la transparencia como motores de cambio.
Aquí, las ideas se organizan, se comparten y se hacen realidad juntos.
Somos panas construyendo futuro desde la unión y la solidaridad
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Empezar
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
