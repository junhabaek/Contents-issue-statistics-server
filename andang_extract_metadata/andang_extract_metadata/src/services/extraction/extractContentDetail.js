const {extractContentCoreData} = require('./extractContentCoreData');
const {getDramaAltTitle, getMovieAltTitle} = require('../tmdbApi');
const {getDramaCredits, getMovieCredits} = require('../tmdbApi');

//사전에 validation에서 id가 유효함을 확인했기 때문에, 별다른 contentId 검증은 없다.
const extractContentDetail = async(contentType, contentId)=>{
    const coreData = await extractContentCoreData(contentType, contentId);

    coreData.content_type = contentType;

    if(coreData.content_type === 'movie'){
        await fillMovieAdditionalData(coreData);
    }
    else if(coreData.content_type === 'drama'){
        await fillDramaAdditionalData(coreData);
    }

    return coreData
}

const fillMovieAdditionalData = async(basicData)=>{
    const altTitle = await getMovieAltTitle(basicData.content_id.slice(1));
    if(altTitle === ''){
        basicData.title_kr = basicData.title_en;
    }
    else{
        basicData.title_kr = altTitle;
    }
    basicData.is_single = true;

    const credits = await getMovieCredits(basicData.content_id.slice(1));
    if(credits.hasOwnProperty('cast')){
        basicData.type_additional_data.casts = credits.cast;
        basicData.type_additional_data.director = credits.director.toLowerCase();
    }
    else{
        basicData.type_additional_data.casts = [];
        basicData.type_additional_data.director = 'Not found';
    }
    basicData.sub_type = mapMovieGenres(basicData.sub_type);
}

const mapMovieGenres = (genres)=>{
    const fromTmdbToAndangGenres = {
        "Action" : "action",
        "Adventure" : "adventure",
        "Animation" : "animation",
        "Comedy" : "comedy",
        "Crime" : "crime",
        "Documentary" : "documentary",
        "Drama" : "drama",
        "Family" : "family",
        "Fantasy" : "fantasy",
        "History" : "history",
        "Horror" : "horror",
        "Mystery" :"mystery",
        "Music" : "music",
        "Romance" : "romance",
        "Science Fiction" : "sci-fi",
        "TV Movie" :"tv",
        "Thriller" :"thriller",
        "War" : "war",
        "Western" : "western"
    }
    const mappedGenres = []
    genres.forEach((element)=>{
        if(fromTmdbToAndangGenres.hasOwnProperty(element.name)){
            mappedGenres.push(fromTmdbToAndangGenres[element.name]);
        }
    });
    return mappedGenres;
}

const fillDramaAdditionalData = async(basicData)=>{
    const altTitle = await getDramaAltTitle(basicData.content_id.slice(1));
    if(altTitle === ''){
        basicData.title_kr = basicData.title_en;
    }
    else{
        basicData.title_kr = altTitle;
    }
    basicData.is_single = false;

    const credits = await getDramaCredits(basicData.content_id.slice(1));
    if(credits.hasOwnProperty('cast')){
        basicData.type_additional_data.casts = credits.cast;
    }
    else{
        basicData.type_additional_data.casts = [];
    }
    basicData.sub_type = mapDramaGenres(basicData.sub_type);
}

const mapDramaGenres = (genres)=>{
    const fromTmdbToAndangGenres = {
        "Action & Adventure" : ["action", "adventure"],
        "Animation" : ["animation"],
        "Comedy" : ["comedy"],
        "Crime" : ["crime"],
        "Documentary" : ["documentary"],
        "Drama" : ["drama"],
        "Family" : ["family"],
        "Mystery" : ["mystery"],
        "Sci-Fi & Fantasy" : ["sci-fi", "fantasy"],
        "War & Politics" : ["war"],
        "Western" : ["western"]
    }
    const mappedGenres = []
    genres.forEach((element)=>{
        if(fromTmdbToAndangGenres.hasOwnProperty(element.name)){
            mappedGenres.push(...fromTmdbToAndangGenres[element.name]);
        }
    });
    return mappedGenres;
}

module.exports = {
    extractContentDetail
}