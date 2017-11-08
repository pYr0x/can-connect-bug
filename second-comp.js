import "can-stache-bindings";
import Component from "can-component";
import DefineMap from "can-define/map/";
import stache from "can-stache";

const ViewModel = DefineMap.extend({
  bar: {
    type: "string",
    value: "bar"
  }
});

Component.extend({
  tag: "x-second",
  ViewModel: ViewModel,
  view: stache('Bar is: {{bar}}'),
  events: {}
});