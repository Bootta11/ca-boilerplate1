import {Table, Column, Model, HasOne} from 'sequelize-typescript'
import {Country} from "./Country";

@Table({tableName: 'label_locations'})
export class LabelLocation extends Model {
    @Column
    countryId: number

    @HasOne(() => Country, 'id')
    country: Country

    @Column
    address: string

    @Column
    unitOrApt: string

    @Column
    city: string

    @Column
    state: string

    @Column
    zip: string
}
