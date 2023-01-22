function getLocalData({ storageKey }) {
  let storageData = JSON.parse(localStorage.getItem(storageKey));

  return storageData || [];
}

function isIncludeLocalData({ storageKey, fullName }) {
  let storageData = getLocalData({ storageKey });

  return storageData.findIndex(item => item.fullName === fullName) > -1 ? true : false;
}

function saveLocalData({ storageKey, dataBody }) {
  let storageData = localStorage.getItem(storageKey);

  if (storageData) {
    storageData = JSON.parse(storageData);
  } else {
    storageData = [];
  }

  storageData.push(dataBody);

  return localStorage.setItem(storageKey, JSON.stringify(storageData));
}

function removeLocalData({ storageKey, fullName }) {
  let storageData = localStorage.getItem(storageKey);

  if (storageData) {
    storageData = JSON.parse(storageData);
  } else {
    storageData = [];
  }

  storageData.splice(storageData.findIndex(item => item.fullName === fullName), 1);

  return localStorage.setItem(storageKey, JSON.stringify(storageData));
}

export { getLocalData, saveLocalData, removeLocalData, isIncludeLocalData };