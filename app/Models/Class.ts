import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public studentName: string

  @column()
  public studentId: number

  @column()
  public status: string

  @column()
  public professorName: string

  @column()
  public professorId: number

  @column.dateTime()
  public date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
