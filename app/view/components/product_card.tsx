import { Product } from "@/app/model/product";

export default function ProductCard({product}: { product: Product }) {
    return (
        <div>
            {product.name}
        </div>
    );
}