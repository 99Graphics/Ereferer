

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#ErefererAchat").toggleClass("toggled");
});

var objDiv = document.getElementById("your_div");

$(document).ready(function () {
    $(".contentEre").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".contentEre").is(':visible') ? 'Show More' : 'Show Less';
        $(".show_hide").text(txt);
        $(this).next('.contentEre').slideToggle(200);
    });
});

$(document).ready(function () {
    $(".contentEre").hide();
    $(".show_hide2").on("click", function () {
        var txt = $(".contentEre").is(':visible') ? 'Show More' : 'Show Less';
        $(".show_hide2").text(txt);
        $(this).next('.contentEre').slideToggle(200);
    });
});
$(document).ready(function () {
    $(".contentEre").hide();
    $(".show_hide3").on("click", function () {
        var txt = $(".contentEre").is(':visible') ? 'Show More ' : 'Show Less';
        $(".show_hide3").text(txt);
        $(this).next('.contentEre').slideToggle(200);
    });
});

$('.show_hide3').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
});

$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".rediobtn").not(targetBox).hide();
        //$(targetBox).show();
        $(targetBox).css({
          display: 'inline-block'
        });
    });
});
 $(function() {
    $('#toggle-two').bootstrapToggle({
      on: 'Enabled',
      off: 'Disabled'
    });
  })


  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

