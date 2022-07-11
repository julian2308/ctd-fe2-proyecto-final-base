import { render, screen } from "@testing-library/react"
import Noticias from "./Noticias"


describe("", () => {

    it("", () =>{

        render(<Noticias/>)
        const noticeTitle = screen.getByText("Noticias de los Simpsons")
        expect(noticeTitle).toBeInTheDocument()

    })

})