
export interface ResultInstance {
  id: number;
  title:string;
  image:string;
  imageType:string;
}
export interface ResponseInstance {
  results: ResultInstance[];
  offset: number;
  number: number;
  totalResults: number;
}