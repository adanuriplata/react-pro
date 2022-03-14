import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components';
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={product} className="bg-dark text-white" >
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className="text-bold" />
                <ProductCard.Buttons className='custom-buttons'/>

            </ProductCard>

            <ProductCard className="bg-dark text-white" product={product} >
                <ProductImage className="custom-image" />
                <ProductTitle  className="text-bold"/>
                <ProductButtons className='custom-buttons' />

            </ProductCard>

            <ProductCard className="bg-dark text-white" product={product} 
                style={{ backgroundColor: '#70d1f8'  }}
            >
                <ProductImage style={{ background: '#fff' }}  />
                <ProductTitle style={{ font: 'flex' }}  />
                <ProductButtons style={{ display: 'flex', justifyContent:'end' }}/>

            </ProductCard>

        </div>
    </div>
  )
}

export default ShoppingPage