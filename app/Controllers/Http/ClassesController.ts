import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class'

export default class ClassesController {
  public async index({}: HttpContextContract) {
    const classes = await Class.all()

    return classes
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['studentId', 'status', 'professorId', 'date'])
    const classes = await Class.create({
      studentId: body.studentId,
      status: body.status,
      professorId: body.professorId,
      date: body.date,
    })

    return classes
  }

  public async show({ request }: HttpContextContract) {
    const classId = request.param('id')
    const classFound = await Class.findOrFail(classId)

    return classFound
  }

  public async update({ request }: HttpContextContract) {
    const classId = request.param('id')
    const body = request.only(['studentId', 'status', 'professorId', 'date'])

    const classFound = await Class.findOrFail(classId)
    await classFound.merge(body).save()

    return classFound
  }

  public async destroy({ request }: HttpContextContract) {
    const classId = request.param('id')
    const classFound = await Class.findOrFail(classId)
    await classFound.delete()

    return true
  }
}
