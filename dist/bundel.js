(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode = /** @class */function () {
    function BinaryTreeNode(insertData, key) {
        this._Data = insertData;
        this._Key = key;
    }
    BinaryTreeNode.prototype.printNode = function () {
        var tree = [];
        tree.push({
            "key": this._Key,
            "data": this._Data,
            "leftChild": this._Left,
            "rightChild": this._Right
        });
        return tree;
    };
    BinaryTreeNode.prototype.getLeft = function () {
        return this._Left;
    };
    BinaryTreeNode.prototype.setLeft = function (value) {
        this._Left = value;
    };
    BinaryTreeNode.prototype.setRight = function (value) {
        this._Right = value;
    };
    BinaryTreeNode.prototype.getRight = function () {
        return this._Right;
    };
    BinaryTreeNode.prototype.getKey = function () {
        return this._Key;
    };
    return BinaryTreeNode;
}();
exports.BinaryTreeNode = BinaryTreeNode;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binary_tree_node_1 = require("./binary-tree-node");
var BinaryTree = /** @class */function () {
    function BinaryTree() {}
    // private _node: object = [];
    BinaryTree.prototype.find = function (key) {
        var current = this.root;
        while (current.getKey() !== key) {
            current = key < current.getKey() ? current.getLeft() : current.getRight();
            if (current === undefined) {
                return null;
            }
        }
        return current;
    };
    BinaryTree.prototype.insert = function (insertData, key) {
        var current = this.root;
        var parent;
        var newNode = new binary_tree_node_1.BinaryTreeNode(insertData, key);
        if (this.root === undefined) {
            this.root = newNode;
        } else {
            while (true) {
                parent = current;
                if (key < current.getKey()) {
                    current = current.getLeft();
                    if (current === undefined) {
                        parent.setLeft(newNode);
                        return;
                    }
                } else {
                    current = current.getRight();
                    if (current === undefined) {
                        parent.setRight(newNode);
                        return;
                    }
                }
            }
        }
    };
    /*public print(startNode: BinaryTreeNode<T>): void {
        if (startNode !== undefined) {
            this.print(startNode.getLeft());
            this.print(startNode.getRight());
        }
    }*/
    BinaryTree.prototype.getSuccessor = function (deleteNode) {
        var parentSuccessor = deleteNode;
        var successor;
        var current = successor.getRight();
        while (current !== undefined) {
            parentSuccessor = successor;
            successor = current;
            current = current.getLeft();
        }
        if (successor !== deleteNode.getRight()) {
            parentSuccessor.setLeft(successor.getRight());
            successor.setRight(deleteNode.getRight());
        }
        return successor;
    };
    BinaryTree.prototype.delete = function (key) {
        var current = this.root;
        var parent;
        var isLeft = false;
        while (current.getKey() !== key) {
            parent = current;
            if (key < current.getKey()) {
                current = current.getLeft();
                isLeft = true;
            } else {
                isLeft = false;
                current = current.getRight();
            }
            if (current === undefined) {
                return false;
            }
        }
        if (current.getLeft() === undefined && current.getRight() === undefined) {
            if (current === this.root) {
                current = undefined;
            } else if (isLeft) {
                parent.setLeft(undefined);
            } else {
                parent.setRight(undefined);
            }
        } else if (current.getRight() === undefined) {
            if (current === this.root) {
                this.root = current.getLeft();
            } else if (isLeft) {
                parent.setLeft(current.getLeft());
            } else {
                current.setRight(current.getLeft());
            }
        } else if (current.getLeft() === undefined) {
            if (current === this.root) {
                this.root = current.getRight();
            } else if (isLeft) {
                parent.setLeft(current.getRight());
            } else {
                parent.setRight(current.getRight());
            }
        } else {
            var successor = this.getSuccessor(current);
            if (current === this.root) {
                this.root = successor;
            } else if (isLeft) {
                parent.setLeft(successor);
            } else {
                parent.setRight(successor);
            }
            successor.setLeft(current.getLeft());
        }
        return true;
    };
    return BinaryTree;
}();
exports.BinaryTree = BinaryTree;

},{"./binary-tree-node":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import * as d3 from "d3";
var binary_tree_1 = require("./binary-tree");
var Tree = new binary_tree_1.BinaryTree();
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
var key = 3;
var finds = Tree.find(key);
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

},{"./binary-tree":2}]},{},[3])

//# sourceMappingURL=bundel.js.map
