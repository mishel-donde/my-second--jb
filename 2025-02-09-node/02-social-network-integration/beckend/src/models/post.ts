import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import User from "./User";
import Comment from "./comment";

@Table({
  underscored: true,
})
export default class Post extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  userId: string;

  @AllowNull(false)
  @Column(DataType.STRING(40))
  title: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  body: string;

  @AllowNull(true)
  @Column(DataType.STRING(225))
  imageUrl: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment)
  comments: Comment[];
}
