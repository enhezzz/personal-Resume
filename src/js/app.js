import '../css/jquery.fullpage.css'
import '../css/index.css'
import '../css/mobile.css'
import $ from 'jquery'
import 'fullpage.js'
$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        sectionsColor: ['#6699CC', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        // autoScrolling: false,
        // fitToSection: false,
        // fitToSectionDelay: 200,
        // scrollBar: true,
        menu: '#menu',
        fixedElements: '#menu',
        // dragAndMove: true,   
        // offsetSections: true,
        // fadingEffect: true,
        navigation: true,
        navigationTooltips: ['个人介绍', '技术栈','项目经验','联系我'],
        // showActiveTooltip: true,
        slidesNavigation: true,
        // responsiveSlides: true,
        parallax: true,
        verticalCentered: false,
      
    });
});
