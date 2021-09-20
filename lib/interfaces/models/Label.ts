import {Table, Column, Model, HasOne, Is, NotEmpty} from 'sequelize-typescript'
import {LabelLocation} from "./LabelLocation";
import {Country} from "./Country";

@Table({tableName: 'labels'})
export class Label extends Model {
    @Column
    name: string

    @NotEmpty
    @Column
    locationId: number

    @HasOne(() => LabelLocation, 'id')
    location: LabelLocation
}
