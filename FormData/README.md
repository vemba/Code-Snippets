# File Upload Using FormData

 This repository contains example of file Upload using FormData API
 
 <h4>FormData API</h4>
 XMLHttpRequest Level 2 introduces a slew of new capabilities which put an end to crazy hacks in our web apps; things like cross-origin requests, uploading progress events, and support for uploading/downloading binary data. These allow AJAX to work in concert with many of the bleeding edge HTML5 APIs such as File System API, Web Audio API, and WebGL.
 
 FormData objects provide a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest send() method.

 It uses the same format a form would use if the encoding type were set to "multipart/form-data".
 <br>
 <h5>Constructor</h5>
  FormData()<br>
  &nbsp;&nbsp;Creates a new FormData object.
 <h5>Methods</h5>
  FormData.append()<br>
  &nbsp;&nbsp;Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.<br>
  
  FormData.delete()<br>
  &nbsp;&nbsp;Deletes a key/value pair from a FormData object.<br>
  
  To know more about FormData methods,refer this <a href="https://developer.mozilla.org/en/docs/Web/API/FormData">link</a><br>
  
  <h5>To track the percentage of uploaded data</h5>
  <ul>
  <li>Firstly, we have created an instance of object of XHR and have opened a connection to the provided url. We then append the file to the form data object and send it with the request.</li>

  <li>In order to track the progress of file upload, we have an event xhr.upload.onprogress(), the method provides us a callback function in which we get an argument, using which we calculate the percentage of upload data.</li>
  </ul>
  <br>See Example folder for the full demo of the upload file using FormDatas .<br> 
<h4>Note</h4>
 <b>FormData objects are not stringifiable objects.</b>
