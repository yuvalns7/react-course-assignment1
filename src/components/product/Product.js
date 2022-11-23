import Card from "../card"
import "./product.css"

const Product = ({ product }) => {
  return (
    <Card className='product-card'>
      <div className='product-description'>
        <h1>{product.title}</h1>
        <h3>${product.amount}</h3>
      </div>

      <div>
        <img src={product.photo} alt={product.title} height={100} width={100} />
      </div>
    </Card>
  )
}

export default Product
