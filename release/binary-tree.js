"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_tree_node_1 = require("./binary-tree-node");
var BinaryTree = /** @class */ (function () {
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
        }
        else {
            while (true) {
                parent = current;
                if (key < current.getKey()) {
                    current = current.getLeft();
                    if (current === undefined) {
                        parent.setLeft(newNode);
                        return;
                    }
                }
                else {
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
            this.print(startNode.getLeft());
            if (startNode.getLeft() !== undefined) {
                this._node.push({ "source": startNode.getKey(), "target": startNode.getLeft().getKey() });
            }
            if (startNode.getRight() !== undefined) {
                this._node.push({ "source": startNode.getKey(), "target": startNode.getRight().getKey() });
            }
            this.print(startNode.getRight());
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
            }
            else {
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
            }
            else if (isLeft) {
                parent.setLeft(undefined);
            }
            else {
                parent.setRight(undefined);
            }
        }
        else if (current.getRight() === undefined) {
            if (current === this.root) {
                this.root = current.getLeft();
            }
            else if (isLeft) {
                parent.setLeft(current.getLeft());
            }
            else {
                current.setRight(current.getLeft());
            }
        }
        else if (current.getLeft() === undefined) {
            if (current === this.root) {
                this.root = current.getRight();
            }
            else if (isLeft) {
                parent.setLeft(current.getRight());
            }
            else {
                parent.setRight(current.getRight());
            }
        }
        else {
            var successor = this.getSuccessor(current);
            if (current === this.root) {
                this.root = successor;
            }
            else if (isLeft) {
                parent.setLeft(successor);
            }
            else {
                parent.setRight(successor);
            }
            successor.setLeft(current.getLeft());
        }
        return true;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
