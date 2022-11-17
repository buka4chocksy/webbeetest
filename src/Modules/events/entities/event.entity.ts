import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  HasMany
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';
import Workshop from './workshop.entity';

@Table({
  updatedAt: false,
})
export default class Event extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  declare name: string;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare createdAt: Date;

  @HasMany(() => Workshop, {as : "workshops"})
  declare workshops : Workshop[]
}
