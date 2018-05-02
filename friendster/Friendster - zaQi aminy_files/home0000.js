//Start ajax home tabs
//helper- returns user status text
function getStatusDisplayText(num)
{	
	if(num==2)
		return Locale.getString('single');
	else if(num==3)
		return Locale.getString('inARel');
	else if(num==4)
		return Locale.getString('married');
	else if(num==6)
		return Locale.getString('domPar');
	else if(num==8)
		return Locale.getString('complicated');
	else
		return '';
}

//handle xmlhttprequest
function tabContentRequestHandler(js)
{		
	eval(js);
						
	if(l.list && l.list.item && l.list.item.length!=0) //if we have data
	{	
		var listName = l.list["@name"];
				
		if(listName=="mostrecent" || listName=="feat_photos" || listName=="mostgrabbed" || listName=="mostdiscussed" || listName=="friends")
		{
			for(var i=0;i<4 && i<l.list.item.length;i++)
			{		
				//photos tab
				var img=document.getElementById(listName + "_" + (i+1));
				
				img.parentNode.parentNode.className="imgblock85";
				img.src=l.list.item[i].photo + "s.jpg";
		
				var photoLink=document.getElementById(listName + "_" + (i+1) + "_photoLink" );
				photoLink.href="/photos/" + l.list.item[i].uid + "/" + l.list.item[i].pid + "/" + l.list.item[i].rid;
				
				var nameLink=document.getElementById(listName + "_" + (i+1) + "_nameLink" );
				nameLink.href="/" + l.list.item[i].uid;
				nameLink.innerHTML=l.list.item[i].firstname;
				
				var posted=document.getElementById(listName + "_" + (i+1) + "_posted" );
				posted.innerHTML="Posted " + l.list.item[i].lastupd;
			}
		}
		else if(listName=="seemorepeople_2" || listName=="newusers" || listName=="mostprofile" || listName=="localusers" || listName=="profile_viewers")
		{		
			for(var i=0;i<4 && i<l.list.item.length;i++)
			{		
				//photos tab
				var img=document.getElementById(listName + "_" + (i+1));
				img.parentNode.parentNode.className="imgblock85";
				img.src=l.list.item[i].photo + "s.jpg";
	
				var photoLink=document.getElementById(listName + "_" + (i+1) + "_photoLink" );
				photoLink.href="/" + l.list.item[i].uid;
				
				var nameLink=document.getElementById(listName + "_" + (i+1) + "_nameLink" );
				nameLink.href="/" + l.list.item[i].uid;
				nameLink.innerHTML=l.list.item[i].firstname;
				
				var ageStatus=document.getElementById(listName + "_" + (i+1) + "_ageStatus" );
				ageStatus.innerHTML=l.list.item[i].age + ", " +  getStatusDisplayText(l.list.item[i].status);
				
				var location=document.getElementById(listName + "_" + (i+1) + "_location" );
				location.innerHTML=l.list.item[i].locationString;
			}
		}
		else if(listName=="groups" || listName=="feat_groups")
		{		
			for(var i=0;i<4 && i<l.list.item.length;i++)
			{		
				var img=document.getElementById(listName + "_" + (i+1));
				img.parentNode.parentNode.className="imgblock85";	
				img.src=l.list.item[i].photo + "s.jpg";
	
				var photoLink=document.getElementById(listName + "_" + (i+1) + "_photoLink" );
				photoLink.href="/group/tabmain.php?gid=" + l.list.item[i].gid;
				
				var nameLink=document.getElementById(listName + "_" + (i+1) + "_nameLinl" );
				nameLink.href="/group/tabmain.php?gid=" + l.list.item[i].gid;
				nameLink.innerHTML=l.list.item[i].name;
	
				var members=document.getElementById(listName + "_" + (i+1) + "_members" );
				members.innerHTML=l.list.item[i].members + " members";
			}
		}
		else if(listName=="feat_profiles" || listName=="sponsored_users")
		{		
			for(var i=0;i<4 && i<l.list.item.length;i++)
			{		
				var img=document.getElementById(listName + "_" + (i+1));
				img.parentNode.parentNode.className="imgblock85";	
				img.src=l.list.item[i].photo + "s.jpg";
	
				var photoLink=document.getElementById(listName + "_" + (i+1) + "_photoLink" );
				photoLink.href="/" + l.list.item[i].uid;
				
				var nameLink=document.getElementById(listName + "_" + (i+1) + "_nameLink" );
				if(nameLink)
				{
					nameLink.href="/" + l.list.item[i].uid;
					nameLink.innerHTML=l.list.item[i].firstname;
				}
			}
		}
		else if(listName=="recent_network1" || listName=="all_reviews")
		{		
			for(var i=0;i<4 && i<l.list.item.length;i++)
			{					
				//photos tab
				var img=document.getElementById(listName + "_" + (i+1));
				img.parentNode.parentNode.className="imgblock85";		
				img.src=l.list.item[i].photo + "s.jpg";
	
				var photoLink=document.getElementById(listName + "_" + (i+1) + "_photoLink" );
				photoLink.href="/user.php?view=review&uid=" + l.list.item[i].uid;
				
				var nameLink=document.getElementById(listName + "_" + (i+1) + "_nameLink" );
				nameLink.href="/" + l.list.item[i].uid;
				nameLink.innerHTML=l.list.item[i].firstname;
				
				var titleLink=document.getElementById(listName + "_" + (i+1) + "_reviewTitleLink" );
				titleLink.href="/user.php?view=review&uid=" + l.list.item[i].uid;
				titleLink.innerHTML=l.list.item[i].title;
				
				var reviewCat=document.getElementById(listName + "_" + (i+1) + "_reviewCategory" );
				reviewCat.innerHTML=l.list.item[i].category + ": " + reviewCat.innerHTML;
				
				var readMoreLink=document.getElementById(listName + "_" + (i+1) + "_reviewReadMoreLink" );
				readMoreLink.href="/user.php?view=review&uid=" + l.list.item[i].uid;
				readMoreLink.innerHTML = "Read more";
				
				var postedBy=document.getElementById(listName + "_" + (i+1) + "_postedBy" );
				postedBy.innerHTML = "Posted " + l.list.item[i].lastupd + " by " + postedBy.innerHTML;
				
				var starImg=document.getElementById(listName + "_" + (i+1) + "_reviewStarsImg");
				starImg.src="http://images.friendster.com/images/" + l.list.item[i].rating + "stars_sn.gif";
				
				var reviewParagraph=document.getElementById(listName + "_" + (i+1) + "_reviewParagraph" );
				reviewParagraph.innerHTML=l.list.item[i].excerpt;
			}
		}
		else if(listName=="feat_blogs" || listName=="all_blogs")
		{		
			for(var i=0;i<4 && i<l.list.item.length;i++)
			{		
				//photos tab
				var img=document.getElementById(listName + "_" + (i+1));
				img.parentNode.parentNode.className="imgblock85";			
				img.src=l.list.item[i].photo + "s.jpg";
	
				var photoLink=document.getElementById(listName + "_" + (i+1) + "_photoLink" );
				photoLink.href=l.list.item[i].link;
				
				var blogLink=document.getElementById(listName + "_" + (i+1) + "_blogTitleLink" );
				blogLink.href=l.list.item[i].link;
				blogLink.innerHTML=l.list.item[i].firstname;
				
				var nameLink=document.getElementById(listName + "_" + (i+1) + "_nameLink" );
				nameLink.href="/" + l.list.item[i].uid;
				nameLink.innerHTML=l.list.item[i].firstname;
				
				var blogEntry=document.getElementById(listName + "_" + (i+1) + "_blogEntry" );
				blogEntry.innerHTML=l.list.item[i].blogEntry;
				
				var postedBy=document.getElementById(listName + "_" + (i+1) + "_postedBy" );
				postedBy.innerHTML = "Posted " + l.list.item[i].lastupd + " by " + postedBy.innerHTML;
				
				var readMoreLink=document.getElementById(listName + "_" + (i+1) + "_blogReadMoreLink" );
				readMoreLink.href=l.list.item[i].link;
				readMoreLink.innerHTML = "Read more";
			}
		}
	}
	else if(l.list["@name"]=="error") //if there's an error message
	{		
		var tabModuleArr = document.getElementById(currTabClick).getElementsByTagName("DIV");
		var tab=null;
						
		for(var x=0;x<tabModuleArr.length;x++)
		{
			if(tabModuleArr[x].className=="tabModuleContent")
			{
				tab=tabModuleArr[x];
				break;
			}			
		}
			
		if(tab.innerHTML.indexOf("tabModuleContentEmpty")==-1) //if there's not an error msg already there
			tab.innerHTML = "<div style=\"height: 173px;\" class=\"tabModuleContentEmpty\">"+l.list.text+"</div>"
	}
	else //no data
	{		
		var tabModuleArr = document.getElementById(currTabClick).getElementsByTagName("DIV");
		var tab=null;
		
		//style="height: 173px;" class="tabModuleContentEmpty"
		
		for(var x=0;x<tabModuleArr.length;x++)
		{
			if(tabModuleArr[x].className=="tabModuleContent")
			{
				tab=tabModuleArr[x];
				break;
			}			
		}
		
		tab.innerHTML = "<div style=\"height: 173px;\" class=\"tabModuleContentEmpty\">" + Locale.getString('featureTempUnavail') + "</div>"
	}	
}

var switchTabFlag = new Object();
var currTabClick = null;

//function to switch tabs
function switchHomeTab(tabSet,numOfTabs,activeTab) 
{		
	currTabClick=tabSet+activeTab;
	
	//grab the id of the firsttab- we won't pull data for it.
	if(switchTabFlag[tabSet + "FirstTab"]==undefined)
	{
		for (var i=1;i<=numOfTabs;i++)
		{
			if(document.getElementById(tabSet + i).style.display=='')
			{
				switchTabFlag[tabSet + "FirstTab"]=i;
				break;
			}
		}
	}
	
	//hide tabs
	for (var i=1;i<=numOfTabs;i++) 
		document.getElementById(tabSet + i).style.display = 'none';
	
	//display tabs
	var tab = document.getElementById(tabSet + activeTab);
	tab.style.display = '';

	//id for tab
	var t = tabSet + String(activeTab);
	
	//if we've already pulled data, no need to pull again.
	if(switchTabFlag[t]==undefined) 
		switchTabFlag[t]=true;
	else {
            // change active panel to display
            if (tabSet=="fu") {
                  switch(activeTab) {
                     case 2: /* Bookmark */
                        setActivePanel('bookmarkPanel');
                        break;
                     case 4: /* Groups */
                        setActivePanel('groupPanel');
                        break;
                     case 5: /* School */
                        setActivePanel('schoolPanel');
                        break;
                  }
            } 
	    return;
        }
	
	//tabs for each tabSet
	var homeIds = { 
	"ph": {"tabs":["friendsPhotos","recentPhotos","featuredPhotos","grabbedPhotos","discussedPhotos"],"url":"/getpictures.php"},
	"mp": {"tabs":["livingLocally","profileHistory","friendsOfFriends","newMembers","popular"],"url":"/getpeople.php"},
	"g": {"tabs":["myGroups","imAFan","beAFan","featuredGroups"],"url":"/getgroupsfans.php"},
	"re": {"tabs":["friendsBlogs","featuredBlogs","allBlogs","userReviews","allReviews"],"url":"/getreviewsblogs.php"}
	};
		
	//only call for data if we need to
	if(homeIds[tabSet] && homeIds[tabSet].tabs[activeTab-1] && switchTabFlag[tabSet + "FirstTab"]!=activeTab)
	{

		//strip any content that may be here.
		var thumbs = document.getElementById(tabSet + activeTab).getElementsByTagName("IMG");
		for(var x=0; x<thumbs.length;x++)
				thumbs[x].src="http://images.friendster.com/images/t.gif";
		
		var Links = document.getElementById(tabSet + activeTab).getElementsByTagName("A");
		for(var x=0; x<Links.length;x++)
		{
			var thisLink = Links[x];
			
			if(thisLink.firstChild && thisLink.firstChild.nodeValue=="Read more")
				thisLink.firstChild.nodeValue="";
		}
		
		var Divs = document.getElementById(tabSet + activeTab).getElementsByTagName("DIV");
		for(var x=0; x<Divs.length;x++)
		{
			var thisDiv = Divs[x];
			
			if(thisDiv.className=="imgblock85")
				thisDiv.className="imgblock85placeHolder";
			
			if(thisDiv.firstChild && thisDiv.firstChild.nodeValue && (thisDiv.firstChild.nodeValue.indexOf("Posted") != -1 || thisDiv.firstChild.nodeValue.indexOf("members") != -1 || thisDiv.firstChild.nodeValue.indexOf(":") != -1))
				thisDiv.firstChild.nodeValue="";
		}
			
		//make request
		var url = homeIds[tabSet].url + "?type=" + homeIds[tabSet].tabs[activeTab-1];		
		sendXMLHttpRequestText(url,"tabContentRequestHandler");
	}
	else //if we're not then load the images
	{
		var imgArr = tab.getElementsByTagName("img");
	
		//set src's of imgs from longDesc.
		for(var x=0;x<imgArr.length;x++)
		{
			if(imgArr[x].longDesc)
			{
				imgArr[x].src=imgArr[x].longDesc;
			}
		}
	}

        if (tabSet=="fu") {
          switch(activeTab) {
             case 2: /* Bookmark */
                loadTrackerPanel('bookmark');
                break;
             case 4: /* Groups */
                loadTrackerPanel('group');
                break;
             case 5: /* Schoolmates */
                loadTrackerPanel('school');
                break;
          }
        } 
    

}
//end ajax home tabs

var friendtrackerData = new Array();
var activeTrackerPanel = "fu1";

function loadTrackerPanel(trackerType) {
  panelID = trackerType + "Panel";
  url = "/tracker.php?type="+trackerType+'&rand='+pageViewerID;

  setActivePanel(panelID);
  if (friendtrackerData[trackerType] != true) {
    friendtrackerData[trackerType] = true;
    sendXMLHttpRequestText(url, "loadTrackerPanelData");
  }
}

function setActivePanel(panelID) {
  document.getElementById(activeTrackerPanel).style.display = "none";
  document.getElementById(panelID).style.display = "block";
  activeTrackerPanel = panelID;
}

function loadTrackerPanelData(html) {
  targetID = activeTrackerPanel;
  document.getElementById(targetID).innerHTML = html;
}

function jumpMenu(targ,selObj,restore) {
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}


/* START TRACKER TIME */

function displayTrackerTime(uid)
{
    sendXMLHttpRequestText('/tracker.php?uid='+uid, 'handleTrackerTime');
}

function handleTrackerTime(html)
{
    if (html)
    {
        var suffix = new Array(6);
        suffix[0] = 'B';
        suffix[1] = 'C';
        suffix[2] = 'D';
        suffix[3] = 'E';
        suffix[4] = 'F';
        suffix[5] = 'G';

        var prefix = new Array(5);
        prefix[0] = "friend_when";
        prefix[1] = "entity_when";
        prefix[2] = "group_when";
        prefix[3] = "classmate_when";
        prefix[4] = "bookmark_when";

        var json = eval("(" + html + ")");
		var lastevent;
        var time_value = new Array(5);
		
		// friend events
		if(json.friend){
			if(json.friend.number < 0) lastevent = Locale.getString('momentsAgo');
			else lastevent = translateEventTimestamp(json.friend.number, json.friend.unit);		
		} else {
			lastevent = '';
		}
        time_value[0] = lastevent;

		// entity events
		if(json.entity){
			if(json.entity.number < 0) lastevent = Locale.getString('momentsAgo');
			else lastevent = translateEventTimestamp(json.entity.number, json.entity.unit);
		} else {
			lastevent = '';
		}
        time_value[1] = lastevent;
        
        // group events
        if(json.group){
			if(json.group.number < 0) lastevent = Locale.getString('momentsAgo');
			else lastevent = translateEventTimestamp(json.group.number, json.group.unit);
		} else {
			lastevent = '';
		}
        time_value[2] = lastevent;
        
        // classmate events
        if(json.classmate){
			if(json.classmate.number < 0) lastevent = Locale.getString('momentsAgo');
			else lastevent = translateEventTimestamp(json.classmate.number, json.classmate.unit);
		} else {
			lastevent = '';
		}
        time_value[3] = lastevent;
        
        // bookmark events
        if(json.bookmark){
			if(json.bookmark.number < 0) lastevent = Locale.getString('momentsAgo');
			else lastevent = translateEventTimestamp(json.bookmark.number, json.bookmark.unit);
		} else {
			lastevent = '';
		}
        time_value[4] = lastevent;


        var i;
        var j;
        var div_id;

        for (i=0; i < 6; i++)
        {
            for (j=0; j < 5; j++)
            {
                div_id = prefix[j] + "_" + suffix[i];
                if (document.getElementById(div_id) != null)
                {
                    document.getElementById(div_id).innerHTML= time_value[j] + '&nbsp;';
                }
            }
        }
    }
}

function translateEventTimestamp(num,unit){
	if(num < 0)	return unit;
	var stamp = '';

	switch(unit){
		case 'days ago': stamp = Locale.getString('daysAgo'); break;
		case 'day ago': stamp = Locale.getString('dayAgo'); break;	
		case 'hours ago': stamp = Locale.getString('hoursAgo'); break;
		case 'hour ago': stamp = Locale.getString('hourAgo'); break;
		case 'seconds ago': stamp = Locale.getString('secondsAgo'); break;
		case 'second ago': stamp = Locale.getString('secondAgo'); break;
		case 'minutes ago': stamp = Locale.getString('minutesAgo'); break;
		case 'minute ago': stamp = Locale.getString('minuteAgo'); break;
		case 'weeks ago': stamp = Locale.getString('weeksAgo'); break;
		case 'week ago': stamp = Locale.getString('weekAgo'); break;
		case 'years ago': stamp = Locale.getString('yearsAgo'); break;
		case 'year ago': stamp = Locale.getString('yearAgo'); break;
		case 'months ago': stamp = Locale.getString('monthsAgo'); break;
		case 'month ago': stamp = Locale.getString('monthAgo'); break;
		default: return ''; break;
	}

	return (unit.length > 0) ? num+' '+stamp : stamp;
	
}

/* END TRACKER TIME */
