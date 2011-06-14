Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({
	title: 'Tab 1', 
	backgroundColor: '#fff'
});
var tab1 = Titanium.UI.createTab({
	icon: 'KS_nav_views.png', 
	title: 'Tab 1', 
	window: win1
});
var label1 = Titanium.UI.createLabel({
	color: '#999',
	text: 'I am Window 1', 
	font: {fontSize: 20, fontFamily:'Helvetica Neue'}
});
win1.add(label1);

var win2 = Titanium.UI.createWindow({
	title: 'Tab 2', 
	backgroundColor: '#FFF'
});
var tab2 = Titanium.UI.createTab({
	icon: 'KS_nav_ui.png',
	title: 'Tab 2', 
	window: win2
});
var label2 = Titanium.UI.createLabel({
	color: '#999', 
	text: 'I am Window 2', 
	font: {fontSize: 20, fontFamily: 'Helvetica Neue'}
});
win2.add(label2);

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

tabGroup.open();