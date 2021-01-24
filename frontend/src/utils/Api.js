class Api {
  constructor({url, token}) {
    this._url = url;
    this._token = token;
    this._headers =  {
      authorization: this._token,
      'Content-Type': 'application/json',
    }
  }
  // Приватный метод проверки ответа сервера и преобразование из json
  _getResponseData(additionalUrl, optionsObj) {
    return fetch(this._url + additionalUrl, optionsObj)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        // Лучше всего return Promise.reject(new Error(`Ошибка: ${res.status}`));
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  // Метод загрузки информации о пользователе с сервера
  getUserInfo() {
    return this._getResponseData('/users/me', { headers: this._headers });
  }

  // Метод загрузки карточек с сервера
  getCards() {
    return this._getResponseData('/cards', { headers: this._headers });
  }

  // Метод загрузки новых данных о пользователе на сервер
  editUserInfo(formData) {
    return this._getResponseData('/users/me', {
      method: 'PATCH',
      headers:  this._headers,
      body: JSON.stringify({
        name: formData.name,
        about: formData.about
      })
    })
  }

  // Метод добавления новой карточки на сервер
  addNewCard(formData) {
    return this._getResponseData('/cards', {
      method: 'POST',
      headers:  this._headers,
      body: JSON.stringify({
        name: formData.title,
        link: formData.place
      })
    })
  }

  // Метод удаления карточки с сервера
  removeCard(cardId) {
    return this._getResponseData('/cards/' + cardId, {
      method: 'DELETE',
      headers:  this._headers,
    })
  }

  // Метод постановки лайка карточке
  addLike(cardId) {
    return this._getResponseData('/cards/likes/' + cardId, {
      method: 'PUT',
      headers:  this._headers,
    })
  }

  // Метод снятия лайка с карточки
  removeLike(cardId) {
    return this._getResponseData('/cards/likes/' + cardId, {
      method: 'DELETE',
      headers:  this._headers,
    })
  }

  // публичный метод постановки / снятия лайков v3
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(this._url + '/cards/likes/' + cardId, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._headers
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  // Метод загрузки аватара пользователя
  changeUserAvatar(url) {
    return this._getResponseData('/users/me/avatar', {
      method: 'PATCH',
      headers:  this._headers,
      body: JSON.stringify({
        avatar: url,
      })
    })
  }
}

let myApi = new Api({url:'http://178.154.229.38:3000/', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDBkOTA5OWFjNTVmNTIyYWIxMjA1OTciLCJpYXQiOjE2MTE1MDE3NzIsImV4cCI6MTYxMjEwNjU3Mn0.d-8Ouyyg3_8M_Ov15BB0K9JBpx274eH192F2fn-Ihfw'});
export default myApi;