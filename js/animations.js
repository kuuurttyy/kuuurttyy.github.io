$(document).ajaxComplete(function () {
    var homepage = new TimelineMax();

//    var titleHighlight = CSSRulePlugin.getRule("h1 span::before");
//
////    homepage.from(titleHighlight, 1, {cssRule:{width: 0}});
//    
//    TweenMax.from(titleHighlight, 2, {cssRule:{
//        width: 0
//    }})
    
    
    var rule = CSSRulePlugin.getRule("h1 span::before");
    
    TweenMax.to(rule, 2, {cssRule:{"background-color": "#ff0000"}});
});