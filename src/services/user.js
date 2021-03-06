export const setUser = (email, username) => {
  localStorage.setItem('userInfo', JSON.stringify({
    email, username, icon: '', description: 'I am a App Tunes user. 😎', favorites: []
  }));
}

export const editUser = (email, username, icon, description) => {
  const user = getUser();
  localStorage.setItem('userInfo', JSON.stringify({ ...user, email, username, icon, description }))
}

export const getUser = () => JSON.parse(localStorage.getItem('userInfo'));

export const getFavorites = () => {
  const user = getUser();
  return user.favorites;
}

export const favorites = (music) => {
  const user = getUser();
  let { favorites } = user;
  const find = favorites.find((favorite) => favorite.trackId === music.trackId);
  if (find) {
    favorites = favorites.filter((favorite) => favorite.trackId !== music.trackId);
  } else {
    favorites = [...favorites, music];
  }
  localStorage.setItem('userInfo', JSON.stringify({ ...user, favorites }));
};