const fs = require('fs');
const axios = require('axios');


const saveImage = (posterPath, image_path) =>
    axios({
        url : `https://image.tmdb.org/t/p/w342${posterPath}`,
        responseType: 'stream',
    }).then(
        response =>
            new Promise((resolve, reject) => {
                response.data
                    .pipe(fs.createWriteStream(image_path))
                    .on('finish', () => resolve())
                    .on('error', e => reject(e));
            }),
    );

const getPosterImage = (posterPath)=>{
    return axios({
        url: `https://image.tmdb.org/t/p/w342${posterPath}`,
        responseType: 'stream'
    }).then(
        response=>
            new Promise((resolve, reject) => {
                console.log(typeof response.data)
                resolve(response.data)
            })
    )

};

module.exports = {
    getPosterImage,
    saveImage
}