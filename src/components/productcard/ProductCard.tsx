import { Product} from '../../data/products';
import * as S from './styles';
import {FiShoppingCart} from 'react-icons/fi'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const { cart } = useSelector((rootReducer: RootReducer )=> rootReducer.cartReducer)

    const dispath = useDispatch()

    const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id) !== undefined;

    function handleRemoveProductFromCart(){
        dispath(removeProduct(product))
    }

    function handleAddProdToCart(){
        dispath(addProduct(product))
    }

    return (
        <S.Card>
            <S.ProductImg src={product.image} alt={product.description} />

            <S.ProductTitle>{product.title}</S.ProductTitle>

            <S.ReviewPriceContainer>

                <S.Review>

                    {Array.from({length: 5}).map((_, index) => index < Math.round(product.rating.rate) ? ( <AiFillStar key={index} />) : ( <AiOutlineStar key={index} />))}

                    {product.rating.rate}
                </S.Review>
                
                <S.Price>{product.price}</S.Price>

            </S.ReviewPriceContainer>

        <S.AddToCartButtonWrapper>
            { isProductOnCart ? (
                <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
                Adicionar ao Carrinho
                <FiShoppingCart/>
                </S.RemoveFromCartButton>
            ): (
                <S.AddToCartButton onClick={handleAddProdToCart}    >
                Adicionar ao Carrinho
                <FiShoppingCart/>
                </S.AddToCartButton>
            )}

        </S.AddToCartButtonWrapper>

        </S.Card>
    )
}