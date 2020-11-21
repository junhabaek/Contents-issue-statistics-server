
//Request
const validRawIdDramaRequest = {
    content_id : "1399", //game of thrones tmdb id
    content_type : "drama",
    source_data : [
        {
            source_name : "reddit minor post",
            statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
            source_type : "raw_id",
            site_type : "reddit",
            source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
            target_range : { // 이 패턴이 적용되는 에피소드 범위
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        }
    ]
}

const validRawIdMovieRequest = {
    content_id : "11423", //살인의 추억 tmdb id
    content_type : "movie",
    source_data : [
        {
            source_name : "reddit minor post",
            statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
            source_type : "raw_id",
            site_type : "reddit",
            source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
            target_range : { // 이 패턴이 적용되는 에피소드 범위
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        }
    ]
}

const invalidContentIdDramaRequest = {
    content_id : "753321", // not existing tmdb id
    content_type : "drama",
    source_data : [
        {
            source_name : "reddit minor post",
            statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
            source_type : "raw_id",
            site_type : "reddit",
            source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
            target_range : { // 이 패턴이 적용되는 에피소드 범위
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        }
    ]
}
const invalidContentIdMovieRequest = {
    content_id : "7533213", // not existing tmdb id
    content_type : "movie",
    source_data : [
        {
            source_name : "reddit minor post",
            statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
            source_type : "raw_id",
            site_type : "reddit",
            source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
            target_range : { // 이 패턴이 적용되는 에피소드 범위
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        }
    ]
}
const invalidContentTypeRequest = {
    content_id : "1399", // not existing tmdb id
    content_type : "dream",
    source_data : [
        {
            source_name : "reddit minor post",
            statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
            source_type : "raw_id",
            site_type : "reddit",
            source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
            target_range : { // 이 패턴이 적용되는 에피소드 범위
                from : {season : 1, episode : 1},
                to : {season : 1, episode : 5}
            },
            additional_data :{
                sub_reddit : "gameofthrones"
            }
        }
    ]
}
const undefinedContentIdRequest = {
    blank : "blank"
}

//SourceData
const validSourceData = [
    {
        source_name : "reddit minor post",
        statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
        source_type : "raw_id",
        site_type : "reddit",
        source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
        target_range : { // 이 패턴이 적용되는 에피소드 범위
            from : {season : 1, episode : 1},
            to : {season : 1, episode : 5}
        },
        additional_data :{
            sub_reddit : "gameofthrones"
        }
    }
]
const invalidFormatSourceData = [
    {
        blank:"blank"
    }
]
const invalidStatisticsTypeSourceData = [
    {
        source_name : "reddit minor post",
        statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
        source_type : "raw_id",
        site_type : "reddit",
        source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
        target_range : { // 이 패턴이 적용되는 에피소드 범위
            from : {season : 1, episode : 1},
            to : {season : 1, episode : 5}
        },
        additional_data :{
            sub_reddit : "gameofthrones"
        }
    },
]
const invalidSourceTypeSourceData = [
    {
        source_name : "reddit minor post",
        statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
        source_type : "rawId",
        site_type : "reddit",
        source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
        target_range : { // 이 패턴이 적용되는 에피소드 범위
            from : {season : 1, episode : 1},
            to : {season : 1, episode : 5}
        },
        additional_data :{
            sub_reddit : "gameofthrones"
        }
    },
]
const invalidSiteTypeSourceData = [
    {
        source_name : "reddit minor post",
        statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
        source_type : "raw_id",
        site_type : "reddito",
        source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
        target_range : { // 이 패턴이 적용되는 에피소드 범위
            from : {season : 1, episode : 1},
            to : {season : 1, episode : 5}
        },
        additional_data :{
            sub_reddit : "gameofthrones"
        }
    },
]
const invalidTargetRangeSourceData = [
    {
        source_name : "reddit minor post",
        statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
        source_type : "raw_id",
        site_type : "reddit",
        source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
        target_range : { // 이 패턴이 적용되는 에피소드 범위
            from : {season : 0, episode : 1},
            to : {season : 1, episode : 5}
        },
        additional_data :{
            sub_reddit : "gameofthrones"
        }
    },
]
const invalidSourceSourceData = [
    {
        source_name : "reddit minor post",
        statistics_type : ["andang_statistics_wordCloud", "andang_statistics_barGraph"],
        source_type : "raw_id",
        site_type : "reddit",
        source : ["gsd0t", "gwlcx", "h1otp", "h70vv", "hc5ts"],
        target_range : { // 이 패턴이 적용되는 에피소드 범위
            from : {season : 1, episode : 1},
            to : {season : 1, episode : 5}
        },
        additional_data :{
            sub_reddit : "gameofthrones"
        }
    },
]


module.exports = {
    validRawIdDramaRequest,
    validRawIdMovieRequest,
    invalidContentIdDramaRequest,
    invalidContentIdMovieRequest,
    invalidContentTypeRequest,
    undefinedContentIdRequest,
    validSourceData,
    invalidFormatSourceData,
    invalidSiteTypeSourceData,
    invalidSourceSourceData,
    invalidSourceTypeSourceData,
    invalidStatisticsTypeSourceData,
    invalidTargetRangeSourceData
}