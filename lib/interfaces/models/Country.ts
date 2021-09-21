import { Table, Column, Model } from 'sequelize-typescript'

@Table({tableName: 'countries', timestamps: false})
export class Country extends Model {
    @Column
    code: string

    @Column
    code_3c: string

    @Column
    name: string
}
