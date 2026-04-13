const products = {
    name: "products",
    title: "Produkter",
    type: "document",
    fields: [
        {
            name: "productname",
            title: "Produktnavn",
            type: "string"
        },
        {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
            source: 'productname',
            // maxLength: 200, // will be ignored if slugify is set
            //Slugify function to convert input to a URL-friendly slug
            slugify: input => input
                                .toLowerCase()
                                // Replace spaces with dashes
                                .replace(/\s+/g, '-')
                                // Remove regular expressions. Ta alle blank spaces og erstatte med bindestrek
                                .slice(0, 200)
                                // Gjør om tekstrengen til array, og kapper den. 200 lang
        }
        },       
        {
            name: "price",
            title: "Pris",
            type: "number"
        },
        {
            name: "quantity",
            title: "Antall på lager",
            type: "number"
        },
        {
            name: "productimage",
            title: "Produktbilde",
            type: "image"
        },
        {
            name: "productcategory",
            title: "Kategori",
            type: "reference",
            to: [
                {
               type: "category"
                }
            ]
        }
    ],
    //preview et regelsett på hvordan innholdet vises
    preview: {
        //velge hvilke biter vi vil vise frem
        select: {
            title: 'productname',
            inCat: 'productcategory.categoryname',
            image: 'productimage'
        },
        //sanity funksjon
        prepare(selection) {
            //sender med selection, sender utvalget vi endrer på 
            // = setttet med nøkkelsvar
            const {title, inCat, image} = selection
            return {
                title: title, 
                //liger under tittlen
                subtitle: `Kategori: ${inCat ? inCat : "Ukjent"}`,
                media: image
            }
        }
    }
}

export default products
