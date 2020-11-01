export const firebaseLooper = (snapshot) => {
  let snapshotArray = [];
  snapshot.forEach((data) => {
    snapshotArray.push({ ...data.val(), key: data.key });
  });
  return snapshotArray;
};

export const reverseArray = (actualArray) => {
  let array = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    array.push(actualArray[i]);
  }
  return array;
};
