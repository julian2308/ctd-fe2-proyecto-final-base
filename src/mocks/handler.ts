import { rest } from "msw";
import { API_URL } from "../app/constants";

const quoteWithoutName = {
  quote: "Oh, so they have Internet on computers now!",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};

const quoteWithName = {
  quote:
    "Yeah. Call this an unfair generalization if you must.. but old people are no good at everything",
  character: "Moe Szyslak",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
  characterDirection: "Right",
};
quoteWithName;
const handlers = [

  

  rest.get(API_URL, (req, res, ctx) => {
    const finalQuote = req.url.searchParams.get("character")
      ? quoteWithName
      : quoteWithoutName;

    return res(ctx.status(200), ctx.json([finalQuote]));
  }),
];

export { quoteWithName, quoteWithoutName, handlers };
