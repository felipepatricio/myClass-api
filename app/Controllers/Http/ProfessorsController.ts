import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from 'App/Models/Professor'

export default class ProfessorsController {
  public async index({}: HttpContextContract) {
    const professors = await Professor.all()

    return professors
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['name', 'birthDate', 'cpf', 'email'])
    const professor = await Professor.create({
      name: body.name,
      cpf: body.cpf,
      email: body.email,
      birthDate: body.birthDate,
    })

    return professor
  }

  public async show({ request }: HttpContextContract) {
    const professorId = request.param('id')
    const professor = await Professor.findOrFail(professorId)

    return professor
  }

  public async update({ request }: HttpContextContract) {
    const professorId = request.param('id')
    const body = request.only(['name', 'birthDate', 'cpf', 'email'])
    const professor = await Professor.findOrFail(professorId)
    await professor.merge(body).save()

    return professor
  }

  public async destroy({ request }: HttpContextContract) {
    const professorId = request.param('id')
    const professor = await Professor.findOrFail(professorId)
    await professor.delete()

    return true
  }
}
