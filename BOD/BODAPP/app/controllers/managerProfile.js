// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};

$.profilePic.image = args.user.profileImage.image;
$.profileName.text = args.user.name.text;