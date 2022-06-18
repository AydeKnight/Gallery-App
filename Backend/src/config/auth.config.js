const config = {
    secret : process.env.SECRET,
    accessExpire : process.env.ACCESS_TOKEN_LIFE,
    refreshExpire : process.env.REFRESH_TOKEN_LIFE
}

module.exports = config;