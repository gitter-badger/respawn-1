$(function () {
  // Grab the template script
  var theTemplateScript = $("#document-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "command": [
      {
        //Move
        "name": "move",
        "description": "Moves player around.",
        "factors": "Direction | Distance",
        "code-sample": "move(direction['x|y|z'],distance[int])"
      },
      {
        //Build
        "name": "build",

      }
    ]
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});

console.log('You\'ve reached the survival guide. If at anytime you want to go back to the game, simply click \"Home\" on the navigation menu or type in: \"game()\" on this page at any time.')

function game() {
  window.location = "../index.html";
}
