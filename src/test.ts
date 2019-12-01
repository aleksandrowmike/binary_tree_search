import { BinaryTree } from "./binary-tree";
import { BinaryTreeNode } from "./binary-tree-node";

const Tree: BinaryTree<string> = new BinaryTree<string>();

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

let key: number = 3;
let finds: BinaryTreeNode<string> = Tree.find(key);
Tree.createRoot(key);
Tree.print(finds);

const add = document.getElementById("add");
add.addEventListener("click", () => {
    Tree.insert((<HTMLInputElement>document.getElementById("addKey")).value, Number((<HTMLInputElement>document.getElementById("addKey")).value));
    document.getElementById("container").innerHTML = "";
    Tree.createRoot(key);
    Tree.print(finds);
});

const del = document.getElementById("delete");
del.addEventListener("click", () => {
    Tree.delete(Number((<HTMLInputElement>document.getElementById("deleteKey")).value));
    document.getElementById("container").innerHTML = "";
    Tree.createRoot(key);
    Tree.print(finds);
});

const find = document.getElementById("find");

find.addEventListener("click", () => {
    key = Number((<HTMLInputElement>document.getElementById("findKey")).value);
    finds = Tree.find(key);
    document.getElementById("container").innerHTML = "";
    Tree.createRoot(key);
    Tree.print(finds);
});
