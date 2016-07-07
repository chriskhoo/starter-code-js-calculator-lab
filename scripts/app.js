$(document).ready(function() {
  console.log('JS linked');

$("#basic-calc").click(function(){
  var $bNumber1 = parseFloat($("#basic-num-1").val());
  var $bOperator = $("#basic-operation").val();
  var $bNumber2 = parseFloat($("#basic-num-2").val());

  var $bValue = eval($bNumber1 + $bOperator + $bNumber2);
  $("#basic-answer-alert").html($bValue);

  $("#basic-answer-alert").show();
  $("#trip-answer-alert").hide();
  $("#bmi-answer-alert").hide();
  $("#mortgage-answer-alert").hide();
});

$("#trip-calc").click(function(){
  var $tDistance = $("#trip-distance").val();
  var $tMpg = $("#trip-mpg").val();
  var $tCostG = $("#trip-cost").val();
  var $tSpeed = $("#trip-speed").val();
  var $tValue;

  if($tSpeed<=60){
    $tValue = $tDistance / $tMpg * $tCostG;
  }
  else{
    $tValue = $tDistance / ($tMpg-($tSpeed-60)*2) * $tCostG;
    // there's an issue with the formula here
  }

  $("#trip-answer-alert").html($tValue);
  $("#basic-answer-alert").hide();
  $("#trip-answer-alert").show();
  $("#bmi-answer-alert").hide();
  $("#mortgage-answer-alert").hide();
});

$("#bmi-calc").click(function(){
  var units = $("#bmi-units").val();
  var $wMass =$("#bmi-mass").val();
  var $wHeight =$("#bmi-height").val();

  if (units == "metric"){
    $wMass *= 2.20462;
    $wHeight *= 39.3701;
    $wValue = $wMass/ ($wHeight*$wHeight)*703;
  }
  else {
    $wValue = $wMass/ ($wHeight*$wHeight)*703;
  }

  $("#bmi-answer-alert").html($wValue);
  $("#basic-answer-alert").hide();
  $("#trip-answer-alert").hide();
  $("#bmi-answer-alert").show();
  $("#mortgage-answer-alert").hide();
});

$("#mortgage-calc").click(function(){
  var $mLoan =$("#mortgage-loan").val();
  var $mAPR =$("#mortgage-apr").val()/100;
  var $mTerm =$("#mortgage-term").val();
  // console.log($mLoan);
  // console.log($mAPR);
  // console.log($mTerm);

  var $mValue = $mLoan * $mAPR * (Math.pow((1+$mAPR),$mTerm)) / (Math.pow((1+$mAPR),$mTerm) - 1);
  $("#mortgage-answer-alert").html($mValue);
  $("#basic-answer-alert").hide();
  $("#trip-answer-alert").hide();
  $("#bmi-answer-alert").hide();
  $("#mortgage-answer-alert").show();
});



});
