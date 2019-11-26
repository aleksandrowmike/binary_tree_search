export class BinaryTreeNode<T> {
    private _Left: BinaryTreeNode<T>;
    private _Right: BinaryTreeNode<T>;
    private _Key: number;
    private _Data: T;
    constructor(insertData: T, key: number) {
        this._Data = insertData;
        this._Key = key;
    }
    public printNode(): void {
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
