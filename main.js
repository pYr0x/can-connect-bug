import "can-view-autorender";
import "main-comp";
import "first-comp";
import "second-comp";

import stache from "can-stache";

var template = stache('<x-main>\n    <x-first vm:fooBar:from="scope.vars.foo"></x-first>\n    <br>\n    <x-second vm:barFoo:to="scope.vars.foo"></x-second>\n    <br>\n    Reference: {{scope.vars.foo}}\n</x-main>');

document.querySelector("#append").appendChild(template({}));