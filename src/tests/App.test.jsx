import { render, screen, fireEvent } from "@testing-library/react"; 
import Home from "../pages/index"; 
 
describe("Página Inicial", () => { 
  it("renderiza o título principal", () => { 
    render(<Home />); 
    expect(screen.getByText("Bem-vindo à Pousada Pedra 
Furada")).toBeInTheDocument(); 
  }); 
}); 
