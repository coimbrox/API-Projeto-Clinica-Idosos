'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })


// logs
Route.get('logs', 'LogController.index');


// cruds usuario
// Route.resource('users', 'UserController').apiOnly();
Route.get('users', 'UserController.index').middleware('auth');
Route.post('users', 'UserController.store');
Route.put('users/:id', 'UserController.update').middleware('auth');
Route.delete('users/:id', 'UserController.destroy').middleware('auth');
Route.post('/login', 'UserController.login');
Route.get('/logout', 'UserController.logout');


//rota agendamento
Route.get('agendamento', 'AgendamentoController.index');
Route.post('/agendamento', 'AgendamentoController.store').middleware('auth');
Route.put('agendamento/:id', 'AgendamentoController.update').middleware('auth');
Route.delete('agendamento/:id', 'AgendamentoController.destroy').middleware('auth');
