export interface BaseUseCaseInterface<TParam, TReturn> {
  run(params: TParam): TReturn
}
