$(document).ready(function () {
  $('h1').addClass('big-title margin');
  $('h1').removeClass('big-title');
  $('h1').text('Hello World');
  $('button').text('WOOP');
  $('button').html('<em>heeey</em>');
});
$('h1').click(function () {
  $('h1').css('color', 'red');
});

$('button').click(function () {
  $('h1').slideUp().slideDown();
});

$('input').keydown(function (event) {
  if (event.key === 'q') {
    $('h1').css('color', 'purple');
    $('h1').text(event.key);
  } else {
    $('h1').text(event.key);
  }
});

$('h1').on('mouseover', function () {
  $('h1').css('color', 'green');
});
