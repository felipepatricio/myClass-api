import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all()

    return user
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['name', 'cpf', 'birthDate', 'email', 'phone', 'plan', 'password'])
    const user = await User.create({
      name: body.name,
      cpf: body.cpf,
      birthDate: body.birthDate,
      email: body.email,
      phone: body.phone,
      password: body.password,
      plan: body.plan,
    })

    return user
  }

  public async show({ request }: HttpContextContract) {
    const userdId = request.param('id')
    const user = await User.findOrFail(userdId)

    return user
  }

  public async update({ request }: HttpContextContract) {
    const userdId = request.param('id')
    const body = request.only(['name', 'cpf', 'birthDate', 'email', 'phone', 'plan', 'password'])
    const user = await User.findOrFail(userdId)
    await user.merge(body).save()
    return user
  }

  public async destroy({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    await user.delete()

    return true
  }
}
