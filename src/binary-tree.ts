import { BinaryTreeNode } from "./binary-tree-node";

export class BinaryTree<T> {
    private root: BinaryTreeNode<T>;
   // private _node: object = [];
    public find(key: number): BinaryTreeNode<T> {
        let current: BinaryTreeNode<T> = this.root;
        while (current.getKey() !== key) {
            current = key < current.getKey() ? current.getLeft() : current.getRight();
            if (current === undefined) { return null; }
        }
        return current;
    }
    public insert(insertData: T, key: number): void {
        let current: BinaryTreeNode<T> = this.root;
        let parent: BinaryTreeNode<T>;
        const newNode: BinaryTreeNode<T> = new BinaryTreeNode<T>(insertData, key);
        if (this.root === undefined) { this.root = newNode; } else {
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

    }
    /*public print(startNode: BinaryTreeNode<T>): void {
        if (startNode !== undefined) {
            this.print(startNode.getLeft());
            this.print(startNode.getRight());
        }
    }*/
    public getSuccessor(deleteNode: BinaryTreeNode<T>): BinaryTreeNode<T> {
        let parentSuccessor: BinaryTreeNode<T> = deleteNode;
        let successor: BinaryTreeNode<T>;
        let current: BinaryTreeNode<T> = successor.getRight();
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
    }
    public delete(key: number): boolean {
        let current: BinaryTreeNode<T> = this.root;
        let parent: BinaryTreeNode<T>;
        let isLeft: boolean = false;
        while (current.getKey() !== key) {
            parent = current;
            if (key < current.getKey()) {
                current = current.getLeft();
                isLeft = true;
            } else {
                isLeft = false;
                current = current.getRight();
            }
            if (current === undefined) { return false; }
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
            const successor: BinaryTreeNode<T> = this.getSuccessor(current);
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
    }
}
