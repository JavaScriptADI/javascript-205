// add and remove elements
const names = ['anna', 'james', 'nick', 'luka', 'giorgi', 'mariami'];
while (names.length > 0) {
    const removedNames = names.pop();
    console.log(`removing ${removedNames}`);
}
console.log(names);

const userNames = ['anna', 'james', 'nick', 'luka', 'giorgi', 'mariami'];
while (userNames.length > 0) {
    const invalidName = userNames.shift();
    console.log(`removing ${invalidName}`);
}
console.log(userNames);