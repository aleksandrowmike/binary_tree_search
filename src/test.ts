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

const key: number = 3;
const finds: BinaryTreeNode<string> = Tree.find(key);
const root = document.createElement("div");
root.id = "" + key;
root.setAttribute("data-branch", "root");
const text = document.createElement("span");
text.append(key.toString());
text.classList.add("root-text");
root.appendChild(text);
document.getElementById("container").appendChild(root);
Tree.print(finds);
