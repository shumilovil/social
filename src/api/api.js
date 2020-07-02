import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '995a9a2e-c393-462f-826f-9493094b7ba0'
  }
});


export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  getFriends() {
    return instance.get('users/?friend=true')
    .then(response => response.data.items)
  }
};


export const authAPI = {
  me() {
    return instance.get('auth/me');
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post('auth/login', { email, password, rememberMe, captcha })
  },

  logout() {
    return instance.delete('auth/login')
  }
};


export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },

  updateStatus(status) {
    return instance.put('profile/status', { status: status })
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  saveProfile(profile) {
    return instance.put('profile', profile)
  },

  getFollowingStatus(userId) {
    return instance.get(`follow/${userId}`).then(response => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  }
}