exports.getIndexPage = (req, res, next) => {
    res.render('index', {
        title: 'Hello Express',
        subTitle: "Let's setup the world with express js"
    });
};