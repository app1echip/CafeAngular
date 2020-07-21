export class OrdreFood {
    id: OrdreFood.Id
    qty: bigint
}
export namespace OrdreFood {
    export class Id {
        ordre: string
        food: string
    }
}
