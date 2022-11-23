import Product from "../product"
import Card from "../card"
import "./productsList.css"

const ProductsList = ({ products }) => {
  return (
    <Card className='products'>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Card>
  )
}

export default ProductsList
