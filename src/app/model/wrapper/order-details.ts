export class OrderDetails {
    id: string;
    content: OrderDetails.Item[];
    time: Date;
}

export namespace OrderDetails {
    export class Item {
        id: string;
        qty: number;
    }
}
