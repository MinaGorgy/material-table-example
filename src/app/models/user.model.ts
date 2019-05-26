// Creating data model because of resciveing diffrant data types from API to keep it stronglly typed 
export interface User {
    id: number;
    title: string;
    url: string;
    thumbnailUrl : string;
}