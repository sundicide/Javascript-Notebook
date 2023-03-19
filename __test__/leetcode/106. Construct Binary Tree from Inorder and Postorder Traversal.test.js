import { LOG, expectEqualTest } from '../utils';

function LogTreeNode(tree) {
  if (!tree) return;

  const resultArr = [];

  resultArr.push(tree.val);

  function recursive(iterTree) {
    if (!iterTree) {
      return;
    }

    if (iterTree.left) {
      resultArr.push(iterTree.left.val);
    } else {
      resultArr.push(null);
    }
    if (iterTree.right) {
      resultArr.push(iterTree.right.val);
    } else {
      resultArr.push(null);
    }

    recursive(iterTree.left);
    recursive(iterTree.right);
  }
  recursive(tree);

  while (resultArr[resultArr.length - 1] === null) {
    resultArr.pop();
  }

  return resultArr;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('problem solving', () => {
  function solution(inorder, postorder) {
    function recursive(newInorder, newPostorder) {
      if (newInorder.length === 0) return null;

      const rootVal = newPostorder[newPostorder.length - 1];

      const rootValIdx = newInorder.findIndex((d) => d === rootVal);
      const newLeftInorder = newInorder.slice(0, rootValIdx);
      const newRightInorder = newInorder.slice(
        rootValIdx + 1,
        newInorder.length
      );
      const newLeftPostorder = newPostorder.slice(0, newLeftInorder.length);
      const newRightPostorder = newPostorder.slice(
        newLeftInorder.length,
        newPostorder.length - 1
      );

      return new TreeNode(
        rootVal,
        recursive(newLeftInorder, newLeftPostorder),
        recursive(newRightInorder, newRightPostorder)
      );
    }
    const result = recursive(inorder, postorder);
    return LogTreeNode(result);
  }

  // prettier-ignore
  expectEqualTest(solution([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]), [3, 9, 20, null, null, 15, 7]);
  // prettier-ignore
  expectEqualTest(solution([-1], [-1]), [-1]);
});
