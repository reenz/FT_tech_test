
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rating', function(table){
    table.increments();   
    table.integer('rating').notNullable();
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rating');
};
