module.exports = function getSection(_id, windowStack, _navigation, go_to_profile) {
	var isAndroid = Ti.Platform.osname === 'android';

	//Get all windows and states
	var SysEnum = require('ui/community/wrapper_classes/system_enums');

	var footer_view = Ti.UI.createView({
		backgroundColor : '#C7EAFB',
		height : '35dp',
		width : Ti.UI.FILL
	});

	var labelHolder = Ti.UI.createView({
		backgroundColor : '#C7EAFB',
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL
	});

	var label1 = Ti.UI.createLabel({
		text : 'Photos',
		left : '5dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		font : {
			fontFamily : 'Arial',
			fontSize : '16dp'
		}
	});

	label1.addEventListener('click', function() {
		var PhotoGallery = require('ui/community/media/photo_gallery');
		var _gallery = new PhotoGallery(_id, 'group', "", _navigation, windowStack);
		windowStack.push(_gallery);
		isAndroid ? _gallery.open() : _navigation.openWindow(_gallery);
	});

	var label2 = Ti.UI.createLabel({
		text : 'Events',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		font : {
			fontFamily : 'Arial',
			fontSize : '16dp'
		}
	});

	label2.addEventListener('click', function() {
		var MiscPages = require('ui/community/linkWindow');
		var _linkPage = new MiscPages(SysEnum.WINDOWS_AND_STATES.GROUP_EVENTS, _id, windowStack, null);
		windowStack.push(_linkPage);
		isAndroid ? _linkPage.open() : _navigation.openWindow(_linkPage);
	});

	var label3 = Ti.UI.createLabel({
		text : 'Find Member',
		right : '5dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		font : {
			fontFamily : 'Arial',
			fontSize : '16dp'
		}
	});

	label3.addEventListener('click', function() {
		var FindMember = require('ui/community/find_member');
		var findMember = new FindMember(_id, _navigation, windowStack, go_to_profile);
		windowStack.push(findMember);
		isAndroid ? findMember.open() : _navigation.openWindow(findMember);
	});

	var blueBar = Ti.UI.createView({
		backgroundColor : '#36A9E1',
		bottom : '0dp',
		height : '4dp',
		width : Ti.UI.FILL
	});

	labelHolder.add(label1);
	labelHolder.add(label2);
	labelHolder.add(label3);
	footer_view.add(labelHolder);
	footer_view.add(blueBar);

	return footer_view;
};
