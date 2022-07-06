import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils";
import { setupServer } from "msw/node";
import Cita from "./Cita";
import { quoteWithoutName, handlers } from "../../mocks/handler";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close);
afterEach(() => server.resetHandlers);

describe("First render of the application", () => {
  it("Should render the main text", () => {
    render(<Cita />);
    const initialText = screen.queryByText("No se encontro ninguna cita");
    expect(initialText).toBeInTheDocument();
  });

  it("Should render the search input by name", () => {
    render(<Cita />);
    const inputName = screen.queryByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    expect(inputName).toBeInTheDocument();
  });

  it("Should render the button of search", () => {
    render(<Cita />);
    const getQuoteBtn = screen.queryByText("Obtener cita aleatoria", {
      selector: "button",
    });
    expect(getQuoteBtn).toBeInTheDocument();
  });

  it("Should render the clear button", () => {
    render(<Cita />);
    const clearBtn = screen.queryByText("Borrar", { selector: "button" });
    expect(clearBtn).toBeInTheDocument();
  });
});

describe("Using the application with different arguments", () => {
  it("Should display a 'random' quote", async () => {
    render(<Cita />);
    const getQuoteBtn = screen.getByText("Obtener cita aleatoria", {
      selector: "button",
    });
    fireEvent.click(getQuoteBtn);
    await waitFor(() =>
      expect(screen.queryByText(quoteWithoutName.quote)).toBeInTheDocument()
    );
  });

  it("Should display a 'random' name", async () => {
    render(<Cita />);
    const getQuoteBtn = screen.getByText("Obtener cita aleatoria", {
      selector: "button",
    });
    fireEvent.click(getQuoteBtn);
    await waitFor(() =>
      expect(screen.queryByText(quoteWithoutName.character)).toBeInTheDocument()
    );
  });
});
