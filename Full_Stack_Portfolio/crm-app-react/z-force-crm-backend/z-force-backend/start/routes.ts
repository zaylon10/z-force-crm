import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const TestsController = () => import('#controllers/test_controller')
// Root route
router.get('/', async () => {
  return 'Hello world'
})

// Simple test route
router.get('/test-db', async () => {
  return { name: 'Zaylon Freeman' }
})

// controllers route
router.get('/controller', [TestsController, 'index'])

router.post('/users', [UsersController, 'store'])

