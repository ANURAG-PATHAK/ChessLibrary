export class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        Object.defineProperties(this, {
            x: {
                get: () => this._x,
                set: (value: number) => this._x = value
            },
            y: {
                get: () => this._y,
                set: (value: number) => this._y = value
            }
        });
    }
}