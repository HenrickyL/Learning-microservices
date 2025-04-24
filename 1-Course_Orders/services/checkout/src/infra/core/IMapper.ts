export interface IMapper<ENTITY, MODEL>{
    toEntity(model: MODEL, populate?:boolean): ENTITY;
    toModelAsync?(entity: ENTITY): Promise<MODEL>;
    toModel?(entity: ENTITY): MODEL;
}