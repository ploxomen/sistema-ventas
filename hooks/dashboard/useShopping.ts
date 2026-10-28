import { CartItem } from "@/types/pos"
import { useState } from "react"

export const useShopping = () => {
    const [products, setProducts] = useState<CartItem[]>([]);
    const addProduct = (productId : number) => {
        const productFind = products.find(prod => prod.productId === productId);
        
    }
}