import {
  AllowNull,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({
  underscored: true,
})
export default class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(40), // שם משתמש צריך להיות VARCHAR(40)
    allowNull: false,
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(40), // שם משתמש צריך להיות VARCHAR(40)
    allowNull: false,
  })
  username: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(40), // סיסמה צריכה להיות VARCHAR(40)
    allowNull: false,
  })
  password: string;
}
