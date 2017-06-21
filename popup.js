// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import jQuery from 'jquery';
import './popup.css';
import './jquery.tagsinput.css';
import 'jquery-tags-input/src/jquery.tagsinput.js';

const $ = jQuery;

function onSubmit(e) {
  var rant = document.querySelector('#rb-rant').value;
  console.log(rant);
  tags = tags.split(' ');
}

function onTypeTag(e) {
  console.log(e);
  var tags = document.querySelector('#rb-tags').value;
}

$('#rb-tags').tagsInput({
  height:'50px',
  width:'380px',
});


document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('#rb-submit');
  var tags = document.querySelector('#rb-tags');
  button.addEventListener('click', onSubmit);
  tags.addEventListener('keyup', onTypeTag);
});
