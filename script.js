// Scroll Bar
var scrollBar = document.querySelector('.scrollbar');
scrollBar.addEventListener('mousemove' , ()=>{
    scrollBar.classList.add('added');
})
scrollBar.addEventListener('mouseleave' , ()=>{
    scrollBar.classList.replace('added' , 'old');
})

// Show & Hide Side bar
var overlay = document.querySelector('.overlay');
var sidebarContainer= document.querySelector('.sidebarContainer');

function sideBarToggler(){
    setTimeout(()=>{
        overlay.classList.toggle('showOverlay');
        document.body.classList.toggle('hideScroll')
    } , 200)
    sidebarContainer.classList.toggle('sideToggle');
}


// Link Generate for search bar
var searchBtn = document.querySelector('.srchIco');
var userSearch = document.querySelector('.userSearch')
var srchSuggestion = document.querySelector('.srchSuggestion');
userSearch.addEventListener('keyup' , (enter)=>{
    if(enter.keyCode === 13){
        searchBtn.click();
    }
})
searchBtn.addEventListener('click' ,function search(){

    userSearch = userSearch = document.querySelector('.userSearch').value;
    if(userSearch != ""){
    linkGenerator(userSearch);
    }
    
})
function linkGenerator(userSearch){

        var link = 'https://www.youtube.com/results?search_query=' + userSearch;
        window.location.href = link;
        console.log('Link Generated' , link)


}
// Error Message
var err = document.querySelector('.err');
function showMsg(msg){
    err.innerHTML = msg
    setTimeout(()=>{
    err.innerHTML = '&nbsp;'
    err.style.color = 'rgb(255 ,2 ,2)'
    },3500)
}

function Video(thumbnailPath , duration , title , channelName , views , period , profilePath , videoLink){
    
    var myDiv = document.querySelector('.box');
    var div = document.createElement('div');
    myDiv.appendChild(div);
    div.classList.add('videoBox')
    div.innerHTML = '<div class="thumbnail"><a href="'+videoLink+'" target="_blank"><img src="' + thumbnailPath + '"></a><div class="duration"><span>' + duration + '</span></div></div><div class="titles"><div class="title"><p>' + title + '</p></div><span style="display: block;">' + channelName + '</span><span>' + views + ' views' + " . " +  period +' ago'  + '</span></div><div class="icon"><img src="' + profilePath + '"></div></div>'
    
}

Video(
    './thumbnail1.jpg ' ,
    '16:19' ,
    'Hye Kahan Ka Irada Tumhara Sanam NFAK, NUSRAT FATEH ALI KHAN' ,
    'Nusrat Fateh Ali khan' ,
    '348k' ,
    '4 months' ,
    'https://yt3.ggpht.com/ytc/AKedOLS_JQEtkr812ZL0k4dQ00eJ603fTcouKDgU_s9-mQ=s48-c-k-c0x00ffffff-no-rj' ,
    'https://www.youtube.com/watch?v=1Bybyk3QXcA'
);
Video(
    './thumbnail2.jpg' ,
    '1:21:51' ,
    'MOTU PATLU In Hong Kong | Full Movie | Wow Kidz' ,
    'Wow kidz' ,
    '17M' ,
    '1 year' ,
    'https://yt3.ggpht.com/ytc/AKedOLRYctsTpoTP-W79JwkLXy7L3TnXUFgcUmxYhQj9=s48-c-k-c0x00ffffff-no-rj' ,
    'https://www.youtube.com/watch?v=9HlDuCznuKE'
);
Video(
    './thumbnail3.jpg' ,
    '22:14' ,
    'Latest English songs with lyrics 2018 | top songs' ,
    'VIRU NAIK' ,
    '109M' ,
    '3 years' ,
    'https://yt3.ggpht.com/ytc/AKedOLSKJJ-ey7XfF_IB3kCr2UYBdmgyxMD4Z3toVYu5=s48-c-k-c0x00ffffff-no-rj' ,
    'https://www.youtube.com/watch?v=GjqosLwfT8E'
);
Video(
    './thumbnail4.jpg' ,
    '3:26' ,
    'Arash- I m so lonely broken angle lyrics' ,
    'SUMIT THASALE' ,
    '16.8M' ,
    '4 years' ,
    'https://yt3.ggpht.com/ytc/AKedOLSKJJ-ey7XfF_IB3kCr2UYBdmgyxMD4Z3toVYu5=s48-c-k-c0x00ffffff-no-rj' ,
    'https://www.youtube.com/watch?v=sRJvbwiHVp4'
);
Video(
    './thumbnail5.jpg' ,
    '3:47' ,
    'Imran Khan - Bewafa' ,
    'FunX Gemist' ,
    '1180M' ,
    '12 years' ,
    'https://yt3.ggpht.com/ytc/AKedOLTQApwu5Bp6qTTYSlpUCcx9i4441f0Uw-YJqXkgkA=s48-c-k-c0x00ffffff-no-rj' ,
    'https://www.youtube.com/watch?v=Xv0DlKncjBI'
);
Video(
    './thumbnail6.jpg' ,
    '9:14' ,
    'Balaghal Ula Bi Kamaalihi | Ali Zafar | Naat' ,
    'Ali Zafar' ,
    '20M' ,
    '3 months' ,
    'https://yt3.ggpht.com/lcRAoSKJLvNWQgTbBAsnVGIb_RAmjxUfFJ1BCjWcqm2gj6wrn0xVpyJ7KurncYxQaGYKfserrg=s48-c-k-c0x00ffffff-no-nd-rj' ,
    'https://www.youtube.com/watch?v=yR9ZW4mS_EA'
);
Video(
    './thumbnail7.jpg' ,
    '4:33' ,
    'Pal - Arijit Singh & Shreya Ghoshal jalebi Song | Slowed and Reverb Lofi Mix' ,
    'Indian Slowed And Reverb' ,
    '4.4M' ,
    '1 month' ,
    'https://yt3.ggpht.com/ytc/AKedOLTutnwaD90kDcNZFwn2U3iw5FRNjp4LTTCZbqaU8g=s48-c-k-c0x00ffffff-no-rj' ,
    'https://www.youtube.com/watch?v=SIqnvMt8IMU'
);


var createButton = document.querySelector('.createButton');
var CreateNow = document.querySelector('.CreateNow');
var channelInfo = document.querySelector('.channelInfo');
var linkInfo = document.querySelector('.linkInfo');
var channelName = document.querySelector('.channelName');
var titles = document.querySelector('.vidTit');
var duration = document.querySelector('.vidDuration');
var views = document.querySelector('.views');
var period = document.querySelector('.period');
var profilePath = document.querySelector('.profilePath');
var videoLink = document.querySelector('.videoLink');
var thumbnailPath = document.querySelector('.thumbnailPath');

function formChanger1(){
    createButton.style.display = 'none'
    CreateNow.style.display = 'block'
    channelInfo.style.display = 'block'
    window.scroll(0,document.body.scrollHeight)
}
function formChanger2(){

    nchannelName = channelName.value;
    ntitles = titles.value;
    nduration = duration.value;
    nviews = views.value;
    nperiod = period.value;
    if(nchannelName != '' && ntitles != '' &&nduration != '' && nviews != '' && nperiod != ''){
        err.style.color = 'rgb(91 224 0)'
        showMsg('Okay , Let paste your Links here')
        // Show Link box
        channelInfo.style.display = 'none'
        linkInfo.style.display = 'block';
    }else{
        console.log('this true')
        showMsg('incomplete Information !')
    };

}

function formChanger3(){

    nprofilePath = profilePath.value;
    nvideoLink = videoLink.value;
    nthumbnailPath = thumbnailPath.value;

    if(nprofilePath!="" && nvideoLink!="" && nthumbnailPath!=""){
        err.style.color = 'rgb(91 224 0)'
        Video(nthumbnailPath , nduration , ntitles , nchannelName , nviews , nperiod , nprofilePath , nvideoLink);
        showMsg('new box have been Created Successfully !')

        setTimeout(() => {
        linkInfo.style.display = 'none'
        CreateNow.style.display = 'none'
        createButton.style.display = 'block'
        removeValue()
        }, 3000);

    }else{
        showMsg('incomplete Information !')
    };
}
function removeValue(){
    createButton.value = '';
    CreateNow.value = '';
    channelInfo.value = '';
    linkInfo.value = '';
    channelName.value = '';
    titles.value = '';
    duration.value = '';
    views.value = '';
    period.value = '';
    profilePath.value = '';
    videoLink.value = '';
    thumbnailPath.value = '';
};