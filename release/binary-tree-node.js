"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(insertData, key) {
        this._Data = insertData;
        this._Key = key;
    }
    BinaryTreeNode.prototype.printNode = function () {
        /* const links: object[] = [];
        if (this._Right !== undefined) {
            links.push({"source": this.getKey(), "target": this._Right.getKey()});
            if (this._Right._Right !== undefined) {
                links.push({"source": this._Right.getKey(), "target": this._Right._Right.getKey()});
            }
        }
        if (this._Left !== undefined) {
            links.push({"source": this.getKey(), "target": this._Left.getKey()});
        }
        // console.log(`Key: ${this._Key} Data: ${this._Data.toString()}`);
        return links; */
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
}());
exports.BinaryTreeNode = BinaryTreeNode;
