const { Tree } = require("../tree");
function searchFile(root, extension) {
  if (root.children.length == 0) {
    if (root.name.split(".")[1] == extension) {
      return root.name;
    }
    return null;
  }
  for (var i = 0; i < root.children.length; i++) {
    var result = searchFile(root.children[i], extension);
    if (result != null) {
      return result;
    }
  }
  return null;
}

const tree = new Tree();
tree.insert("/parent");
tree.insert("/child1", "/parent");
tree.insert("/child2", "/parent");
tree.insert("/file.xml", "/child2");
tree.insert("/file.txt", "/child1");

tree.traverseDFS((node) => console.log(node.data));
