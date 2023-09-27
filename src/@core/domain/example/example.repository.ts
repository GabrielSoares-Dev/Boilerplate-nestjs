import type { ExampleDto } from '@domain/example';

export interface ExampleRepositoryInterface {
  create(example: ExampleDto): Promise<ExampleDto>;
}
