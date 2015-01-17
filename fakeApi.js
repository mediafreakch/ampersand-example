var people = [{
  id: 1,
  firstName: 'Henrik',
  lastName: 'Joreteg',
  coolnessFactor: 11
}, {
  id: 2,
  firstName: 'Bob',
  lastName: 'Saget',
  coolnessFactor: 2
}, {
  id: 3,
  firstName: 'Larry',
  lastName: 'King',
  coolnessFactor: 4
}, {
  id: 4,
  firstName: 'Diana',
  lastName: 'Ross',
  coolnessFactor: 6
}, {
  id: 5,
  firstName: 'Crazy',
  lastName: 'Dave',
  coolnessFactor: 8
}, {
  id: 6,
  firstName: 'Larry',
  lastName: 'Johannson',
  coolnessFactor: 4
}];

module.exports = function(plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/api/people',
    handler: function(request, reply) {
      reply(people);
    }
  });
  next();
};

module.exports.attributes = {
  version: '0.0.0',
  name: 'fake_api'
};
