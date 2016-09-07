var storagePlace = {
	userLogin: ''
};

export default function() {
	function getUserLogin() {
		return storagePlace.userLogin;
	}

	function setUserLogin(user) {
		storagePlace.userLogin = user;
	}

	return {
		getUserLogin: getUserLogin,
		setUserLogin: setUserLogin
	}
}