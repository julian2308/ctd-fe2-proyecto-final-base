import Bio from "./Bio";
import { render, fireEvent, screen } from "@testing-library/react";
import { INFO_SIMPSONS, NombresSimpsons } from "./constants";

const bartBioText = "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad."
const bartInfo = INFO_SIMPSONS["BART"];
const homerInfo = INFO_SIMPSONS["HOMERO"];

beforeEach(() => render(<Bio />));
describe("First application's render", () => {
  it("Should display the name and the img of the default character (Bart)", () => {
    const bartName = screen.getByText(bartInfo.nombre);
    const bartImg = screen.getByAltText(bartInfo.nombre);
    const bartBio = screen.getByText(bartBioText)
    expect(bartImg).toBeInTheDocument();
    expect(bartName).toBeInTheDocument();
    expect(bartBio).toBeInTheDocument();
  });
});

describe("Clicking in another character's button", () => {
  beforeEach(() => {
    const homerBtn = screen.getByText("HOMERO", { selector: "button" });
    fireEvent.click(homerBtn);
  });
  it("should display the name and the image of the clicked character", () => {
    const homerName = screen.getByText(homerInfo.nombre);
    const homerImg = screen.getByAltText(homerInfo.nombre);
    expect(homerName).toBeInTheDocument();
    expect(homerImg).toBeInTheDocument();
  });
});
