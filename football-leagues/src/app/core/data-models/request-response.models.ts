export interface RequestResponse<T> {
    data: T[];
    meta: Meta;
}

export interface Meta {
    pagination: Pagination;
    plans: Plans[];
    sports: Sports[];
}

export interface IncludedData<T> {
    data: T;
}

export interface IncludedArrayData<T> {
    data: T[];
}

export interface Pagination {
    count: 4,
    current_page: 1,
    links: Links,
    per_page: 100,
    total: 4,
    total_pages: 1,
}

export interface Plans {
    features: string,
    name: string,
    price_monthly: string,
    price_yearly: string,
    request_limit: string,
    sport: string
}

export interface Sports {
    current: boolean,
    id: number,
    name: string
}

interface Links {
    link: string;
}