import fetch from 'node-fetch'

export async function get (id) {
  return fetch('/api/users/' + id).then(r => {
    if (r.status === 404) {
      return undefined
    }
    return r.json()
  })
}

export async function put (user) {
  return fetch({
    method: 'PUT',
    url: '/api/users/' + user.id
  }).then(r => r.json())
}

export default { get, put }
