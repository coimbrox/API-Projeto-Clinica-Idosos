'use strict'

const Agendamento = use('App/Models/Agendamento');

const Log = use('App/Models/Log');

class AgendamentoController {



//ver agendamentos
async index ({ request, response, view }) {
  const agendamentos = await Agendamento.query().with('user').fetch();

  return agendamentos;
}

//  criar agendamento
async store ({request, response, auth}) {
  const {Controller, Action} = request.all();
  const {id}= auth.user;
  //nome, email, username, data, hora, med_name
const {username, data, hora, med_name} = request.all();

const agendamento = await Agendamento.create({username, data, hora, med_name, user_id:id});
const logs = await Log.create({ Controller: 'Agendamento', Action: 'Criar', user_id: id});
return agendamento, logs, response.status(200).send({message:'Agendamento Concluido'});
}
//atualizar
async update ({ params, request, response, auth }) {
  const {Controller, Action} = request.all();
  const {id}= auth.user;
  const agendamento = await agendamento.findOrFail(params.id);
  const {username, data, hora, med_name} = request.all();
  const logs = await Log.create({ Controller: 'Agendamento', Action:'Editar', user_id:id});
  agendamento.merge({username, data, hora, med_name, user_id:id});
  await banner.save();

  return agendamento,logs,response.status(200).send({message: 'Agendamento Editado'});
}

//remover
async destroy ({ params, request, response, auth }) {
  const {Controller, Action} = request.all();
  const {id}= auth.user;
  const agendamento = await agendamento.findOrFail(params.id);
const logs = await Log.create({ Controller: 'Agendamento', Action:'Deletar', user_id:id});
await agendamento.delete();
return logs, response.status(200).send({message: 'Banner Removido'});
}

}

module.exports = AgendamentoController
