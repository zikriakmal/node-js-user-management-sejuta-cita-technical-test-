module.exports ={
    MONGO_IP: process.env.MONGO_IP || "mongo",
    MONGO_PORT : process.env.MONGO_PORT || 27017,
    MONGO_USER : process.env.MONGO_USER,
    MONGO_PASSWORD : process.env.MONGO_PASSWORD,
    JWT_SECRET : process.env.JWT_SECRET || "09f26e402586e2faa8da4c98a35f1b20d6b033c60"
}