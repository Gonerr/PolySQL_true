//подключение к базе со схемой пользователей
const { Pool } = require('pg');
//наташа
const pool = new Pool({
    user: 'spiridonovand',
    host: 'localhost',
    database: 'postgres',
    password: 'spinat',
    port: 5432,
});

//настя (ЧЕКАЙ ЭТО, когда работаешь ты, то раскомментируй, а мое закомментриуй
//
// const pool = new Pool({
//  user: 'postgres',
//host: 'localhost',
// database: 'postgres',
// password: 'ahodut22',
// port: 5432,
//});
module.exports = pool;