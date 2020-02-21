$("#fpSVG,#itSVG,#happyClientSVG,#fpIVSVG").css({"max-width":"130px",margin:"0 auto"});
var fpcout_g = Snap("#fpSVG svg");
var fpit_g = Snap("#itSVG svg");
var fphc_g = Snap("#happyClientSVG svg");
var fpiv_g = Snap("#fpIVSVG svg");

fpcout_g.select("#ctrsFill-1").attr({strokeDashoffset:1131.770263671875});

function fpcountFunction(){
    fpcout_g.select("#ctrsFill-1").animate({strokeDashoffset:0},2500,function(){
        fpcout_g.select("#ctrsFill-1").animate({fill:"#fff"},400);
    });
}

fpit_g.select("#fpitFill-8").attr({transform:"t0,-10"});
fpit_g.select("#msgBlock").attr({transform:"s0.5"});

function fpitFunction(){
    fpit_g.select("#itgradient1-stop1").animate({offset:1},400);
    fpit_g.select("#itgradient1-stop2").animate({offset:1},400,function(){
        fpit_g.select("#msgBlock").animate({transform:"s1",opacity:1},400);
        fpit_g.select("#fpitFill-8").animate({transform:"t0,0",opacity:1},400,function(){
            fpit_g.select("#itgradient2-stop1").animate({offset:1},400);
            fpit_g.select("#itgradient2-stop2").animate({offset:1},400);
            setTimeout(function(){
                fpit_g.select("#itgradient3-stop1").animate({offset:1},400);
                fpit_g.select("#itgradient3-stop2").animate({offset:1},400);
            },100);
            setTimeout(function(){
                fpit_g.select("#itgradient4-stop1").animate({offset:1},400);
                fpit_g.select("#itgradient4-stop2").animate({offset:1},400);
            },200);
            setTimeout(function(){
                fpit_g.select("#itgradient5-stop1").animate({offset:1},400);
                fpit_g.select("#itgradient5-stop2").animate({offset:1},400);
            },300);
        });
    });
}

fphc_g.select("#happyBlock1").attr({transform:"t0,10"});
fphc_g.select("#happyBlock2").attr({transform:"t0,10"});
fphc_g.select("#happyBlock3").attr({transform:"t0,10"});

function fphcFunction(){
    fphc_g.select("#happyBlock1").animate({transform:"t0,0",opacity:1},600,function(){
        fphc_g.select("#happyBlock3").animate({transform:"t0,0",opacity:1},600);
    });
    setTimeout(function(){
        fphc_g.select("#happyBlock2").animate({transform:"t0,0",opacity:1},600);
    },300);
}

fpiv_g.select("#fpivFill-1").attr({transform:"t0,-10"});
fpiv_g.select("#fpivFill-3").attr({transform:"t0,-10"});
fpiv_g.select("#fpivFill-4").attr({transform:"t0,-10"});
fpiv_g.select("#locationBlock").attr({transform:"s0"});

function fpIVFunction(){
    var a = fpiv_g.select("#ivdefs2").children("linearGradient");
    fpiv_g.select("#fpivFill-1").animate({transform:"t0,0",opacity:1},500,function(){
        fpiv_g.select("#fpivFill-4").animate({transform:"t0,0",opacity:1},500,function(){
            fpiv_g.select("#ivgradient1_stop1").animate({offset:1},50);
            fpiv_g.select("#ivgradient1_stop2").animate({offset:1},50,function(){
                fpiv_g.select("#ivgradient2_stop1").animate({offset:1},50);
                fpiv_g.select("#ivgradient2_stop2").animate({offset:1},50,function(){
                    fpiv_g.select("#ivgradient3_stop1").animate({offset:1},50);
                    fpiv_g.select("#ivgradient3_stop2").animate({offset:1},50,function(){
                        fpiv_g.select("#ivgradient4_stop1").animate({offset:1},50);
                        fpiv_g.select("#ivgradient4_stop2").animate({offset:1},50,function(){
                            fpiv_g.select("#ivgradient5_stop1").animate({offset:1},50);
                            fpiv_g.select("#ivgradient5_stop2").animate({offset:1},50,function(){
                                fpiv_g.select("#ivgradient6_stop1").animate({offset:1},50);
                                fpiv_g.select("#ivgradient6_stop2").animate({offset:1},50,function(){
                                    fpiv_g.select("#ivgradient7_stop1").animate({offset:1},50);
                                    fpiv_g.select("#ivgradient7_stop2").animate({offset:1},50,function(){
                                        fpiv_g.select("#ivgradient8_stop1").animate({offset:1},50);
                                        fpiv_g.select("#ivgradient8_stop2").animate({offset:1},50,function(){
                                            fpiv_g.select("#ivgradient9_stop1").animate({offset:1},50);
                                            fpiv_g.select("#ivgradient9_stop2").animate({offset:1},50,function(){
                                                fpiv_g.select("#ivgradient10_stop1").animate({offset:1},50);
                                                fpiv_g.select("#ivgradient10_stop2").animate({offset:1},50,function(){
                                                    fpiv_g.select("#ivgradient11_stop1").animate({offset:1},50);
                                                    fpiv_g.select("#ivgradient11_stop2").animate({offset:1},50,function(){
                                                        fpiv_g.select("#ivgradient12_stop1").animate({offset:1},50);
                                                        fpiv_g.select("#ivgradient12_stop2").animate({offset:1},50,function(){
                                                            fpiv_g.select("#ivgradient13_stop1").animate({offset:1},50);
                                                            fpiv_g.select("#ivgradient13_stop2").animate({offset:1},50,function(){
                                                                fpiv_g.select("#ivgradient14_stop1").animate({offset:1},50);
                                                                fpiv_g.select("#ivgradient14_stop2").animate({offset:1},50,function(){
                                                                    fpiv_g.select("#ivgradient15_stop1").animate({offset:1},50);
                                                                    fpiv_g.select("#ivgradient15_stop2").animate({offset:1},50,function(){
                                                                        fpiv_g.select("#ivgradient16_stop1").animate({offset:1},50);
                                                                        fpiv_g.select("#ivgradient16_stop2").animate({offset:1},50,function(){
                                                                            fpiv_g.select("#ivgradient17_stop1").animate({offset:1},50);
                                                                            fpiv_g.select("#ivgradient17_stop2").animate({offset:1},50,function(){
                                                                                fpiv_g.select("#ivgradient18_stop1").animate({offset:1},50);
                                                                                fpiv_g.select("#ivgradient18_stop2").animate({offset:1},50,function(){
                                                                                    fpiv_g.select("#ivgradient19_stop1").animate({offset:1},50);
                                                                                    fpiv_g.select("#ivgradient19_stop2").animate({offset:1},50,function(){
                                                                                        fpiv_g.select("#locationBlock").animate({opacity:1,transform:"s1"},400);
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    setTimeout(function(){
        fpiv_g.select("#fpivFill-3").animate({transform:"t0,0",opacity:1},500);
    },250);
}

$(document).ready(function(){

    var fp_flag = false, it_flag = false, hc_flag = false, fpiv_flag = false;
    if($("#fpSVG").isOnScreen()){
        fp_flag = true;
        fpcountFunction();
    }
    if($("#itSVG").isOnScreen()){
        it_flag = true;
        fpitFunction();
    }
    if($("#happyClientSVG").isOnScreen()){
        hc_flag = true;
        fphcFunction();
    }
    if($("#fpIVSVG").isOnScreen()){
        fpiv_flag = true;
        fpIVFunction();
    }

    $(window).on("scroll",function(){
        if($("#fpSVG").isOnScreen()){
            if(fp_flag == false){
                fp_flag = true;
                fpcountFunction();
            }
        }
        if($("#itSVG").isOnScreen()){
            if(it_flag == false){
                it_flag = true;
                fpitFunction();
            }
        }
        if($("#happyClientSVG").isOnScreen()){
            if(hc_flag == false){
                hc_flag = true;
                fphcFunction();
            }
        }
        if($("#fpIVSVG").isOnScreen()){
            if(fpiv_flag == false){
                fpiv_flag = true;
                fpIVFunction();
            }
        }
    });
});
