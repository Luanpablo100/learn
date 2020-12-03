//npm install lowdb
const low = require('lowdb')
const db = lowdb('configs.json')

db.defaults({ //Valores padrão para quando o arquivo é criado
    users: [],
    preferences: []
}).write()

db.get('users').push({ //Adicionar novos valores
    name: 'Luan',
    dob: '27/06/2003'
}).write()

db.set('settings.window', true).write() //Criar novo objeeto com valores
    
const n = db.get('users').find( //Procurar valores
    {id: '1' }
).value()
console.log(n)

db.get('users').remove( //Remover valores
    {id: '1'}
).write()

