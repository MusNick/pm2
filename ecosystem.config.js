module.exports = {
  apps : [{
    name      : 'szhmqd21_node',
    script    : './src/app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      user : 'root',
      host : '45.76.47.109',
      ref  : 'origin/master',
      repo: 'git@github.com:MusNick/pm2.git',
      path : '/data/www',
      'post-deploy' : 'git pull && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
