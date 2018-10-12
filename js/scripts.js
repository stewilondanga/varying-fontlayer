var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var dTJakobText = document.querySelector('.dTJakob');
var jvWghtRangeInput = document.querySelector('.range--dTJakob-wght');


/*jvWghtRangeInput.addEventListener('input', function () {
    dTJakobText.style['font-variation-settings'] = '"wght" ' + this.value;
});
