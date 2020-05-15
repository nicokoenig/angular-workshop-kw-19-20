/* tslint:disable */
import { PublisherApiModel } from './publisher-api-model';
export interface BookApiModel  {
  abstract: string;
  author: string;
  cover: string;

  /**
   * isbn of the book
   */
  isbn: string;
  numPages: number;
  publisher: PublisherApiModel;
  subtitle: string;
  title: string;
}
