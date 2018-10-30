import fetch from '../../fetch'

export default function Api(path, method, token, data) {
  const headers = new Headers()
  headers.append('X-Requested-With', 'XMLHttpRequest')
  headers.append('X-CSRF-TOKEN', token)
  headers.append('Content-Type', 'application/json')

  const verb = method.toUpperCase()
  const obj = {
    method: verb
  }

  if (verb !== 'GET') {
    obj.headers = headers
    obj.credentials  = 'same-origin'
    obj.body = JSON.stringify(data)
  }

  return fetch(path, obj).then(response => response.json())
}
