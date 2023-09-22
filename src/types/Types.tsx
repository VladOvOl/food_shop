export interface ICardPizza{
        id:number,
        img:string,
        title:string,
        smallPrice:number,
        mediumPrice:number,
        bigPrice:number

    }

export interface ICard{
    type?:string,
    img:string,
    title:string,
    price:number,
    ingridients?:string
}
export interface IPagination{
    pathname:string,
    length:number,
    current:number
}