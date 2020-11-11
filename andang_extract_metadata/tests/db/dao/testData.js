const testContent = {
    "content_id" : "tempf789",
    "title_kr" : "테스트종이의 집",
    "title_en" : "테스트la casa de papel",
    "release_date" : "2020-01-17",
    "content_type" : "drama",
    "is_single" : false,
    "poster_url" : "/test/posters/f789.jpg",
    "top_words" : ["tokio","rio","professor"],
    "sub_type" : ["thriller","crime","drama"],

    "is_hot" : true,

    "single_statistics" : [

    ],
    "type_additional_data" : {
        "casts" : ["ursula corbero", "alvaro morte"],
        "director" : "alex pina",
        "rating" : 9.5
    },
    "season_count" : 2
}

const testCollectingInfo = {
    content_id : "abcd",
    tmdb_id : "dabcd",
    content_type : "drama",
    source_data : [
        {
            source_name : "reddit discussion2",

            statistics_type : [],

            source_type : "search_pattern",
            site_type : "reddit",
            source : [""],
            target_range : {
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        },

        {
            source_name : "reddit discussion3",
            statistics_type : [],
            source_type : "raw_id",
            site_type : "reddit",
            source : [""],
            target_range : {
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        },

        {
            source_name : "twitter reactions",
            statistics_type : [],
            source_type : "search_pattern",
            site_type : "twitter",
            source : [""],
            target_range : {
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        }
    ]
}

module.exports = {
    testContent,
    testCollectingInfo
}