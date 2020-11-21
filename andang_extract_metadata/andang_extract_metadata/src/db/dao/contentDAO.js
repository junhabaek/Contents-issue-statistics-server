const ContentModel = require( "../schemas/content");

const addContent = async(contentData)=>{
    const content = new ContentModel(contentData);
    return content.save();
}

module.exports =  {
    addContent
}