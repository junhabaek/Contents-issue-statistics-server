const aws = require('aws-sdk')
const {S3_ACCESS_KEY, S3_SECRET_ACCESS_KEY, S3_REGION} = require('../../utils/config');

const s3 = new aws.S3({
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_ACCESS_KEY,
    region: S3_REGION
})

const basicParam = {
    'Bucket':'big-andang',
    'Key':'test/'
}

const uploadImageToServer = (subPath, image, fileName)=>{
    const curParam = {...basicParam};
    curParam.Key = curParam.Key + subPath + fileName;
    curParam.Body = image;
    return s3.upload(curParam).promise();
}

const uploadPosterToServer = (image, fileName)=>{
    return uploadImageToServer("posters/", image, fileName);
}

const uploadStatisticsToServer = (image, fileName)=>{
    return uploadImageToServer("statistics/", image, fileName);
}

module.exports = {
    uploadPosterToServer,
    uploadStatisticsToServer
}