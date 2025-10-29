import 'reflect-metadata'
import app from '@adonisjs/core/services/app'
import { Database } from '@adonisjs/lucid/database'

async function testConnection() {
  try {
    // Boot the application (needed for config/env)
    await app.boot()

    console.log('🔌 Testing MySQL database connection...')

    // Run a simple query
    const result = await Database.rawQuery('SELECT 1 + 1 AS result')

    console.log('✅ Database connection successful:', result[0])
  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    await Database.manager.closeAll()
  }
}

testConnection()
