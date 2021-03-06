// 501. Find Mode in Binary Search Tree

// Given the root of a binary search tree (BST) with duplicates, return all the 
// mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.



Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
var findMode = function(root) {
    let arr = []; // o(n)
    let hash = {}; // o(n)
    let stack = [root]; // o(1)
    
    while(stack.length) { // o(n)
        const node = stack.pop();
        if(hash[node.val] === undefined) hash[node.val] = 0;
        hash[node.val]++
        
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    
    const array = Object.values(hash); // o(n)
    const most = Math.max(...array); // o(n)
    
    for(const[k, v] of Object.entries(hash)) { // o(n)
        if(v === most) arr.push(parseInt(k));
    }
    return arr;
};

// time o(4n) => o(n)
// space o(2n) => o(n)

// https://leetcode.com/problems/find-mode-in-binary-search-tree/