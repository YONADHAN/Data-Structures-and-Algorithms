class TrieNode {
    constructor(){
        this.children = {};
        this.EndWord = false;
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let curr = this.root
        for(let val of word){
            if(!curr.children[val]){
                curr.children[val] = new TrieNode()
            }
            curr = curr.children[val]
        }
        curr.EndWord = true;
    }

    longestPrefix(){
        let prefix  = "";
        let curr = this.root;
        while(curr){
            let keys = Object.keys(curr.children);
            if(keys.length!==1 || curr.EndWord)break;
            let key = keys[0];
            prefix+=key;
            curr = curr.children[char]
        }
        return prefix;
    }

    collectAllWords(prefix, curr, words=[]){
        if(curr.EndWord){
            words.push(prefix);
        }

        for(let key in curr.children){
            this.collectAllWords(prefix+key,curr.children[key],words)
        }

        return words;
    }



    autocomplete(prefix){
        let curr = this.root;
        for(let val of prefix){
            if(!curr.children[val]){
                return "Not Found"
            }
            curr = curr.children[val];
        }
        return this.collectAllWords(prefix, curr);
    }


    search(prefix) {
        let curr = this.root;

        for(let val of prefix){
            if(!curr.children[val]){
                return false
            }
            curr = curr.children[val];
        }
        return curr.EndWord;
    }
}

