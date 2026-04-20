import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../helpers/clients"

export default function CategoryPage() {
    const parameters = useParams()
    const [category, setCategory] = useState(null)

    useEffect(() => {
        async function fetchCategory(slug) {
            //fortelle groc at vi skal bruke slug til å sende videre
            const tempCategory = await client.fetch("*[_type == 'category' && slug.current == $slug]{...}", { slug })
            setCategory(tempCategory[0])
        }
        fetchCategory(parameters.slug)
        //useEffecten må endres i parameters
    },[parameters])
    console.log(parameters)
    console.log(category)

    return <h1>{category?.categoryname}</h1>
}