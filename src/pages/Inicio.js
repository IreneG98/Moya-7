import portada from '../images/portada.jpg';

export const Inicio = () => {
  return (
    <section>
      <h2>Si quieres vivir a 200 metros de la playa…</h2>
      <img className="portada" src={portada} alt="h"></img>
      <p>
        Estudios y apartamentos de 1 y 2 dormitorios en los que los materiales
        elegidos harán el deleite de sus moradores.
      </p>
      <img alt="h"></img>
      <p>
        Con una ubicación privilegiada, a 3 minutos paseando de la playa y del
        Paseo Marítimo.
      </p>
      <p>
        Con un estilo actual en tonos neutros que hará que la decoración sea
        fácilmente personalizable.
      </p>
      <h2>Info de un apartamento</h2>
      <p>
        Muy cerca de los mejores colegios y junto al tradicional Mercado
        Municipal de Abastos y de todo tipo de comercios y servicios. La parada
        de autobús hacia el centro de Málaga está a pocos metros y el acceso a
        la autovía es muy fácil. Zona inmejorable e ideal para quienes prefieren
        tenerlo todo a la mano y sin desplazamientos. Cuatro estudios, tres
        apartamentos de 1 dormitorio y cuatro apartamentos de 2 dormitorios,
        plantas de garajes y trasteros.
      </p>
      <img alt="h"></img>
    </section>
  );
};
