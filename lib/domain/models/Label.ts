import {Table, Column, Model, HasOne, Is, NotEmpty, IsEmail} from 'sequelize-typescript'
import {LabelLocation} from "./LabelLocation";
import {Country} from "./Country";

@Table({tableName: 'labels'})
export class Label extends Model {
    @Column
    name: string

    @Column
    locationId: number

    @HasOne(() => LabelLocation, 'id')
    location: LabelLocation
}
