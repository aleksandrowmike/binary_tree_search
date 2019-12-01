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
    function BinaryTree() {
        this._node = [];
    }
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
    BinaryTree.prototype.print = function (startNode) {
        if (startNode !== undefined) {
            if (startNode.getLeft() !== undefined) {
                var left = document.createElement("div");
                left.id = "" + startNode.getLeft().getKey();
                left.setAttribute("data-branch", "left");
                var text = document.createElement("span");
                text.append(startNode.getLeft().getKey().toString());
                left.appendChild(text);
                if (document.getElementById(startNode.getKey().toString())) {
                    document.getElementById(startNode.getKey().toString()).appendChild(left);
                } else {
                    document.getElementById(startNode.getKey().toString()).appendChild(left);
                }
                this.print(startNode.getLeft());
                if (startNode.getRight()) {
                    left.classList.add("left");
                }
                if (startNode.getLeft()) {
                    left.classList.add("left");
                }
            }
            if (startNode.getRight() !== undefined) {
                var right = document.createElement("div");
                right.id = "" + startNode.getRight().getKey();
                right.setAttribute("data-branch", "right");
                var text = document.createElement("span");
                text.append(startNode.getRight().getKey().toString());
                right.appendChild(text);
                if (document.getElementById(startNode.getKey().toString())) {
                    document.getElementById(startNode.getKey().toString()).appendChild(right);
                }
                this.print(startNode.getRight());
                if (startNode.getRight()) {
                    right.classList.add("right");
                }
            }
        }
        return this._node;
    };
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
var binary_tree_1 = require("./binary-tree");
var Tree = new binary_tree_1.BinaryTree();
Tree.insert("John", 3);
Tree.insert("T1000", 8);
Tree.insert("T1500", 15);
Tree.insert("T500", 5);
Tree.insert("T1200", 12);
Tree.insert("T1100", 11);
Tree.insert("T1300", 13);
Tree.insert("T1000", 10);
Tree.insert("T1000", 17);
Tree.insert("Sara", 1);
Tree.insert("T800", 2);
Tree.insert("T400", 4);
Tree.insert("T900", 9);
var key = 3;
var finds = Tree.find(key);
var root = document.createElement("div");
root.id = "" + key;
root.setAttribute("data-branch", "root");
var text = document.createElement("span");
text.append(key.toString());
text.classList.add("root-text");
root.appendChild(text);
document.getElementById("container").appendChild(root);
Tree.print(finds);

},{"./binary-tree":2}]},{},[3])

//# sourceMappingURL=bundel.js.map
