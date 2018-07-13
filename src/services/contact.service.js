import endpoints from '../config/endpoints';

const buildQuery = (params) => {
    const queryParams = Object.assign({}, params);
    let query = Object.keys(queryParams)
        .map((queryItem) => (encodeURIComponent(queryItem) + '=' + encodeURIComponent(params[queryItem])))
        .join('&');
    return ''.concat('?', query);
}

export default class ContactService {
    static getAll = (params = {}) => {
        return fetch(`${endpoints.API_PREFIX}/${endpoints.CONTACT}${buildQuery(params)}`).then((res) => {
            return res.json();
        });
    }
}