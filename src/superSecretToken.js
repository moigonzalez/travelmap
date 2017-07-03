export default function token() {
	return `https://api.instagram.com/v1/users/self/media/recent?access_token=${window.location.href.split('=')[1]}&&callback=?`;
}
