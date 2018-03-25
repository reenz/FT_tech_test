
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rating').del()
    .then(function () {
      // Inserts seed entries
      return knex('rating').insert([
        {rating: 1},
        {rating: 2},
        {rating: 1}
      ]);
    });
};
