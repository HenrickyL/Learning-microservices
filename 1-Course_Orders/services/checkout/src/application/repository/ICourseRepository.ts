import { IRepository } from "@application/infra/IRepository";
import { Course } from "@domain/entity/Course";

export interface ICourseRepository extends IRepository<Course>{
    get(couseId: string): Promise<Course>
}