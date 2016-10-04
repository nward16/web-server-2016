//var $ =jQuery.noConflict();
//$( "div.field-name-field-image-node-attach" ).attr({class: "btn btn-primary"});
(function ($) {

 Drupal.behaviors.myModuleBehavior = {
attach: function (context, settings) {
$('.node div.field-name-field-image').addClass('pull-right clearfix');
$('.node div.field-name-node-image').addClass('pull-right clearfix');
$('.node div.field-type-taxonomy-term-reference a').addClass('pull-left btn btn-info');
$('.featured video').attr('autoplay','autoplay');
$('footer .links a').addClass('pull-left btn btn-success');
//$('.carousel-caption h1').addClass('img-rounded');
//$('.carousel-caption p.lead').addClass('img-rounded');
}
};

}(jQuery));
