import { useDispatch } from 'react-redux'; // Importando useDispatch
import { Product } from '../../data/products';
import { removeProduct } from '../../redux/Cart/cart-slice';
import * as S from './style';

interface CartProps {
    showCart: boolean;
    cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
    
    const dispatch = useDispatch(); // Usando useDispatch para obter a função dispatch

    const total = cart.reduce((totalCart, product) => totalCart + product.price, 0);

    return (
        <S.Container showCart={showCart}>
            <S.Title>Carrinho</S.Title>
            
            <S.CartProductList>
                {cart.map((product) => (
                    <S.CartProductItem key={product.id}>
                        <strong>{product.title}</strong> - {product.price}
                        <button onClick={() => 
                            dispatch(removeProduct(product)) // Corrigido o nome da função dispatch
                        }>Remover</button>
                    </S.CartProductItem>
                ))}
            </S.CartProductList>
            <S.CartTotal data-testid= "total" >Total: ${total}</S.CartTotal>
        </S.Container>
    );
};
