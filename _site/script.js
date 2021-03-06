// script.js

// Keep track of the current image, identified by its class
var currentClass = 'knowing';

// List of names of images
// The left string should be the name of the image file. It will be used for the CSS class
// Don't forget to edit the button IDs of index.html
// Also don't forget to change the default in style.css
var imageTitles = {
    'theview': '"The View" 2020',
    'ancom' : '"The Ancom Way" 2020',
    'ascend' : '"Ascend" 2018',
    'breathless' : '"Breathless" 2019',
    'cruise' : '"Drift" 2018',
    'venture' : '"The Venture" 2020',
    'refusal' : '"The Refusal" 2020',
    'mentu': '"Mentu" 2019',
    'westminster': '"Westminster 717" 2017',
    'kavref': '"Kavaeric Refsheet" 2020',
    'stoplight': '"Impaled" 2019',
    'cona': '"CM Cona II", 2019',
    'armour': '"Terran Shock Armour" 2018',
    'kathid': '"Follow" 2018',
    'anubis': '"Silence" 2018'
};

var setImage = function(clickedButton) {
    // Get the needed class from the ID of the button
    var newClass = String(clickedButton.attr('id'));

    // Remove the current class from all .background elements, and add the new one
    $('.background').removeClass(currentClass).addClass( newClass );

    // Update the current image class
    currentClass = newClass;

    // Change header text
    $('#headerText').text(imageTitles[newClass]);
};

// Show/hide header sidebar
function toggleHeaderStrip() {
    if($('#headerStrip').css('display') === 'flex' ) {
        $('#headerStrip').css('display', 'none');
        $('#hideshow').text('\u25ba');
    } else {
        $('#headerStrip').css('display', 'flex');
        $('#hideshow').text('\u2503');
    }

};

window.mobileCheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

// Wait until the document is done loading
$(document).ready(function() {

    // Add styles for each of the buttons
    $('#headerButtons').children('a.button').each(function () {

        var imageName = $(this).attr('id');

        // Mobile browsers will not have the frosted glass appearance
        if (window.mobileCheck()) {
            console.log("Mobile browser detected");
            $('<style>'
            + '#' + imageName + ' { background-image: url("img/' + imageName + '_smb.png"); }'
            + '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '_sm.jpg"); }'
            + ''
            + '@media only screen and (min-width: 768px) {'
            +    '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '.jpg"); }'
            + '}'
            + ''
            + '@media only screen and (min-width: 1280px) {'
            +    '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '.jpg"); }'
            + '}</style>').appendTo('head');
        } else {
            console.log("Desktop browser detected");
            $('<style>'
            + '#headerStrip { background-color: #eee; }'
            + '#hideshow { background-color: #eee; }'
            + '.background { background-attachment: fixed; }'
            + '#' + imageName + ' { background-image: url("img/' + imageName + '_smb.png"); }'
            + '.background.' + imageName + ' { background-image: url("img/' + imageName + '_smb.png"); }'
            + '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '_sm.jpg"); }'
            + ''
            + '@media only screen and (min-width: 768px) {'
            +    '.background.' + imageName + ' { background-image: url("img/' + imageName + '_b.png"); }'
            +    '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '.jpg"); }'
            + '}'
            + ''
            + '@media only screen and (min-width: 1280px) {'
            +    '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '.jpg"); }'
            + '}</style>').appendTo('head');
        }
    });

    // Unhide the image selection buttons
    $('div.header > div.headerStrip > div.headerButtons .button ').css('opacity', '1');

    // Change header text
    $('#headerText').text(imageTitles['knowing']);

    // Click function
    $('div.headerButtons > a.button').on('click', function() {
        setImage( $(this) )
    });

    mobileCheck();
}); 
