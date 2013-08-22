/**
 * Save to Wallet success handler
 */
var successHandler = function(params){
  console.log("Object added successfully" + params);
}

/**
 * Save to Wallet failure handler
 */
var failureHandler = function(params){
  console.log("Object insertion failed" + params);
}

/**
 * Initialization function
 */
function init(){
  document.getElementById("loyalty").addEventListener("click", function(){
    $.get("insert?type=loyalty", function(data){
      console.log(data);
    })
  });

  document.getElementById("offer").addEventListener("click", function(){
    $.get("insert?type=offer", function(data){
      console.log(data);
    })
  });
  document.getElementById("generic").addEventListener("click", function(){
    $.get("insert?type=generic", function(data){
      console.log(data);
    })
  });

  $.when($.get("jwt?type=loyalty", function(data){
      saveToWallet = document.createElement("g:savetowallet");
      saveToWallet.setAttribute("jwt", data);
      saveToWallet.setAttribute("onsuccess","successHandler");
      saveToWallet.setAttribute("onfailure","failureHandler");
      document.querySelector("#loyaltysave").appendChild(saveToWallet);}),
      $.get("jwt?type=offer", function(data){
      saveToWallet = document.createElement("g:savetowallet");
      saveToWallet.setAttribute("jwt", data);
      saveToWallet.setAttribute("onsuccess","successHandler");
      saveToWallet.setAttribute("onfailure","failureHandler");
      document.querySelector("#offersave").appendChild(saveToWallet);}),
      $.get("jwt?type=generic", function(data){
      saveToWallet = document.createElement("g:savetowallet");
      saveToWallet.setAttribute("jwt", data);
      saveToWallet.setAttribute("onsuccess","successHandler");
      saveToWallet.setAttribute("onfailure","failureHandler");
      document.querySelector("#genericsave").appendChild(saveToWallet);}),
      $.get("jwt?type=boardingpass", function(data){
      saveToWallet = document.createElement("g:savetowallet");
      saveToWallet.setAttribute("jwt", data);
      saveToWallet.setAttribute("onsuccess","successHandler");
      saveToWallet.setAttribute("onfailure","failureHandler");
      document.querySelector("#boardingpasssave").appendChild(saveToWallet);})).done(function(){
        script = document.createElement("script");
        script.src = "https://apis.google.com/js/plusone.js";
        document.head.appendChild(script);
      });
}


$(window).ready(function(){
  init();
});
