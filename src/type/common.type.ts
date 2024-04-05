export interface ApiResponse<
  T = undefined | null,
> {
  data?: T;
  message: string;
  statusCode: number;
  totalCount?: number;
}
