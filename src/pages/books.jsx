import { PageHeader } from '../components/pageHeader/PageHeader'
import { Product } from '../components/product/Product'

import {PRODUCT_DATA} from '../data/productData'


const Books = () => {
    return (
<div style={{backgroundColor: 'var(--light)'}}>
        <PageHeader>Books Page</PageHeader>
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}>
    {
        PRODUCT_DATA.map(product => (
            <Product book={product} key={product.id} />
        ))
    }
        </div>
</div>
    )
}

export default Books
