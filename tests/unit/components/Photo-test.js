jest.autoMockOn();
var PhotoPath = '../../../src/js/components/Photo.js';
var PhotoHelperPath = '../../../src/js/helpers/PhotoHelper';
var AutoMockPleasePath = '../../../src/js/helpers/AutoMockPlease';
var ConstantsPath = '../../../src/js/Constants';

jest.dontMock(PhotoPath);
jest.dontMock(ConstantsPath);

import React from 'react/addons';
const Photo = require(PhotoPath);
const Constants = require(ConstantsPath);

const PhotoHelperMock = require(PhotoHelperPath);

const AutoMockPleaseMock = require(AutoMockPleasePath);

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

    var PhotoComp = TestUtils.renderIntoDocument(<Photo photo={testPhoto} size={Constants.size.Z} />);

    // make sure we have an element
    var element = TestUtils.findRenderedDOMComponentWithClass(PhotoComp, 'photo-Z');
    expect(element).toBeDefined();

    // make sure the state is reflected in the src
    var img = TestUtils.findRenderedDOMComponentWithTag( PhotoComp, 'img');
    expect(img.getDOMNode().src).toEqual('http://farm4.staticflickr.com/3761/20178241195_53e4abe8f5_Z.jpg');

    expect(AutoMockPleaseMock.aMockedFn.mock.calls.length).toEqual(1);

  });
});
