const DefineMap = require('can-define/map/');
const DefineList = require('can-define/list/');
const set = require('can-set');
const baseMap = require('can-connect/can/base-map/');

const Probe = DefineMap.extend({
  seal: false
}, {
  'probe_id': 'any'
});

const algebra = new set.Algebra(
  set.props.id('probe_id')
);

Probe.List = DefineList.extend({
  '#': Probe
});

Probe.connection = baseMap({
  url: '/api/probe',
  Map: Probe,
  List: Probe.List,
  name: 'probe',
  algebra
});

module.exports = Probe;