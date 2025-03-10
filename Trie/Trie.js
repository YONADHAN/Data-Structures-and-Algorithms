class TrieNode {
    constructor() {
        this.children = {}
        this.EndWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let curr = this.root
        for (let val of word) {
            if (!curr.children[val]) {
                curr.children[val] = new TrieNode()
            }
            curr = curr.children[val]
        }
        curr.EndWord = true
    }
    longestPrefix() {
        let curr = this.root
        let prefix = ""

        while (curr) {
            const keys = Object.keys(curr.children)

            if (keys.length !== 1 || curr.EndWord) break

            let char = keys[0]
            prefix += char
            curr = curr.children[char]
        }
        return prefix
    }

    collectAllWords(prefix, curr, word = []) {
        if (curr.EndWord) {
            word.push(prefix)
        }

        for (let key in curr.children) {
            this.collectAllWords(prefix + key, curr.children[key], word)
        }
        return word
    }

    autoComplete(prefix) {
        let curr = this.root
        // let words = []

        for (let val of prefix) {
            if (!curr.children[val]) {
                return 'not fount'
            }
            curr = curr.children[val]
        }
        return this.collectAllWords(prefix, curr)
        // return words
    }

    search(prefix) {
        let curr = this.root

        for (let val of prefix) {
            if (!curr.children[val]) {
                return false
            }
            curr = curr.children[val]
        }
        return curr.EndWord
    }
}


const trie = new Trie()

trie.insert('Aswin')

console.log(JSON.stringify(trie))