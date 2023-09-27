import type { ExampleRepositoryInterface, ExampleDto } from '@domain/example';

export class ExampleUseCase {
  constructor(private exampleRepository: ExampleRepositoryInterface) {}

  async run(example: ExampleDto) {
    return await this.exampleRepository.create(example);
  }
}
