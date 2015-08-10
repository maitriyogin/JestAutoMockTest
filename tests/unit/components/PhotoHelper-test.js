var PhotoHelperPath = '../../../src/js/helpers/PhotoHelper';
var ConstantsPath = '../../../src/js/Constants';

jest.dontMock(PhotoHelperPath);
jest.dontMock(ConstantsPath);

import React from 'react/addons';
const PhotoHelper = require(PhotoHelperPath);
const Constants = require(ConstantsPath);

var TestUtils = React.addons.TestUtils;

describe('Photo', function() {
  it('creates the img src from a photo', function() {

    var testPhoto = {
        "id": "20178241195",
        "secret": "53e4abe8f5",
        "server": "3761",
        "farm": 4,
        "title": "Space rocket"
      };
      
      var expected = 'http://farm4.staticflickr.com/3761/20178241195_53e4abe8f5_z.jpg';
      
      var result = PhotoHelper.imageUrlFromPhoto(testPhoto, Constants.size.Z);
      expect(result).toEqual('http://farm4.staticflickr.com/3761/20178241195_53e4abe8f5_Z.jpg');

  });
});
