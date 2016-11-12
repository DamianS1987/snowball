export default {
	showSplashScreen: true,
	cookieKey: 'loggedUserData',
	//WP Json data url example
	//These are the posts requested from Wordpress website using JSON WP REST API plugin
	//plugin url: http://v2.wp-api.org/
	//This data is available in Posts tab
	wp_json_url: 'http://feeds.dstefaniak-staging.com/wp-json/wp/v2/posts',
	//images url
	img_url: function() {
		return '/android_asset/www/img/';
	}
};