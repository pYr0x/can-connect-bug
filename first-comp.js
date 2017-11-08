import "can-stache-bindings";
import Component from "can-component";
import DefineMap from "can-define/map/";
import stache from "can-stache";

const ViewModel = DefineMap.extend({
  foo: {
    type: "string",
    value: "foo"
  }
});

Component.extend({
  tag: "x-first",
  ViewModel: ViewModel,
  view: stache("Foo is: {{foo}}"),
  events: {}
});