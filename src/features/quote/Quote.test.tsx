import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils"
import Cita from "./Cita";

it("bababa", () => {

    render(<Cita/>)
    const textoInicial = screen.queryByText("No se encontro ninguna cita")
    expect(textoInicial).toBeInTheDocument()

})

it("bababa", () => {

    render(<Cita/>)
    const inputNombre = screen.queryByPlaceholderText("Ingresa el nombre del autor")
    expect(inputNombre).toBeInTheDocument()

})
