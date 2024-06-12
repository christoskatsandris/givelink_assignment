// A model class to contain the product data returned from Givelink API.

class Product {
    id: string;
    name: string;
    price: number;
    active: boolean;
    imagePath: string;

    constructor(
        id: string,
        name: string,
        price: number,
        active: boolean,
        imagePath: string,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.active = active;
        this.imagePath = imagePath;
    }
}

export { Product }