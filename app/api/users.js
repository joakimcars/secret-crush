import fetch from 'node-fetch'

export async function get (id) {
  return fetch('/api/users/' + id).then(response => {
    if (response.status === 404) {
      return 'not found'
    }
    return response.json()
  })
}

export async function put (user) {
  const url = '/api/users/' + user.id
  return fetch(url, { method: 'PUT' })
    .then(r => {
      if (r.status < 400) {
        return r.json()
      }
    }).catch(reason => console.error(reason))
}

export async function remove (id) {
  const url = '/api/users/' + id
  return fetch(url, { method: 'DELETE' })
    .then(response => {
      if (response.status < 400) {
        return response.json()
      }
    }).catch(reason => console.error(reason))
}

export async function addCrush (userId, crush) {
  const url = `/api/users/${userId}/crushes`
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(crush),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status >= 400) {
      throw new Error({ status: response.status, ...response.json() })
    }
    return response.json()
  }).catch(reason => console.error(reason.message))
}

export async function removeCrush (userId, crushId) {
  const url = `/api/users/${userId}/crushes/${crushId}`
  return fetch(url, { method: 'DELETE' })
    .then(response => {
      if (response.status >= 400) {
        throw new Error({ status: response.status, ...response.json() })
      }
      return response.json()
    }).catch(reason => console.error(reason.message))
}

export default { get, put, remove, addCrush, removeCrush }
