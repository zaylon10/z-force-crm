// @ts-ignore
import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async store({ request, response }: HttpContext) {
    try {
      const data = request.only([
        'first_name',
        'last_name',
        'establishment',
        'email',
        'password',
      ])

      const user = await User.create(data)

      return response.status(201).json(user)
    } catch (error) {
      console.error(error)
      return response.status(400).json({ message: 'Error creating user', error })
    }
  }
}
