import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import client from '../helpers/clients'
export default function Products({products, setCart}){
  //lage en state, henter fra sanity

    const [sanityProducts, setSanityProducts] = useState(null)

    //react+sanity sammen 
    //dokumentasjon fra internett -> servercomponents + clientcomponents 
    //Mer ressurseffektiv måte => velge hva slags informasjon som er viktig å hente
    //hvordan skrive asynkront 

    //lage en klientlytter
    //await -> vente på klienten, henter ved bruk av croq spørringer -> setter så inn i state
    useEffect(() => {
      async function fetchAllProducts() {
        const allProducts = await client.fetch("*[_type == 'products']{_id, productname, price, 'category': productcategory->categoryname, 'imageURL': productimage.asset->url}")
        setSanityProducts(allProducts)
      }
      fetchAllProducts()
      //hvilke endringer skal vi bruke i useeffect
    }, [])

    console.log(sanityProducts)

    return (
    <div id="product-list">
      {sanityProducts?.map(p => <ProductCard key={p._id} p={p} setCart={setCart} />)}
      
    </div>)
  }
