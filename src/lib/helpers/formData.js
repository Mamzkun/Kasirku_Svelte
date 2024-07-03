export function createFormData(dataObject) {
  const formData = new FormData();
  for (const key in dataObject) {
    formData.append(key, dataObject[key])
  }
  return formData
}

export function parseFormData(formData) {
  const dataObject = {}
  for (const pair of formData.entries()) {
    dataObject[pair[0]] = pair[1]
  }
  return dataObject
}