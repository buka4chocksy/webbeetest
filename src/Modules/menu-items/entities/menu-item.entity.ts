import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsTo
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';

@Table({
  tableName: 'menu_item',
  updatedAt: false,
})
export default class MenuItem extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  declare name: string;

  @Column
  declare url: string;

  @Column({
    type: 'integer',
    defaultValue: null,
  } as ModelAttributeColumnOptions)
  declare parentId: number;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare createdAt: Date;

  @BelongsTo(() => MenuItem, { onDelete: 'CASCADE', foreignKey: 'parentId' })
  declare parents: MenuItem;
}
