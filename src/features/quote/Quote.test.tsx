import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils";
import { setupServer } from "msw/node";
import Cita from "./Cita";
import { quoteWithoutName, handlers, quoteWithName } from "../../mocks/handler";
import userEvent from "@testing-library/user-event";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
beforeEach(() => render(<Cita />));
afterAll(() => server.close);
afterEach(() => server.resetHandlers);

describe("First render of the application", () => {
  it("Should render the main text", () => {
    const initialText = screen.queryByText("No se encontro ninguna cita");
    expect(initialText).toBeInTheDocument();
  });

  it("Should render the search input by name", () => {
    const inputName = screen.queryByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    expect(inputName).toBeInTheDocument();
  });

  it("Should render the button of search", () => {
    const getQuoteBtn = screen.queryByText("Obtener cita aleatoria", {
      selector: "button",
    });
    expect(getQuoteBtn).toBeInTheDocument();
  });

  it("Should render the clear button", () => {
    const clearBtn = screen.queryByText("Borrar", { selector: "button" });
    expect(clearBtn).toBeInTheDocument();
  });
});

describe("Using the application with different correct arguments", () => {
  it("Should display a 'random' quote", async () => {
    const getQuoteBtn = screen.getByText("Obtener cita aleatoria", {
      selector: "button",
    });
    fireEvent.click(getQuoteBtn);
    await waitFor(() =>
      expect(screen.queryByText(quoteWithoutName.quote)).toBeInTheDocument()
    );
  });

  it("Should display a 'random' name", async () => {
    const getQuoteBtn = screen.getByText("Obtener cita aleatoria", {
      selector: "button",
    });
    fireEvent.click(getQuoteBtn);
    await waitFor(() =>
      expect(screen.queryByText(quoteWithoutName.character)).toBeInTheDocument()
    );
  });

  it("Should display the name and a quote from a specific character", async () => {
    const getQuoteBtn = screen.getByText("Obtener cita aleatoria", {
      selector: "button",
    });
    const inputName = screen.getByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    await userEvent.clear(inputName);
    fireEvent.change(inputName, { target: { value: "Moe" } });
    fireEvent.click(getQuoteBtn);
    await waitFor(() => {
      expect(screen.queryByText(quoteWithName.character)).toBeInTheDocument();
      expect(screen.queryByText(quoteWithName.quote)).toBeInTheDocument();
    });
  });

  it("The input should be empty at the end of the test", () => {
    const inputName = screen.getByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    const clearBtn = screen.getByText("Borrar", { selector: "button" });
    fireEvent.change(inputName, { target: { value: "Moe" } });
    fireEvent.click(clearBtn);
    expect(inputName).toBeEmptyDOMElement()
  });
});
