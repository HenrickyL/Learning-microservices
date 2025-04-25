export type CheckoutRequest = {
    courseId: string,
    name: string,
    email: string,
    creditCardToken: string
}

export type CheckoutResponse = {
    orderId: string
}