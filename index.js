const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err) {
        return console.error(err);
    }
    else{
        console.log(`App is listening at port: ${port}`);
    }
});