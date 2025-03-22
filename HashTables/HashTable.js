class HashTable {
    // CONSTRUCTOR
    constructor(size =7 ) {
        this.dataMap = new Array(size);
    }

    // HASH
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    // SET
    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
        return this;
    }

    // GET
    get(key) {
        let index = this._hash(key);

        if (!this.dataMap[index]) return undefined;

        for (let i = 0; i < this.dataMap[index].length; i++) {
            if (this.dataMap[index][i][0] === key) {
                return this.dataMap[index][i][1];
            }
        }

        return undefined;
    }

    // KEYS
    keys() {
        let allKeys = new Array();

        for (let i = 0; i < this.dataMap.length; i++ ) {
            if(this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return allKeys;
    }


}


let myHashTable = new HashTable(7);

console.log( myHashTable.set("nails", 120) );
console.log( myHashTable.set("bolts", 1400) );
console.log( myHashTable.set("washers", 50) );

console.log(myHashTable.get("washers"));

console.log(myHashTable.keys());