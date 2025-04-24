import { IEntity } from "@infra/core/IEntity";

export class Course implements IEntity{
    constructor(
        readonly courseId: string,
        readonly title: string,
        readonly amount: number
    ){}


}