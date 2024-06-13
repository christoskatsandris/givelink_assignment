import { Product } from "@/app/model/product";

const formatter = new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR'   
});

export default function ProductCard({product}: { product: Product }) {
    // Inspired by: https://dribbble.com/shots/20041878-Product-card-UI

    return (
        <div className="productCard">
            <div className="productImage">
                <img src={`https://be2.givelink.app/images/products/${product.imagePath}`}/>
            </div>
            <div className="productName">
                {product.name}
            </div>
            <div className="productOrder">
                <div className="productPrice">
                    {formatter.format(product.price)}
                </div>
                <button className="productButton">Προσθήκη</button>
            </div>
        </div>
    );
}