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
        navigationTooltips: ['firstSlide', 'secondSlide'],
        // showActiveTooltip: true,
        slidesNavigation: true,
        // responsiveSlides: true,
        parallax: true,
        verticalCentered: false,
        // continuousVertical: true
        //     afterLoad: function(anchorLink, index){
        // 	var loadedSection = $(this);

        // 	//使用 index
        // 	if(index == 3){
        // 		alert("第3节停止加载");
        // 	}

        // 	//使用 anchorLink
        // 	if(anchorLink == 'secondPage'){
        // 		alert("第2节停止加载");
        // 	}
        // },
        // onLeave: function(index, nextIndex, direction){
        // 	//如果目标是第三节，它将不会滚动
        // 	if(nextIndex == 3){
        // 		return false;
        // 	}
        // }
    });
});
