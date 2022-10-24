const lsTokenKey = 'my_app_token';


function setTokenOnLogin(res) {
    const isLoginUrl = res.config.url.includes('login');

    if (isLoginUrl) {
        const token = res.data.token;
        localStorage.setItem(lsTokenKey, token);
    }

    return res;
}

export default function (axios) {

}