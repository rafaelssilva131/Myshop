import { render, screen } from "@testing-library/react"
import { Cart } from "./Cart"
import { products } from "../../data/products"
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0,2); //obtendo 2 primeiros produtos

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
    return {
        useDispatch: () => {
            return mockDispatch;
        }
    }
})

describe('Cart > Unit tests', () => {
    it('should render an empty cart correctly', () => {
        render(<Cart showCart={true} cart={[]}/>)

        const titleElement = screen.getByRole('heading', {level: 1});
        const totalElement = screen.getByTestId("total");
        const cartListElement = screen.getByRole('list') //ul


        expect(titleElement).toHaveTextContent("Carrinho");
        expect(totalElement).toHaveTextContent("$0");
        expect(cartListElement).toBeEmptyDOMElement();
    })

    it('should render a cart with two products', () => {
        render(<Cart showCart={true} cart={cart} />)
        
        const productsItemElements = screen.getAllByRole('listitem') //li
        const firstProductTitleElement = screen.getByText(cart[0].title);
        const TowProductTitleElement = screen.getByText(cart[1].title);

        expect(productsItemElements.length).toBe(2);
        expect(firstProductTitleElement).toBeInTheDocument();
        expect(TowProductTitleElement).toBeInTheDocument();
    })

    it('shoould remove product when remove button is clicked', () => {
        render(<Cart showCart={true} cart={[products[0]]}/>)

        const removeProductButton = screen.getByRole('button', {name : 'Remover'})

        userEvent.click(removeProductButton);
        
        expect(mockDispatch).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
    })
})