import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from '../helpers/clients'

export default function Nav(){
    const [categories, setCategories] = useState(null)

    useEffect(() => {
      async function fetchAllCategories(){
        const allCategories = await client.fetch("*[_type == 'category']{categoryname, slug}")
        setCategories(allCategories)
      }
      fetchAllCategories()
    },[])
    console.log(categories)
    return(
       <nav>
        {/* legge inn "/kategori/", dette er navnet til nettstedURL*/}
        {categories?.map((c, index) => <Link key={index} to={"/kategori/" + c.slug.current}>{c.categoryname}</Link>)} 
        </nav>
    )
  }