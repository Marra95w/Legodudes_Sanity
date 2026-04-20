const category = {
    name: "category",
    title: "Kategori",
    type: "document",
    fields: [
        {
            name: "categoryname",
            title: "Kategorinavn",
            type: "string"
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'categoryname',
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
            name: "categoryimage",
            title: "Kategoribilde",
            type: "image"
        }
    ]
}

export default category