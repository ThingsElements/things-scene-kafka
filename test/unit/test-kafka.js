/*
 * Copyright © 2017 HatioLab Inc. All rights reserved.  
 */

import './util'

import { expect } from 'chai'

import '../../bower_components/things-scene-core/things-scene-min'
import { Kafka } from '../../src/index'

describe('Kafka', function () {

  var board;

  beforeEach(function () {
    board = scene.create({
      model: {
        components: [{
          id: 'kafka',
          type: 'kafka'
        }]
      }
    })
  });

  it('component should be found by its id.', function () {

    var component = board.findById('kafka')

    expect(!!component).not.to.equal(false);
  });
});
