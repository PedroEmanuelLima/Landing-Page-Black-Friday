export type ProductType = {
    imageModule: {
        imagePathList: string[]
    },
    priceModule: {
        discount: number,
        discountPromotion: boolean,
        formatedActivityPrice: string,
        formatedPrice: string
    },
    titleModule: {
        subject: string
    }
}