'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendamentoSchema extends Schema {
  up () {
    this.create('agendamentos', (table) => {
      table.increments()
      table.string('username').notNullable()
      table.string('med_name').notNullable()
      table.date('data').notNullable()
      table.string('dias').notNullable();
      table.string('hora').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('agendamentos')
  }
}

module.exports = AgendamentoSchema
