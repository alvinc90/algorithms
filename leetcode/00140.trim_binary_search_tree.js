// 669. Trim a Binary Search Tree

// Given the root of a binary search tree and the lowest and highest boundaries 
// as low and high, trim the tree so that all its elements lies in [low, high]. 
// Trimming the tree should not change the relative structure of the elements 
// that will remain in the tree (i.e., any node's descendant should remain a 
// descendant). It can be proven that there is a unique answer.

// Return the root of the trimmed binary search tree. Note that the root may 
// change depending on the given bounds.

var trimBST = function(root, low, high) {
    if(!root) return null;
    
    // if value is lower than low, we don't want anything from left; so go right
    if(root.val < low) {
        return trimBST(root.right, low, high);
    } // if value is higher than high, we dont want anything from right; so go left
    else if(root.val > high) {
        return trimBST(root.left, low, high);
    } else {
        // if value is in the boundary recursively call its left and right;
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
        return root;
    }
};

// time o(n) traversing all nodes
// space o(h) recursive calls because BST
// https://leetcode.com/problems/trim-a-binary-search-tree/
