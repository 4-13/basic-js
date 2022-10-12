const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesMap = new Map();
  const result = [];

  for (const name of names) {
    let nameCopies;

    if (!namesMap.has(name)) {
      namesMap.set(name, 1);
      nameCopies = 1;
    } else {
      nameCopies = namesMap.get(name) + 1;
      namesMap.set(name, nameCopies);
    }

    const newName = nameCopies > 1 ? `${name}(${nameCopies - 1})` : name;

    if (!namesMap.has(newName)) {
      namesMap.set(newName, 1);
      nameCopies = 1;
    }

    result.push(newName);
  }

  return result;
}

module.exports = {
  renameFiles,
};
