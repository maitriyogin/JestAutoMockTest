import AutoMockPlease from './AutoMockPlease';
var PhotoHelper = {
	imageUrlFromPhoto : function(photo, size){
    console.log('automock says:' + AutoMockPlease.aMockedFn() );
		return `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
	}
};

module.exports = PhotoHelper;