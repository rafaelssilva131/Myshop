import { useState } from "react";
import * as S from "./styles."
import {FiLogIn, FiLogOut, FiShoppingCart} from 'react-icons/fi'
import { Cart } from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { StyleSheetManager } from 'styled-components';
import { login, lougout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer );

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

    const dispatch = useDispatch();

    const [showCart, setShowCart] = useState(false);
    const isLogged = user !== null;

    function handleUserAuth() {
        //Usuario nao esta logado
        if(user === null) {
            dispatch(login({
                    name: 'Rafael',
                    email: 'rafael@email.com',
            })
            );
        } else {
            dispatch(lougout({}))
        }
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isLogged'}>
            <S.StyledHeader>
                <S.Wrapper>
                    <S.HeaderTitle>MyShop.</S.HeaderTitle>

                    <S.ButtonWrapper>
                        <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
                            { isLogged ? "Logout" : "Login" }
                            { isLogged? <FiLogOut /> : <FiLogIn />}
                        </S.AuthButton>

                        <S.CartButton onClick={() => setShowCart(!showCart)}>
                            Carrinho
                            <FiShoppingCart />
                        </S.CartButton>
                    </S.ButtonWrapper>
                </S.Wrapper>
                <Cart showCart={showCart} cart={cart} />
            </S.StyledHeader>
        </StyleSheetManager>
    );
}
