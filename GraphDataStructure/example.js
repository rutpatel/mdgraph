var digraph = require('./digraph');
var g = digraph();
g.add.node('a', 'GroupA',['atr1', 'atr2']);
g.add.node('b', 'GroupB',['atr1']);
g.add.node('c', 'GroupB',['atr1']);
g.add.edge('a','b');
g.add.edge('a','c','LABEL');
g.add.edge('a','d');
console.log(g.get.nodes());
console.log(g.get.edges());
console.log(g.get.out.edges('a'));
console.log(g.get.in.edges('c'));
console.log(g.indexof('d'));
console.log(g.export.obj());
console.log(g.export.dot());