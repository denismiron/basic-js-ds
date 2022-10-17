const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    arr = []
    root() {
        return this.arr.length > 0 ? { data: this.arr[0] } : null;
    }

    add(data) {
        this.arr.push(data);
    }

    has(data) {
        return this.arr.includes(data);
    }

    find(data) {
        let res = this.arr.find(i => i === data);
        return res ? { data: res } : null;
    }

    remove(data) {
        this.arr = this.arr.filter(i => i !== data)
        return this.arr;
    }

    min() {
        return Math.min(...this.arr);
    }

    max() {
        return Math.max(...this.arr);
    }
}

module.exports = {
    BinarySearchTree
};