import { ApiProperty } from "@nestjs/swagger";

/**
 * Base pagination fields
 */
export class Pagination {

  /** number of items to take aka. page size */
  @ApiProperty()
  public take: number;

  /** requested page */
  @ApiProperty()
  public page: number;

  /** 
   * number of items to skip
   * @calculated
   */
  public get skip(): number {
    return this.take * (this.page - 1);
  }

  constructor(take: number, page: number) {
    this.take = take;
    this.page = page;
  }

}