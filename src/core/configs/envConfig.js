const ENV = {
    DEV: {
        API_SERVER: 'http://pb-api.herokuapp.com',
    },
    PROD: {
        API_SERVER: 'http://pb-api.herokuapp.com',
    }
};

const getEnv = (name, defaultValue) => {
    return process.env[name] || ENV[process.env.REACT_APP_STAGE || "DEV"][name] || defaultValue;
};

export { getEnv };