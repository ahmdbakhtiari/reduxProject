export type ProductType = {
    id: number;
    picture: string;
    title: string;
    rank: number;
    price: string;
}

export type ProductDetailType = {
    id: number;
    picture: string;
    title: string;
    rank: number;
    price: string;
    description : string,
    inventory : number ,
    colors : string[],
}