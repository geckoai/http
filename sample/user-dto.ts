import { Typed } from '@geckoai/class-transformer';
import { ApiProperty, ApiRequest } from '../src';

@ApiRequest({
  url: '/user/{id}',
  method: 'post',
  description: '修改用户',
  scene: 'UserVO',
})
/**
 * @class UserDto
 */
export class UserDto {
  @ApiProperty({
    description: 'ID',
    in: 'path',
  })
  @Typed()
  public id: number;

  @ApiProperty({
    description: 'name',
    in: 'query',
  })
  @Typed()
  public name: string;

  @ApiProperty({
    description: 'name',
    in: 'query',
    required: true,
  })
  @Typed({ required: true })
  public password: string;
}
