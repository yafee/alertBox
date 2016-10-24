$.extend({
  alertBox: function(options) {
    var text = textColor = fontSize = type = "";
    if (options instanceof Array) {
      text = options[0];
      type = options[1];
      textColor = options[2];
      fontSize = options[3];
    } else {
      text = options.text;
      type = options.type;
      textColor = options.textColor;
      fontSize = options.fontSize;
    }
    $("<div class='cover'></div>").appendTo($("body"));
    $("<div class='alertBox'><div class='alertText'></div><div class='alertBtn'>+</div></div>").appendTo($("body")).addClass(type).css("visibility", "visible");
    fontSize = options.fontSize ? options.fontSize : Number($(".alertText").css("fontSize").slice(0, -2));
    $(".alertText").html(text).css({ color: textColor, "font-size": fontSize, lineHeight: fontSize + 8 + "px" });
    $(".alertBtn").addClass("activeBtn").on("click", function() { $(this).removeClass("activeBtn"), $(this).parent("").fadeOut("fast", function() { $(".cover").fadeOut("fast"); }); });
  }
});
