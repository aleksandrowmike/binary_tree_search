export class BinaryTreeNode<T> {
    private _Left: BinaryTreeNode<T>;
    private _Right: BinaryTreeNode<T>;
    private _Key: number;
    private _Data: T;
    constructor(insertData: T, key: number) {
        this._Data = insertData;
        this._Key = key;
    }
    public printNode(): object {
        const tree: object[] = [];
        tree.push({
            "key": this._Key,
            "data": this._Data,
            "leftChild": this._Left,
            "rightChild": this._Right
        });
        return tree;
    }
    public getLeft(): BinaryTreeNode<T> {
        return this._Left;
    }
    public setLeft(value: BinaryTreeNode<T>): void {
        this._Left = value;
    }
    public setRight(value: BinaryTreeNode<T>): void {
        this._Right = value;
    }
    public getRight(): BinaryTreeNode<T> {
        return this._Right;
    }
    public getKey(): number {
        return this._Key;
    }
}
