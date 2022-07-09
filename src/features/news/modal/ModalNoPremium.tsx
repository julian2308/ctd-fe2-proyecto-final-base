import {
  CloseButton,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "../styled";
import { CloseButton as Close } from "../../../assets";
import { INoticiasNormalizadas } from "../Noticias";
interface PropsTipadas {
  modal: INoticiasNormalizadas;
  setModal: (close: null) => void;
}

const ModalNoPremium = ({ setModal, modal }: PropsTipadas) => {
  return (
    <TarjetaModal>
      <CloseButton onClick={() => setModal(null)}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      <ImagenModal src={modal.imagen} alt="news-image" />
      <CotenedorTexto>
        <TituloModal>{modal.titulo}</TituloModal>
        <DescripcionModal>{modal.descripcion}</DescripcionModal>
      </CotenedorTexto>
    </TarjetaModal>
  );
};

export default ModalNoPremium;
