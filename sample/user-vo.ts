import { Prop } from '@geckoai/class-transformer';

/**
 * @class UserVo
 */
export class UserVo {
  @Prop.default
  public id: number;

  @Prop.default
  public name: string;

  @Prop.default
  public password: string;
}
