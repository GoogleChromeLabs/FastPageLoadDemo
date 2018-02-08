/*
Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
window.onload=function(){var hr=new Date().getHours();var greeting="Good morning";if(hr>11){greeting="Good afternoon"}
if(hr>17){greeting="Good evening"}
h2=document.getElementById("greethead");h2.innerHTML=greeting+h2.innerHTML}
function bonusart(){var radiogroup=document.getElementsByName("gq");if(radiogroup[0].checked){document.getElementById("bonus0").style.display="block"}else{document.getElementById("bonus0").style.display="none"}
if(radiogroup[1].checked){document.getElementById("bonus1").style.display="block"}else{document.getElementById("bonus1").style.display="none"}
if(radiogroup[2].checked){document.getElementById("bonus2").style.display="block"}else{document.getElementById("bonus2").style.display="none"}
if(radiogroup[3].checked){document.getElementById("bonus3").style.display="block"}else{document.getElementById("bonus3").style.display="none"}}