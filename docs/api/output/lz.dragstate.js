Ext.data.JsonP.lz_dragstate({"tagname":"class","name":"lz.dragstate","autodetected":{},"files":[{"filename":"classdocs.js","href":"classdocs.html#lz-dragstate"}],"extends":"lz.state","members":[{"name":"applied","tagname":"cfg","owner":"lz.state","id":"cfg-applied","meta":{}},{"name":"dragaxis","tagname":"cfg","owner":"lz.dragstate","id":"cfg-dragaxis","meta":{}},{"name":"id","tagname":"cfg","owner":"lz.node","id":"cfg-id","meta":{}},{"name":"name","tagname":"cfg","owner":"lz.node","id":"cfg-name","meta":{}},{"name":"scriptincludes","tagname":"cfg","owner":"lz.node","id":"cfg-scriptincludes","meta":{}},{"name":"inited","tagname":"property","owner":"lz.node","id":"property-inited","meta":{"readonly":true}},{"name":"subnodes","tagname":"property","owner":"lz.node","id":"property-subnodes","meta":{"readonly":true}},{"name":"destroy","tagname":"method","owner":"lz.node","id":"method-destroy","meta":{}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"onapplied","tagname":"event","owner":"lz.state","id":"event-onapplied","meta":{}},{"name":"ondestroy","tagname":"event","owner":"lz.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"lz.node","id":"event-oninit","meta":{}},{"name":"onsubnodes","tagname":"event","owner":"lz.node","id":"event-onsubnodes","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-lz.dragstate","component":false,"superclasses":["Module","Eventable","lz.node","lz.state"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/lz.node' rel='lz.node' class='docClass'>lz.node</a><div class='subclass '><a href='#!/api/lz.state' rel='lz.state' class='docClass'>lz.state</a><div class='subclass '><strong>lz.dragstate</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/classdocs.html#lz-dragstate' target='_blank'>classdocs.js</a></div></pre><div class='doc-contents'><p>Allows views to be dragged by the mouse.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-applied' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.state' rel='lz.state' class='defined-in docClass'>lz.state</a><br/><a href='source/layout.html#lz-state-cfg-applied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.state-cfg-applied' class='name expandable'>applied</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, the state is applied. ...</div><div class='long'><p>If true, the state is applied.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-dragaxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.dragstate'>lz.dragstate</span><br/><a href='source/classdocs.html#lz-dragstate-cfg-dragaxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.dragstate-cfg-dragaxis' class='name expandable'>dragaxis</a> : \"x\"/\"y\"/\"both\"<span class=\"signature\"></span></div><div class='description'><div class='short'>The axes to drag on. ...</div><div class='long'><p>The axes to drag on.</p>\n<p>Defaults to: <code>&quot;both&quot;</code></p></div></div></div><div id='cfg-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='cfg-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='cfg-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-inited' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-property-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-property-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='property-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-property-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-property-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this node's child nodes ...</div><div class='long'><p>An array of this node's child nodes</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onapplied' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.state' rel='lz.state' class='defined-in docClass'>lz.state</a><br/><a href='source/layout.html#lz-state-event-onapplied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.state-event-onapplied' class='name expandable'>onapplied</a>( <span class='pre'>applied</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the state has been applied or unapplied. ...</div><div class='long'><p>Fired when the state has been applied or unapplied. Onapplied handlers run in the scope of the state itself, see dragstate for an example.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>applied</span> : Boolean<div class='sub-desc'><p>If true, the state was applied.</p>\n</div></li></ul></div></div></div><div id='event-ondestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-onsubnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-onsubnodes' class='name expandable'>onsubnodes</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node's subnodes array has changed ...</div><div class='long'><p>Fired when this node's subnodes array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});