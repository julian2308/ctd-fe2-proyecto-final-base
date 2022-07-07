import styled from "styled-components";

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  
`;

const BioImage = styled.img`
  max-width: 200px;
  max-height: 300px;
  margin-bottom: 1rem;

`;

const BioNombre = styled.h3`
  font-size: 2em;
  margin-bottom: 1rem;
  
`;

const BioDescripcion = styled.p`
  font-size: 1.3em;
  width: 70%;
  margin: 1rem auto;
`;

const ContenedorBotones = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export {BioContainer, BioImage, BioNombre, BioDescripcion, ContenedorBotones}