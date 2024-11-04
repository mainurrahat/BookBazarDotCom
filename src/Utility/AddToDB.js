const getStoredReadList = () => {
  const storedList = localStorage.getItem("read-list");
  if (storedList) {
    const storedList = JSON.parse(storedList);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "Already exist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};
export { addToStoredReadList };
