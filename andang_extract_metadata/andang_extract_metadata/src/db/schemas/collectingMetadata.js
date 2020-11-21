const mongoose = require("mongoose");
const { Schema } = mongoose;

const collectingMetadataSchema = new Schema({
    content_id :{
        type:String,
        required:true,
        unique:true
    },
    tmdb_id :{
        type:String,
        required:true
    },
    content_type:{
        type:String,
        required:true
    },
    source_data:[
        {
            source_name:String,
            statistics_type:[String],
            source_type : String,
            site_type:String,
            source : [String],
            target_range:{
                from:{
                    season:Number,
                    episode:Number
                },
                to:{
                    season:Number,
                    episode:Number
                }
            },
            additional_data:Schema.Types.Mixed,
            updated:{
                season:{
                    type:Number,
                    default:0
                },
                episode:{
                    type:Number,
                    default:0
                }
            }
        }
    ]
});


module.exports = mongoose.model('pendingCollectingMetadata', collectingMetadataSchema);