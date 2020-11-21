const CollectingMetadataModel = require( "../schemas/collectingMetadata");

const addCollectingMetadata = async(collectingInfo)=>{
    const collectingMetadata = new CollectingMetadataModel(collectingInfo);
    return collectingMetadata.save();
}

module.exports =  {
    addCollectingMetadata
}