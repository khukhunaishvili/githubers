import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popularUsers: {},
    users: {},
    popularUsersApi:
      "https://api.github.com/search/users?q=followers%3A%3E%3D1000",
    usersApi: "https://api.github.com/users/",
    repoAmount: 3,
    searchSuggestions: [],
    lastVisitedSearch: []
  },
  mutations: {
    savePopularUsers: (state, payload) => {
      state.popularUsers = payload;
    },
    saveUser: (state, payload) => {
      state.users = payload;
    },
    saveApiSearch: (state, payload) => {
      state.testSavedGithubQueries = payload;
    },
    saveSuggestions: (state, payload) => {
      state.searchSuggestions = payload
    },
    saveLastVisitedSearch: (state, payload) => {
      state.lastVisitedSearch = [];
      state.lastVisitedSearch.push(payload);
    },
  },
  actions: {
    updateLastVisitedSearch({ dispatch }, selectedUser) {
      const lastVisited = JSON.parse(localStorage.getItem("lastVisitedSearch")) || [];
      let isSaved = false;
      lastVisited.forEach((element) => {
        if (element.login == selectedUser.login) {
          isSaved = true;
        }
      });
      if (isSaved) {
        let index = lastVisited.findIndex(
          (user) => user.login === selectedUser.login
        );
        let moveItem = (from, to) => {
          let item = lastVisited.splice(from, 1)[0];
          lastVisited.splice(to, 0, item);
        };
        moveItem(index, 0);
      } else {
        let user = {};
        user.login = selectedUser.login;
        user.avatar = selectedUser.avatar;
        lastVisited.unshift(user);
        if (lastVisited.length == 4) {
          lastVisited.pop();
        }
      }
      dispatch('saveLastVisitedSearch', lastVisited);
    },
    generateSuggestions({ dispatch }, payload) {
      const savedQueries = JSON.parse(localStorage.getItem("lastVisitedSearch")) || [];
      const savedGithubQueries = JSON.parse(localStorage.getItem("savedApiSearch")) || {};
      const searchQuery = payload.searchQuery;
      const searchApi = payload.githubApiUrl;
      let generateSuggestions = (matchVisited, matchGithub) => {
        const userLogins = new Set(matchVisited.map((user) => user.login));
        const matchAll = [
          ...matchVisited,
          ...matchGithub.filter((user) => !userLogins.has(user.login)),
        ];
        dispatch('saveSuggestions', matchAll);
      };
      if (searchQuery) {
        let match = savedQueries.filter((user) => {
          return user.login
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        });
        if (Object.prototype.hasOwnProperty.call(savedGithubQueries, searchQuery)) {
          let savedGithubSearchResults = savedGithubQueries[`${searchQuery}`];
          generateSuggestions(match, savedGithubSearchResults)
        } else {
          fetch(searchApi, {
            headers: {
              "User-Agent": "khukhunaishvili",
            },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
            })
            .then((data) => {
              let suggestedUsers = {};
              suggestedUsers[`${searchQuery}`] = [];
              data.items.forEach((user) => {
                let userDetails = {};
                userDetails.login = user.login;
                userDetails.avatar = user.avatar_url;
                suggestedUsers[`${searchQuery}`].push(userDetails);
              });
              dispatch('saveApiSearch', suggestedUsers);
              generateSuggestions(match, suggestedUsers[`${searchQuery}`]);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        dispatch('saveSuggestions', savedQueries);
      }
    },
    getUser({ dispatch, state }, userName) {
      const popularUsers = JSON.parse(localStorage.getItem(`popularUsers`)) || {};
      const users = JSON.parse(localStorage.getItem(`users`)) || {};
      return new Promise((resolve, reject) => {
        if (userName in popularUsers) {
          const userDetails = popularUsers[`${userName}`];
          if (!Object.prototype.hasOwnProperty.call(userDetails, "orgs")) {
            fetch(`https://api.github.com/users/${userName}/orgs`, {
              headers: {
                "User-Agent": "khukhunaishvili",
              },
            })
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
              })
              .then(data => {
                let orgs = {};
                data.forEach((element, i, array) => {
                  let org = {};
                  org.login = element.login;
                  org.avatar = element.avatar_url;
                  return fetch(`${element.url}`, {
                    headers: {
                      "User-Agent": "khukhunaishvili",
                    },
                  })
                    .then(response => response.json())
                    .then(data => {
                      org.url = data.html_url
                      orgs[`${org.login}`] = org;
                      if (i === array.length - 1) {
                        userDetails.orgs = orgs;
                        popularUsers[`${userName}`] = userDetails;
                        dispatch('savePopularUsers', popularUsers);
                        resolve(userDetails);
                      }
                    });
                })
              })
          } else {
            resolve(userDetails);
          }
        } else if (!Object.prototype.hasOwnProperty.call(users, userName)) {
          fetch(`${state.usersApi}${userName}`, {
            headers: {
              "User-Agent": "khukhunaishvili",
            },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw new Error('User not found');
              }
            })
            .then((data) => {
              dispatch('getUserInfo', data).then((userInfo) => {
                resolve(userInfo);
              });
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          resolve(users[`${userName}`]);
        }
      })
    },
    getUserInfo({ dispatch, state }, payload) {
      let userObj = JSON.parse(localStorage.getItem('users')) || {};
      return new Promise((resolve) => {
        let user = {};
        user.name = payload.name;
        user.profileUrl = payload.html_url;
        user.avatar = payload.avatar_url;
        user.type = payload.type;
        fetch(`${payload.organizations_url}`, {
          headers: {
            "User-Agent": "khukhunaishvili",
          },
        })
          .then(response => response.json())
          .then(data => {
            let orgs = {};
            data.forEach((element, i, array) => {
              let org = {};
              org.login = element.login;
              org.avatar = element.avatar_url;
              return fetch(`${element.url}`, {
                headers: {
                  "User-Agent": "khukhunaishvili",
                },
              })
                .then(response => response.json())
                .then(data => {
                  org.url = data.html_url
                  orgs[`${org.login}`] = org;
                  if (i === array.length - 1) {
                    user.orgs = orgs;
                  }
                });
            })
          }).then(
            fetch(`${payload.repos_url}`, {
              headers: {
                "User-Agent": "khukhunaishvili",
              },
            })
              .then(response => response.json())
              .then(data => {
                let repos = [];
                for (let i = 0; i < state.repoAmount; i++) {
                  if (!data[i]) {
                    break;
                  }
                  repos.push(data[i].name);
                }
                user.repos = repos;
                userObj[`${payload.login}`] = user;
                dispatch('saveUser', userObj);
                resolve(user);
              })
          )
      })
    },
    getPopularUsers({ dispatch, commit, state }) {
      if (localStorage.getItem("popularUsers")) {
        const popularUsers = JSON.parse(localStorage.getItem("popularUsers"));
        commit('savePopularUsers', popularUsers);
      } else {
        fetch(`${state.popularUsersApi}`, {
          headers: {
            "User-Agent": "khukhunaishvili",
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            dispatch('getPopularUsersInfo', data.items);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    getPopularUsersInfo({ dispatch, state }, users) {
      let popularUsers = {};
      for (let index = 0; index < users.length; index++) {
        popularUsers[`${users[index].login}`] = {};
        let user = popularUsers[`${users[index].login}`];
        user.avatar = users[index].avatar_url;
        user.profileUrl = users[index].html_url;
        user.type = users[index].type;
        fetch(`${users[index].url}`, {
          headers: {
            "User-Agent": "khukhunaishvili",
          },
        })
          .then(response => response.json())
          .then(data => {
            user.name = data.name
            return fetch(`${users[index].repos_url}`, {
              headers: {
                "User-Agent": "khukhunaishvili",
              },
            })
              .then(response => response.json())
              .then(data => {
                let repos = [];
                for (let i = 0; i < state.repoAmount; i++) {
                  repos.push(data[i].name);
                }
                user.repos = repos;
                if (index == users.length - 1) {
                  dispatch('savePopularUsers', popularUsers);
                }
              })
          })
      }
    },
    loadLastVisitedSearch({ commit }) {
      const lastVisitedSearch = JSON.parse(localStorage.getItem("lastVisitedSearch")) || [];
      commit('saveSuggestions', lastVisitedSearch);
    },
    saveLastVisitedSearch({ commit }, payload) {
      commit('saveLastVisitedSearch', payload);
      localStorage.setItem("lastVisitedSearch", JSON.stringify(payload))
    },
    saveSuggestions({ commit }, payload) {
      commit('saveSuggestions', payload);
    },
    saveApiSearch({ commit }, payload) {
      const savedApiSearch = JSON.parse(localStorage.getItem("savedApiSearch")) || {};
      const newApiSearch = { ...payload, ...savedApiSearch };
      commit('saveApiSearch', newApiSearch);
      localStorage.setItem("savedApiSearch", JSON.stringify(newApiSearch));
    },
    savePopularUsers({ commit }, payload) {
      commit('savePopularUsers', payload);
      localStorage.setItem("popularUsers", JSON.stringify(payload));
    },
    saveUser({ commit }, payload) {
      commit('saveUser', payload);
      localStorage.setItem("users", JSON.stringify(payload));
    },
  }
})