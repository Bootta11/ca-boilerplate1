import {Table, Column, Model, HasOne, Is, NotEmpty, IsEmail} from 'sequelize-typescript'
import {LabelLocation} from "./LabelLocation";
import {Country} from "./Country";

@Table({tableName: 'users'})
export class User extends Model {
    @Column
    name: string

    @Column
    lastname: string

    @Column
    email: string
}
