import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 2rem;
    margin: 0 auto; 
    box-shadow: 0 0 5px rgba(0,0,0,0.15);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

`
export const ProductImg = styled.img`
    width: 250px;
    height: 400px;

    object-fit: contain;

`
export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 1rem;
    min-height: 5rem;

`
export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
`
export const Review = styled.span`
    margin-top: 1rem;
    font-size: 0.7rem;

    svg {
        font-size: 1rem;
    }

`
export const Price = styled.strong`
    margin-top: 1rem;

`
export const AddToCartButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;

`

export const AddToCartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    background-color: blue;
    color: white;
    width: 100%;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    svg {
        font-size: 0.75rem;
    }
`

export const RemoveFromCartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    background-color: violet;
    color: black;
    width: 100%;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    svg {
        font-size: 0.75rem;
    }
`