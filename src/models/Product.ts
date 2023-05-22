type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    { title: 'ProdutoX', price: 30 },
    { title: 'ProdutoY', price: 15 },
    { title: 'ProdutoZ', price: 45 },
    { title: 'ProdutoG', price: 5 },
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter( p => price <= p.price );
    }
};