import { asyncFuncCreator } from '../utils';

export function index(key) {
  return asyncFuncCreator({
    constant: 'RESOLUTION_INDEX',
    promise: (client) => client.request({ url: '/project/' + key + '/resolution' })
  });
}

export function create(key, values) {
  return asyncFuncCreator({
    constant: 'RESOLUTION_CREATE',
    promise: (client) => client.request({ url: '/project/' + key + '/resolution', method: 'post', data: values })
  });
}

export function edit(key, values) {
  return asyncFuncCreator({
    constant: 'RESOLUTION_EDIT',
    promise: (client) => client.request({ url: '/project/' + key + '/resolution/' + values.id, method: 'put', data: values })
  });
}

export function show(id) {
  return { type: 'RESOLUTION_SHOW', id: id };
}

export function delNotify(id) {
  return { type: 'RESOLUTION_DELETE_NOTIFY', id: id };
}

export function del(key, id) {
  return asyncFuncCreator({
    constant: 'RESOLUTION_DELETE',
    id,
    promise: (client) => client.request({ url: '/project/' + key + '/resolution/' + id, method: 'delete' })
  });
}

export function setSort(key, values) {
  return asyncFuncCreator({
    constant: 'RESOLUTION_SET_SORT',
    promise: (client) => client.request({ url: '/project/' + key + '/resolution/batch', method: 'post', data: values })
  });
}

export function setDefault(key, values) {
  return asyncFuncCreator({
    constant: 'RESOLUTION_SET_DEFAULT',
    promise: (client) => client.request({ url: '/project/' + key + '/resolution/batch', method: 'post', data: values })
  });
}