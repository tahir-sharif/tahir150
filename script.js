//               {-------------------Here--JavaScript--Starts-------------------}

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


// SearchBar value send to link Generator
var searchBtn = document.querySelector('.srchIco');
var userSearch = document.querySelector('.userSearch')
var srchSuggestion = document.querySelector('.srchSuggestion');
userSearch.addEventListener('keyup' , (enter)=>{
    if(enter.keyCode === 13){
        searchBtn.click();
    }
});
searchBtn.addEventListener('click' ,function(){

    userSearch = userSearch = document.querySelector('.userSearch').value;
    if(userSearch != ""){
    linkGenerator(userSearch);
    }   
});
// Mobile SearchBar value send to link Generator
userSearchMbl = userSearchMbl = document.querySelector('.userSearchMbl');
mblSrchBtn = document.querySelector('.mblSrchBtn');
mblSrchBtn.addEventListener('click' , function(){
    if(userSearchMbl.value != ''){
        linkGenerator(userSearchMbl.value);
    }
});
userSearchMbl.addEventListener('keyup' ,(enter) => {
    if(enter.keyCode === 13){
        mblSrchBtn.click()
    }
});

// Generate Link for Youtube
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
// Clear Form Value after Submit
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

// Mobile Searchbar  Show & hide 
function mblSrch(){
var others = document.querySelector('.others');
var mblSrchDiv = document.querySelector('.mblSrchDiv');
var hd1 = document.querySelector('.hd1');
var hd2 = document.querySelector('.hd2');
var header = document.querySelector('.header');
var userSearchMbl = document.querySelector('.userSearchMbl');

others.classList.toggle('toggleOthers');
mblSrchDiv.classList.toggle('mblSrchDivToggle');
hd1.classList.toggle('hd1Toggle')
hd2.classList.toggle('hd2Toggle')
header.classList.toggle('headerToggle')
userSearchMbl.focus()
}
// Tags horizontal Scroll 
// (value will be send from btns onclick's parameter) "I couldn't Scroll this...It will Scroll to end"
var suggestionList = document.querySelector('.suggestionList');
function suggestionScroll(value){
    suggestionList.scroll(value , 0)
}


// User Form V?alidation and Save Into Variables
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

function formChanger1(){
    createButton.style.display = 'none'
    CreateNow.style.display = 'block'
    channelInfo.style.display = 'block'
    setTimeout(() => {
        window.scroll(0,document.body.scrollHeight)
        
    }, 300);
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
        // Show Link input box
        channelInfo.style.display = 'none'
        linkInfo.style.display = 'block';
    }else{
        console.log('this true')
        showMsg('incomplete Information !')
    };

};

function formChanger3(){
    
    if(profilePath.value.toLowerCase() == 'tahir'){
        profilePath.value = './tahir.jpg'
    }
    nprofilePath = profilePath.value;
    nvideoLink = videoLink.value;

    var linkInfoValue = videoLink.value;
    thumbLink = 'http://i3.ytimg.com/vi/'+linkInfoValue.slice(-11)+'/maxresdefault.jpg'
    nthumbnailPath = thumbLink;

    if(nprofilePath!="" && nvideoLink!="" && nthumbnailPath!=""){
        err.style.color = 'rgb(91 224 0)'
        

        video = new newVideo(nthumbnailPath , nduration , ntitles , nchannelName , nviews , nperiod , nprofilePath , nvideoLink);
        videoArr.push(video);
        if(localStorage.getItem('localUserLength') == undefined){
            localStorage.setItem('localUserLength' , 1)
            userLength = localStorage.getItem('localUserLength');
        }else{
            userLength = +(localStorage.getItem('localUserLength'))
        }
        userSaveVideo(userLength);



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
};
// construct an object from user input
function newVideo(thumbnail , duration ,title , name , views , period , icon , link){
    this.thumbnail = thumbnail;
    this.duration = duration;
    this.title = title;
    this.name = name;
    this.views = views;
    this.period = period;
    this.icon = icon;
    this.link = link;
};


// Default Videos , Array of Objects
var videoArr = [
    {
        thumbnail : './thumbnail1.jpg' ,
        duration : '16:09' ,
        title : 'Hye Kahan Ka Irada Tumhara Sanam NFAK',
        name : 'NUSRAT FATEH ALI KHAN',
        views : '348k' ,
        period : '1 month' ,
        icon : 'https://yt3.ggpht.com/ytc/AKedOLS_JQEtkr812ZL0k4dQ00eJ603fTcouKDgU_s9-mQ=s48-c-k-c0x00ffffff-no-rj' ,
        link : 'https://www.youtube.com/watch?v=1Bybyk3QXcA'
    },
    {
        thumbnail : './thumbnail2.jpg' ,
        duration : '1:21:51' ,
        title : 'MOTU PATLU In Hong Kong | Full Movie | Wow Kidz' ,
        name : 'Wow kidz' ,
        views : '17M' ,
        period : '1 year' ,
        icon : 'https://yt3.ggpht.com/ytc/AKedOLRYctsTpoTP-W79JwkLXy7L3TnXUFgcUmxYhQj9=s48-c-k-c0x00ffffff-no-rj' ,
        link : 'https://www.youtube.com/watch?v=9HlDuCznuKE'
    },
    {
        thumbnail : './thumbnail3.jpg' ,
        duration : '10:24' ,
        title : 'Coke Studio Season 8 - Tajdar-e-Haram - Atif Aslam' ,
        name : 'PopBox' ,
        views : '152M' ,
        period : '3 years' ,
        icon : 'https://yt3.ggpht.com/ytc/AKedOLSHsS3Grb_YWFDkHRuSOBMvUV4f3UvxbtOc6xdx=s48-c-k-c0x00ffffff-no-rj' ,
        link : 'https://www.youtube.com/watch?v=cajSxnjQC00'
    },
    {
        thumbnail : './thumbnail4.jpg' ,
        duration : '3:26' ,
        title : 'Arash- I m so lonely broken angle lyrics' ,
        name : 'SUMIT THASALE' ,
        views : '16.8M' ,
        period : '4 years' ,
        icon : 'https://yt3.ggpht.com/ytc/AKedOLSKJJ-ey7XfF_IB3kCr2UYBdmgyxMD4Z3toVYu5=s48-c-k-c0x00ffffff-no-rj' ,
        link : 'https://www.youtube.com/watch?v=sRJvbwiHVp4'
    },
    {
        thumbnail : './thumbnail5.jpg' ,
        duration : '3:47' ,
        title : 'Imran Khan - Bewafa' ,
        name : 'FunX Gemist' ,
        views : '1180M' ,
        period : '12 years' ,
        icon :  'https://yt3.ggpht.com/ytc/AKedOLTQApwu5Bp6qTTYSlpUCcx9i4441f0Uw-YJqXkgkA=s48-c-k-c0x00ffffff-no-rj' ,
        link : 'https://www.youtube.com/watch?v=Xv0DlKncjBI'
    },
    {
        thumbnail : './thumbnail6.jpg' ,
        duration : '9:14' ,
        title : 'Balaghal Ula Bi Kamaalihi | Ali Zafar | Naat' ,
        name : 'Ali Zafar' ,
        views : '20M' ,
        period : '3 months' ,
        icon : 'https://yt3.ggpht.com/lcRAoSKJLvNWQgTbBAsnVGIb_RAmjxUfFJ1BCjWcqm2gj6wrn0xVpyJ7KurncYxQaGYKfserrg=s48-c-k-c0x00ffffff-no-nd-rj' ,
        link : 'https://www.youtube.com/watch?v=yR9ZW4mS_EA'   
    },
    {
        thumbnail : './thumbnail7.jpg' ,
        duration : '4:33' ,
        title : 'Pal - Arijit Singh & Shreya Ghoshal jalebi Song | Slowed and Reverb Lofi Mix' ,
        name : 'Indian Slowed And Reverb' ,
        views : '4.4M' ,
        period : '1 month' ,
        icon : 'https://yt3.ggpht.com/ytc/AKedOLTutnwaD90kDcNZFwn2U3iw5FRNjp4LTTCZbqaU8g=s48-c-k-c0x00ffffff-no-rj' ,
        link : 'https://www.youtube.com/watch?v=SIqnvMt8IMU'
    }
];
 
console.log(videoArr);
if(localStorage.getItem('localLength') == undefined){
    localStorage.setItem('localLength' , 0);
    var currentLength = localStorage.getItem('localLength');
};
// For Default Videos
function saveVideo(){

if(localStorage.getItem('localLength') == undefined || + +(localStorage.getItem('localLength'))<1){

    console.log(localStorage.getItem('localLength'))
    localStorage.setItem('localLength' , videoArr.length);

};
currentLength = localStorage.getItem('localLength');
        // video = new newVideo('./thumbnail1.jpg' , '16:09' , 'Hye Kahan Ka Irada Tumhara Sanam NFAK' , 'NUSRAT FATEH ALI KHAN' , '348k' , '1 month' , 'https://yt3.ggpht.com/ytc/AKedOLS_JQEtkr812ZL0k4dQ00eJ603fTcouKDgU_s9-mQ=s48-c-k-c0x00ffffff-no-rj' , 'https://www.youtube.com/watch?v=1Bybyk3QXcA')
        // localLength = localStorage.getItem('localLength')
        // currentLength = +localLength+1
        // videoArr.push(video);


var lastdur;
if(localStorage.getItem('def') == undefined){
    localStorage.setItem('def' , 'true')
};
for(i=0; i<currentLength; i++){

    lastdur =  'duration' + i;
    if(localStorage.getItem(lastdur) == undefined && localStorage.getItem('def') == 'true'){
    
        localStorage.setItem('thumbnail'+i, videoArr[i].thumbnail);
        localStorage.setItem('duration'+i, videoArr[i].duration);
        localStorage.setItem('title'+i, videoArr[i].title);
        localStorage.setItem('name'+i, videoArr[i].name);
        localStorage.setItem('views'+i, videoArr[i].views);
        localStorage.setItem('period'+i, videoArr[i].period);
        localStorage.setItem('icon'+i, videoArr[i].icon);
        localStorage.setItem('link'+i, videoArr[i].link);
        localStorage.setItem('localLength' , i);

        console.log('Setting Video' + videoArr[i].title + ' in localStorage');
        showDltMsg('Default Videos added.');


    }

};
for(i=0; i<=currentLength; i++){
    videoToDOM(i);
};
console.log(localStorage)
console.log('Successfully Completed the Operation !')
};
saveVideo();

// Default Videos to page
function videoToDOM(i){

    var thumbnail = 'thumbnail' +i;
    var duration = 'duration' +i;
    var title = 'title' +i;
    var name = 'name' +i;
    var views = 'views' +i;
    var period = 'period' +i;
    var icon = 'icon' +i;
    var link = 'link' +i;


    thumbnail = localStorage.getItem(thumbnail)
    duration = localStorage.getItem(duration)
    title = localStorage.getItem(title)
    name = localStorage.getItem(name)
    views = localStorage.getItem(views)
    period = localStorage.getItem(period)
    icon = localStorage.getItem(icon)
    link = localStorage.getItem(link)

    if(thumbnail != null){
    console.log(i+1 + " : " + title)

    var myDiv = document.querySelector('.box');
    var div = document.createElement('div');
    myDiv.appendChild(div);
    div.classList.add('videoBox')
    div.innerHTML ='<div class="thumbnail"><a href="'+link+'"><img src="' + thumbnail + '"></a><div class="duration"><span>' + duration + '</span></div></div><div class="titles"><div class="title"><p onclick="deleteVideo(' + i + ')">' + title + '</p></div><span style="display: block;">' + name + '</span><span>' + views + ' views' + " . " +  period +' ago'  + '</span></div><div class="icon"><img src="' + icon + '"></div><div class="dots" onclick="dltConfirm(' + i + ')"><i class="fas fa-trash"></i></div></div>'  
    }
};

var dltAlert = document.querySelector('.dltAlert');
var dltTxtHead = document.querySelectorAll('.dltTxt p')[0];
var dltTxt = document.querySelectorAll('.dltTxt p')[1];

// Confrims for User created Div
function dltConfirm(i){
    var title = 'title' +i;
    var showTit = localStorage.getItem(title);
    dltTxtHead.innerText = 'Do you Want to Delete ?'
    dltTxt.innerText = showTit;
    dltAlert.style.display = 'block';
    var dltButton = document.querySelectorAll('.dltBtns button')[0];
    dltButton.innerHTML = '<span onclick="deleteVideo(' + i +')">Yes</span>'
    overlay.classList.add('showOverlay');

};

// Delete default Video if deleteConfirm pass
function deleteVideo(i){

    var thumbnail = 'thumbnail' +i;
    var duration = 'duration' +i;
    var title = 'title' +i;
    var name = 'name' +i;
    var views = 'views' +i;
    var period = 'period' +i;
    var icon = 'icon' +i;
    var link = 'link' +i;
    localStorage.setItem('def' , 'false');
    // localStorage.setItem('localLength' ,(+localStorage.getItem('localLength')-1));
    

    var showTit = localStorage.getItem(title);
    console.log('Successfully deleted "' + showTit.slice(0,13) + '..."')
    showDltMsg('Successfully deleted "' + showTit.slice(0,13) + '..."');

    localStorage.removeItem(thumbnail)
    localStorage.removeItem(duration)
    localStorage.removeItem(title)
    localStorage.removeItem(name)
    localStorage.removeItem(views)
    localStorage.removeItem(period)
    localStorage.removeItem(icon)
    localStorage.removeItem(link)
    hideAlerts();
    pageReload();

};

// For User Videos
var divIsCreated = false
function userSaveVideo(userLength){
       
            localStorage.setItem('UserThumbnail'+userLength, videoArr[7].thumbnail);
            localStorage.setItem('UserDuration'+userLength, videoArr[7].duration);
            localStorage.setItem('UserTitle'+userLength, videoArr[7].title);
            localStorage.setItem('UserName'+userLength, videoArr[7].name);
            localStorage.setItem('UserViews'+userLength, videoArr[7].views);
            localStorage.setItem('UserPeriod'+userLength, videoArr[7].period);
            localStorage.setItem('UserIcon'+userLength, videoArr[7].icon);
            localStorage.setItem('UserLink'+userLength, videoArr[7].link);

            localStorage.setItem('localUserLength' , +(localStorage.getItem('localUserLength'))+1 );
    
            console.log('Setting Video' + videoArr[7].UserTitle + ' in localStorage');
            var localUserLength = +(localStorage.getItem('localUserLength'));
            divIsCreated = true;
            for(var i=1; i<=localUserLength;  i++){
                videoToDOMUser(i);
            }
};

if(localStorage.getItem('localUserLength') != undefined){
    var localUserLength = +(localStorage.getItem('localUserLength'));
    for(var i=1; i<=localUserLength;  i++){
        videoToDOMUser(i);
    };
};

// Show Video to Page if User have created any Div
function videoToDOMUser(i){

    var thumbnail = 'UserThumbnail' +i;
    var duration = 'UserDuration' +i;
    var title = 'UserTitle' +i;
    var name = 'UserName' +i;
    var views = 'UserViews' +i;
    var period = 'UserPeriod' +i;
    var icon = 'UserIcon' +i;
    var link = 'UserLink' +i;


    thumbnail = localStorage.getItem(thumbnail);
    duration = localStorage.getItem(duration);
    title = localStorage.getItem(title);
    name = localStorage.getItem(name);
    views = localStorage.getItem(views);
    period = localStorage.getItem(period);
    icon = localStorage.getItem(icon);
    link = localStorage.getItem(link);

    if(thumbnail != null){
    console.log(i + " : " + title);

    var myDiv = document.querySelector('.box');
    var div = document.createElement('div');
    myDiv.appendChild(div);
    div.classList.add('videoBox')
    div.innerHTML ='<div class="thumbnail"><a href="'+link+'"><img src="' + thumbnail + '"></a><div class="duration"><span>' + duration + '</span></div></div><div class="titles"><div class="title"><p onclick="deleteVideo(' + i + ')">' + title + '</p></div><span style="display: block;">' + name + '</span><span>' + views + ' views' + " . " +  period +' ago'  + '</span></div><div class="icon"><img src="' + icon + '"></div><div class="dots" onclick="dltUserConfirm(' + i + ')"><i class="fas fa-trash"></i></div></div>'  
    }
    if(divIsCreated){
        pageReload();
        window.location.reload();
    };
};


// Confrims for User created Div
function dltUserConfirm(i){
    var title = 'UserTitle' +i;
    var showTit = localStorage.getItem(title);
    dltTxtHead.innerText = 'Do you Want to Delete ?'
    dltTxt.innerText = showTit;
    dltAlert.style.display = 'block';
    var dltButton = document.querySelectorAll('.dltBtns button')[0];
    dltButton.innerHTML = '<span onclick="deleteUserVideo(' + i +')">Yes</span>'
    overlay.classList.add('showOverlay');
};

// Delete User Created Video if deleteConfirm pass
function deleteUserVideo(i){

    console.log(i)

    var thumbnail = 'UserThumbnail' +i;
    var duration = 'UserDuration' +i;
    var title = 'UserTitle' +i;
    var name = 'UserName' +i;
    var views = 'UserViews' +i;
    var period = 'UserPeriod' +i;
    var icon = 'UserIcon' +i;
    var link = 'UserLink' +i;
    localStorage.setItem('localUserLength' ,(+localStorage.getItem('localUserLength')-1));
    

    var showTit = localStorage.getItem(title);
    console.log('Successfully deleted "' + showTit.slice(0,13) + '..."')
    showDltMsg('Successfully deleted "' + showTit.slice(0,13) + '..."');

    localStorage.removeItem(thumbnail)
    localStorage.removeItem(duration)
    localStorage.removeItem(title)
    localStorage.removeItem(name)
    localStorage.removeItem(views)
    localStorage.removeItem(period)
    localStorage.removeItem(icon)
    localStorage.removeItem(link)
    hideAlerts()
    pageReload();

};

// Show PopUp on Screen
function showDltMsg(message){
    msgDiv =  document.querySelector('.dltMsg');
    msgDiv.style.display = 'block'
    msgDiv.innerHTML = message;
    setTimeout(() => {
    msgDiv.style.display = 'none'
    }, 2500);
};

// confirmation for delete
function restoreConfirm(){
    dltTxtHead.innerText = 'Restore to Default'
    dltTxt.innerText = 'Your Saved Videos Will be Deleted and Default Videos will be restored.';
    dltAlert.style.display = 'block';
    overlay.classList.add('showOverlay')
    var dltButton = document.querySelectorAll('.dltBtns button')[0];
    dltButton.innerHTML = '<span onclick="restore(); hideAlerts();">Yes</span>'
};

// if confirm func pass this function runs to delete
function restore(){
    showDltMsg('Restoring Settings to Default..');
    setTimeout(() => {
        localStorage.clear();
        pageReload();
    }, 1500);
};

// Hide PopUps
function hideAlerts(){
    dltAlert.style.display = 'none';
    sidebarContainer.classList.add('sideToggle');
    overlay.classList.remove('showOverlay');
    document.body.classList.toggle('hideScroll')
};

// Page Reload Function
function pageReload(){
    setTimeout(() => {
        window.location.reload();
    }, 1000);
};

// Use this functions if media query Matches
    var x = window.matchMedia("(max-width: 500px)")
    // Bottom and sidebar hides & shows on User (for Form foucus)
    function focusShNHide(){
        if (x.matches) {
            document.querySelector('.header').style.display = 'none';
            document.querySelector('.bodySidebar').style.display = 'none';
        };
    };
    function focusOutShNHide(){
        document.querySelector('.header').style.display = 'block';
        document.querySelector('.bodySidebar').style.display = 'block';
    };

    // Bottom hide & show on focus
    userSearchMbl.addEventListener('focus' ,() => {
        if (x.matches) {
            document.querySelector('.bodySidebar').style.display = 'none';
        };
    });
    userSearchMbl.addEventListener('focusout' ,() => {
        if (x.matches) {
            document.querySelector('.bodySidebar').style.display = 'block';
        };
    });
// Here Media Query Ends

//              {-------------------Here--JavaScript--Ends-------------------}

