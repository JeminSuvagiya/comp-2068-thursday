exports.show = (req, res) => {

    //check if the path is the root or page
    const path = (req.path === '/') ? `/home` : req.path;

    //RENDER THAT PATH
    res.render(`pages${path}`); //viwes/pages/about
};