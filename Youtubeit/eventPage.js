var menuItem = {
    "id": "Youtubeit",
    "title": "Youtubeit",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Youtubeit" && clickData.selectionText){    
        var youtubeUrl = "https://www.youtube.com/results?search_query=" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": youtubeUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth,
            "height": screen.availHeight
        };              
        chrome.windows.create(createData, function(){});        
    }
});