import { ProductCard } from '../productcard/ProductCard'
import {products} from '../../data/products'
import * as S from './styles'

export const ProductList: React.FC = () => {

    // 
    return (
        <S.Container>

            {products.map((product) => (
                <ProductCard
                key={product.id}
                product={product}/>
            ))}
            
        </S.Container>
    )
}