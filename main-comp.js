import "can-stache-bindings";
import Component from "can-component";
import DefineMap from "can-define/map/";
import stache from "can-stache";

const ViewModel = DefineMap.extend({});

Component.extend({
  tag: "x-main",
  ViewModel: ViewModel,
  view: stache('<content/>'),
  events: {},
  leakScope: true
});