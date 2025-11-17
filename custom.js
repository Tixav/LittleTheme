// console.log("Custom.js Loaded!");
var DzTabS = {'LightSwitches':'lightcontent',
				'Scenes':'scenecontent',
				'Temperature':'tempwidgets',
				'Weather':'weatherwidgets',
				'Utility':'utilitycontent'};

// get the end of url like #/Dashboard
function GetTabName(){
	
	var hashSlash = location.hash.split('/')
	var tabselected=hashSlash[1];
	var hashQuestion = tabselected.split('?')
	var tabselected=hashQuestion[0];
	
	return tabselected;
}

// Replace option text by icone onload
$( document ).ready(function() {
	
	setTimeout(function() {
		// console.log("On load tab active:"+DzTabS[GetTabName()]);
		ChangeNameByIcon(DzTabS[GetTabName()]);
		
	}, 1000);
	
});


$(window).on('hashchange', function(e){
	// console.log("Tab change:"+DzTabS[GetTabName()]);
	setTimeout(function () {
		ChangeNameByIcon(DzTabS[GetTabName()]);
		// setTimeout(function () {
		// ChangeNameByIcon(DzTabS[GetTabName()]);
		// }, 100);
	}, 10);
	
});



function ChangeNameByIcon(as){
	/*
	This does not work for :
				'Temperature':'tempwidgets',
				'Weather':'weatherwidgets',
	Besause each time data is coming all the back is redraw ! so it is work just for a time for Edit button in temperature tab, and not at all 
	for the other button because no data-i18n !
	*/
	// if( as==undefined) {
		// ChangeNameByIcon("lightcontent");
		// console.log("Tab undefined");
		// return;
	// }
	console.log("ChangeNameByIcon:"+as);
	// $('body table[id*="itemtabl"] tr td.options a[data-i18n="Log"]').addClass("fa-solid fa-table");
	$('body table[id*="itemtabl"] tr td.options a[data-i18n="Log"]').text("");
	
	// $('body table[id*="itemtabl"] tr td.options a[data-i18n="Edit"]').addClass("fa-solid fa-pen-to-square");
	$('body table[id*="itemtabl"] tr td.options a[data-i18n="Edit"]').text("");
	
	// $('body table[id*="itemtabl"] tr td.options a[data-i18n="Timers"]').addClass("fa-solid fa-clock");
	$('body table[id*="itemtabl"] tr td.options a[data-i18n="Timers"]').text("");
	
	// $('body table[id*="itemtabl"] tr td.options a[data-i18n="Notifications"]').addClass("fa-solid fa-envelope");
	$('body table[id*="itemtabl"] tr td.options a[data-i18n="Notifications"]').text("");
	
	// $('body table[id*="itemtabl"] tr td.options a[data-i18n="Reset"]').addClass("fa-solid fa-house-circle-check");
	$('body table[id*="itemtabl"] tr td.options a[data-i18n="Reset"]').text("");
	
	// $('body table[id*="itemtabl"] tr td.options a[data-i18n="Forecast"]').addClass("fa-solid fa-cloud-sun-rain");
	$('body table[id*="itemtabl"] tr td.options a[data-i18n="Forecast"]').text("");
	
	
	
}

// notcalled
function ChangeNameByIconOLD (tab) {
		
		
			 $('#'+tab+' tr td.options a[class*="btnsmall"]').each(function(i,btn){
				
				if( $(btn).attr('data-i18n')=="Log" || $(btn).text()=="Log"){
					$(btn).text("");
					$(btn).addClass("fa-solid fa-table");
				}				
				
				if($(btn).attr('data-i18n')=="Edit"){
					$(btn).text("");
					$(btn).addClass("fa-solid fa-pen-to-square");
				}
				
				if($(btn).attr('data-i18n')=="Timers"){
					$(btn).text("");
					$(btn).addClass("fa-solid fa-clock");
				}
				
				if($(btn).attr('data-i18n')=="Notifications"){
					$(btn).text("");
					$(btn).addClass("fa-solid fa-envelope");
				}
				
				if($(btn).attr('data-i18n')=="Reset"){
					$(btn).text("");
					$(btn).addClass("fa-solid fa-house-circle-check");
				}
				
				if($(btn).attr('data-i18n')=="Forecast"){
					$(btn).text("");
					$(btn).addClass("fa-solid fa-cloud-sun-rain");
				}
			})
		

}
