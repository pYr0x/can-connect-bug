import "can-view-autorender";
import "main-comp";
import "first-comp";
import "second-comp";

import stache from "can-stache";

var template = stache('<x-main><x-first vm:foo:from="scope.vars.foo"></x-first><br><x-second vm:bar:to="scope.vars.foo"></x-second><br>Reference: {{scope.vars.foo}}</x-main>');

document.querySelector("#append").appendChild(template({}));