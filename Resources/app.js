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

var view = Titanium.UI.createView();

var label1 = Titanium.UI.createLabel({
	color: '#999',
	text: 'I am Window 1',
	font: {fontSize: 20, fontFamily:'Helvetica Neue'},
	height: 32,
	width: 200,
	top: 80
});

var button1 = Titanium.UI.createButton({
	title: 'touch me',
	height: 32,
	width: 120,
	top: 120
});

view.add(label1);
view.add(button1);

win1.add(view);

button1.addEventListener('click', function() {
	Titanium.UI.createAlertDialog({
		title: 'タイトル',
		message: 'クリックされました'
	}).show();
});

var win2 = Titanium.UI.createWindow({
	title: 'Tab 2',
	backgroundColor: '#FFF'
});
var tab2 = Titanium.UI.createTab({
	icon: 'KS_nav_ui.png',
	title: 'Tab 2',
	window: win2
});
var view = Titanium.UI.createView();

var label2 = Titanium.UI.createLabel({
	color: '#999',
	text: 'I am Window 2',
	font: {fontSize: 20, fontFamily:'Helvetica Neue'},
	height: 32,
	width: 200,
	top: 80
});

var button2 = Titanium.UI.createButton({
	title: 'touch me',
	height: 32,
	width: 120,
	top: 120
});

view.add(label2);
view.add(button2);

win2.add(view);

button2.addEventListener('click', function() {
	Titanium.UI.createAlertDialog({
		title: 'タイトル',
		message: 'クリックされました'
	}).show();
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

tabGroup.open();