import axios, { AxiosResponse } from "axios";
import { Product } from "@/app/model/product";

async function getProductsActive() : Promise<Product[]> {
    // Perform the GET request to Givelink API.
    const responseRaw = await axios.get('https://be2.givelink.app/data');

    // From the returned nodes, keep only the products.
    // productsRaw is a JSON object, with the following structure:
    // key: productId
    // value: {name: ..., price: ..., etc.}
    const productsRaw = responseRaw.data.products;

    // Initialize a list to contain the Product objects. Pre-allocate enough memory.
    const productsAll : Product[] = new Array(Object.keys(productsRaw).length);
    let iProduct : number = 0;

    // Construct the list of Product objects.
    for (let thisProductId in productsRaw) {
        const thisProductRaw = productsRaw[thisProductId];
        productsAll[iProduct++] = new Product(
            thisProductRaw.id,
            thisProductRaw.name,
            thisProductRaw.price,
            thisProductRaw.active,
            thisProductRaw.imagePath,
        );
    }

    // Filter the products and return only the active ones.
    return productsAll.filter(
        (product) => product.active
    );
}

export { getProductsActive };