import ProductsList from "./components/products-list"
import products from "./products.json"

const App = () => {
  return (
    <div>
      <ProductsList products={products} />
    </div>
  )
}

export default App
