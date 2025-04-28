export enum SortOrder{
    ASC = 'asc',
    DESC = 'desc'
}

export interface PaginationRequest<SORT,FILTER=any>{
    sortOrder?: SortOrder
    skip?: number;
    take?: number;
    sortField?: SORT 
    filterField?: FILTER
    filterValue?: string
}
  
export interface PaginationInfo{
    currentPage: number,
    totalCount: number// | number[],
    pageCount: number// | number[],
    perPage: number
}

export interface PaginationResponse<T>{
    data: T[] | T,
    pagination:PaginationInfo
  }