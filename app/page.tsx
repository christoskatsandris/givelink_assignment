import * as controller from "@/app/controller/home_page_controller";
import ProductCard from "./view/components/product_card";

export default async function Home() {
    const products = await controller.getProductsActive();
    const productCards = products.map((product) => <ProductCard product={product} key={product.id}/>);

    return (
        <main>
            <div className="pageTitle">
                Διαθέσιμα προϊόντα
            </div>

            <div className="productList">
                {productCards}
            </div>
        </main>
    );
}