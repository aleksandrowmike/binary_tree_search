// import * as d3 from "d3";
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

const key: number = 3;
const finds: BinaryTreeNode<string> = Tree.find(key);

console.log(finds.printNode());

// const treeData: object = Tree.print(finds);
//
// console.log(treeData);
//
// // ************** Generate the tree diagram	 *****************
// const margin = {top: 20, right: 120, bottom: 20, left: 120},
//     width = 960 - margin.right - margin.left,
//     height = 500 - margin.top - margin.bottom;
//
// let i = 0;
//
// const tree = d3.layout.tree()
//     .size([height, width]);
//
// const diagonal = d3.svg.diagonal()
//     // tslint:disable-next-line:typedef
//     .projection(function(d) { return [d.y, d.x]; });
//
// const svg = d3.select("body").append("svg")
//     .attr("width", width + margin.right + margin.left)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
// const root = treeData;
//
// update(root);
//
// // tslint:disable-next-line:typedef
// function update(source) {
//
//     // Compute the new tree layout.
//     const nodes = tree.nodes(root).reverse(),
//         links = tree.links(nodes);
//
//     // Normalize for fixed-depth.
//     // tslint:disable-next-line:typedef
//     nodes.forEach(function(d) { d.y = d.depth * 180; });
//
//     // Declare the nodes…
//     const node = svg.selectAll("g.node")
//         // tslint:disable-next-line:typedef
//         .data(nodes, function(d) { return d.id || (d.id = ++i); });
//
//     // Enter the nodes.
//     const nodeEnter = node.enter().append("g")
//         .attr("class", "node")
//         // tslint:disable-next-line:typedef
//         .attr("transform", function(d) {
//             return "translate(" + d.y + "," + d.x + ")"; });
//
//     nodeEnter.append("circle")
//         .attr("r", 10)
//         .style("fill", "#fff");
//
//     nodeEnter.append("text")
//         // tslint:disable-next-line:typedef
//         .attr("x", function(d) {
//             return d.children || d._children ? -13 : 13; })
//         .attr("dy", ".35em")
//         // tslint:disable-next-line:typedef
//         .attr("text-anchor", function(d) {
//             return d.children || d._children ? "end" : "start"; })
//         // tslint:disable-next-line:typedef
//         .text(function(d) { return d.name; })
//         .style("fill-opacity", 1);
//
//     // Declare the links…
//     const link = svg.selectAll("path.link")
//         // tslint:disable-next-line:typedef
//         .data(links, function(d) { return d.target.id; });
//
//     // Enter the links.
//     link.enter().insert("path", "g")
//         .attr("class", "link")
//         .attr("d", diagonal);
// }
