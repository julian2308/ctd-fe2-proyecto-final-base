import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import TarjetaNoticiaComponent from "./TarjetaNoticiaComponent";
import {
  ContenedorModal,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import ModalPremium from "./modal/ModalPremium";
import ModalNoPremium from "./modal/ModalNoPremium";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();
      const data = respuesta.map((n) => {
        const titulo = n.titulo
          .split(" ")
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const ahora = new Date();
        const minutosTranscurridos = Math.floor(
          (ahora.getTime() - n.fecha.getTime()) / 60000
        );

        return {
          id: n.id,
          titulo,
          descripcion: n.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });
      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia: INoticiasNormalizadas) => (
          <TarjetaNoticiaComponent noticia={noticia} setModal={setModal} />
        ))}
        <ContenedorModal>
          {modal ? (
            modal.esPremium ? (
              <ModalPremium setModal={setModal} />
            ) : (
              <ModalNoPremium setModal={setModal} modal={modal} />
            )
          ) : null}
        </ContenedorModal>
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
