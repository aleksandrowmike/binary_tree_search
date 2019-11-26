import * as d3 from "d3";
import { BinaryTree } from "./binary-tree";
import { BinaryTreeNode } from "./binary-tree-node";

const Tree: BinaryTree<string> = new BinaryTree<string>();

Tree.insert("John", 3);
Tree.insert("T1000", 8);
Tree.insert("Sara", 1);
Tree.insert("T800", 2);
Tree.insert("T400", 4);
Tree.insert("T900", 9);
Tree.insert("T1500", 15);
Tree.insert("T500", 5);
Tree.insert("T1200", 12);
Tree.insert("T1100", 11);
Tree.insert("T1300", 13);
Tree.insert("T1000", 10);


const finds: BinaryTreeNode<string> = Tree.find(3);
const links: object = Tree.print(finds);

console.log(links);

const nodes = {};

// Compute the distinct nodes from the links.
// tslint:disable-next-line:no-shadowed-variable
// @ts-ignore
// tslint:disable-next-line:no-shadowed-variable typedef
links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});

const force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([960, 500])
    .linkDistance(60)
    .charge(-300)
    .on("tick", tick)
    .start();

const svg = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 500);

const link = svg.selectAll(".link")
    .data(force.links())
    .enter().append("line")
    .attr("class", "link");

const node = svg.selectAll(".node")
    .data(force.nodes())
    .enter().append("g")
    .attr("class", "node")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .call(force.drag);

node.append("circle")
    .attr("r", 8);

node.append("text")
    .attr("x", 12)
    .attr("dy", ".35em")
    // tslint:disable-next-line:typedef
    .text(function(d) { return d.name; });

// tslint:disable-next-line:typedef
function tick() {
    link
        // tslint:disable-next-line:typedef
        .attr("x1", function(d) { return d.source.x; })
        // tslint:disable-next-line:typedef
        .attr("y1", function(d) { return d.source.y; })
        // tslint:disable-next-line:typedef
        .attr("x2", function(d) { return d.target.x; })
        // tslint:disable-next-line:typedef
        .attr("y2", function(d) { return d.target.y; });

    node
        // tslint:disable-next-line:typedef
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

// tslint:disable-next-line:typedef
function mouseover() {
    // tslint:disable-next-line:no-invalid-this
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 16);
}

// tslint:disable-next-line:typedef
function mouseout() {
    // tslint:disable-next-line:no-invalid-this
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 8);
}
