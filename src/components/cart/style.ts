import styled from "styled-components";

interface ContainerProps{
    showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart? '0' : '-350px')};

    margin-top: 55px;
    width: 350px;
    height: 100vh;
    background-color: white;

    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0,0,0,0.25);

    transition: right 0.5s;

`
export const Title = styled.h1`

`
export const CartProductList = styled.ul`
    padding: 2rem 0;
    list-style: none;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const CartProductItem = styled.li`
`
export const CartTotal = styled.strong`
    position: fixed;
    bottom: 0;
    right: 10;
    margin-bottom: 1rem;
    background-color: #ccc;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
`