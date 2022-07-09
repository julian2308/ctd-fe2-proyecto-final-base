import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "../styled";
import { SuscribeImage, CloseButton as Close } from "../../../assets";

interface PropsTipadas {
  setModal: (close: null) => void;
}

const ModalPremium = ({ setModal }: PropsTipadas) => {
  return (
    <TarjetaModal>
      <CloseButton onClick={() => setModal(null)}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
      <CotenedorTexto>
        <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
        <DescripcionModal>
          Suscríbete a nuestro newsletter y recibe noticias de nuestros
          personajes favoritos.
        </DescripcionModal>
        <BotonSuscribir
          onClick={() =>
            setTimeout(() => {
              alert("Suscripto!");
              setModal(null);
            }, 1000)
          }
        >
          Suscríbete
        </BotonSuscribir>
      </CotenedorTexto>
    </TarjetaModal>
  );
};

export default ModalPremium;
