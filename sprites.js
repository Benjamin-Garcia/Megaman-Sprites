var srMegaman = function(x, y) {
    //all skin-colored pixels
    stroke(255, 235, 150);
    fill(255, 235, 150);
    
    rect(x+d*9, y-17, d*6, 4);
    line(x+d*9, y-12, x+d*13, y-12);
    line(x+d*8, y-16, x+d*8, y-12);
    
    //all white pixels
    stroke(255, 255, 255);
    fill(255, 255, 255);
    
    rect(x+d*14, y-17, d*2, 3);
    rect(x+d*10, y-17, d*2, 3);
    line(x+d*9, y-16, x+d*9, y-15);
    
    //all black pixels
    stroke(0, 0, 0);
    fill(0, 0, 0);
    
    point(x, y-1);
    point(x+d*1, y-2);
    point(x+d*2, y-2);
    point(x+d*3, y-3);
    point(x+d*4, y-3);
    point(x+d*4, y-4);
    point(x+d*5, y-5);
    point(x+d*4, y-9);
    point(x+d*9, y-3);
    point(x+d*10, y-4);
    point(x+d*11, y-3);
    point(x+d*20, y-1);
    point(x+d*16, y-4);
    point(x+d*15, y-5);
    point(x+d*16, y-9);
    point(x+d*7, y-21);
    point(x+d*6, y-15);
    point(x+d*7, y-13);
    point(x+d*8, y-12);
    point(x+d*14, y-12);
    point(x+d*12, y-23);
    point(x+d*13, y-22);
    point(x+d*14, y-21);
    point(x+d*16, y-19);
    point(x+d*12, y-19);
    point(x+d*11, y-21);
    rect(x+d*11, y-16, d*1, 1);
    line(x+d*10, y-13, x+d*13, y-13);
    line(x+d*14, y-16, x+d*14, y-15);
    line(x+d*13, y-18, x+d*14, y-18);
    line(x+d*12, y-20, x+d*15, y-20);
    line(x+d*9, y-11, x+d*13, y-11);
    line(x+d*5, y-18, x+d*5, y-16);
    line(x+d*6, y-20, x+d*6, y-19);
    line(x+d*10, y-22, x+d*8, y-22);
    line(x+d*11, y-23, x+d*10, y-23);
    line(x+d*16, y-13, x+d*16, y-19);
    line(x+d*17, y-13, x+d*15, y-13);
    line(x+d*18, y-11, x+d*18, y-12);
    line(x+d*19, y-7, x+d*19, y-10);
    line(x+d*16, y-6, x+d*18, y-6);
    line(x+d*15, y-7, x+d*15, y-9);
    line(x+d*14, y-6, x+d*14, y-10);
    line(x+d*16, y-3, x+d*17, y-3);
    line(x+d*18, y-2, x+d*19, y-2);
    line(x+d*12, y-2, x+d*12, y-1);
    line(x+d*8, y-1, x+d*8, y-2);
    line(x+d*5, y-14, x+d*6, y-14);
    line(x+d*3, y-13, x+d*4, y-13);
    line(x+d*2, y-11, x+d*2, y-12);
    line(x+d*1, y-7, x+d*1, y-10);
    line(x+d*2, y-6, x+d*4, y-6);
    line(x+d*6, y-6, x+d*6, y-10);
    line(x+d*5, y-7, x+d*5, y-9);
    line(x, y, x+d*8, y);
    line(x+d*12, y, x+d*20, y);
    
    
    
    //all dark blue pixels
    stroke(0, 35, 255);
    fill(0, 35, 255);
    
        //belt
    rect(x+d*7, y-7, d*6, 1);
    rect(x+d*8, y-5, d*3, 0);
    
        //right leg
    line(x+d*13, y-1, x+d*19, y-1);
    line(x+d*13, y-2, x+d*17, y-2);
    line(x+d*13, y-3, x+d*15, y-3);
    point(x+d*15, y-4);
    
        //left leg
    line(x+d*1, y-1, x+d*7, y-1);
    line(x+d*3, y-2, x+d*7, y-2);
    line(x+d*5, y-3, x+d*7, y-3);
    line(x+d*5, y-4, x+d*6, y-4);
    
        //right arm
    rect(x+d*2, y-8, d*2, 1);
    line(x+d*2, y-9, x+d*3, y-9);
    line(x+d*2, y-10, x+d*4, y-10);
    line(x+d*3, y-11, x+d*4, y-11);
    point(x+d*3, y-12);
    
        //left arm
    rect(x+d*16, y-8, d*2, 1);
    line(x+d*17, y-9, x+d*18, y-9);
    line(x+d*16, y-10, x+d*18, y-10);
    line(x+d*16, y-11, x+d*17, y-11);
    point(x+d*17, y-12);
    
        //helmet
    rect(x+d*7, y-20, d*4, 2);
    line(x+d*7, y-17, x+d*7, y-14);
    point(x+d*8, y-17);
    line(x+d*8, y-21, x+d*10, y-21);
    point(x+d*12, y-18);
    line(x+d*13, y-17, x+d*14, y-17);
    line(x+d*15, y-18, x+d*15, y-19);
    
    //all light blue pixels
    stroke(0, 225, 255);
    fill(0, 225, 255);
    
        //body
    rect(x+d*7, y-10, d*6, 2);
    
        //right shoulder
    line(x+d*8, y-11, x+d*5, y-11);
    line(x+d*7, y-12, x+d*4, y-12);
    line(x+d*6, y-13, x+d*5, y-13);
    point(x+d*5, y-10);
    
        //left shoulder
    line(x+d*15, y-10, x+d*15, y-12);
    point(x+d*14, y-11);
    point(x+d*16, y-12);
    
        //right leg
    line(x+d*7, y-4, x+d*9, y-4);
    line(x+d*6, y-5, x+d*7, y-5);
    point(x+d*8, y-3);
    
        //left leg
    line(x+d*11, y-4, x+d*14, y-4);
    line(x+d*12, y-5, x+d*14, y-5);
    point(x+d*12, y-3);
    
        //helmet
    line(x+d*6, y-18, x+d*6, y-16);
    line(x+d*11, y-22, x+d*12, y-22);
    line(x+d*12, y-21, x+d*13, y-21);
    line(x+d*13, y-19, x+d*14, y-19);
    
};   //standing (right)
var rf1Megaman = function(rx, ry) {
    //all black pixels
    fill(0,0,0);
    stroke(0, 0, 0);
    //left leg
    line(rx, ry, rx+d*+2, ry-0);
    line(rx, ry, rx, ry-2);
    point(rx+d*+1, ry-3);
    point(rx+d*+2, ry-4);
    line(rx+d*+3, ry-5, rx+d*+4, ry-5);
    point(rx+d*+3, ry-1);
    point(rx+d*+4, ry);
    line(rx+d*+5, ry+1, rx+d*+6, ry+1);
    line(rx+d*+5, ry-4, rx+d*+6, ry-4);
    point(rx+d*+7, ry);
    line(rx+d*+6, ry-3, rx+d*+7, ry-3);
    line(rx+d*+7, ry-2, rx+d*+8, ry-2);
    line(rx+d*+8, ry-1, rx+d*+9, ry-1);
    //right leg
    line(rx+d*+10, ry, rx+d*+10, ry+1);
    point(rx+d*+9, ry+2);
    line(rx+d*+9, ry+3, rx+d*+17, ry+3);
    point(rx+d*+17, ry+2);
    line(rx+d*+16, ry+1, rx+d*+14, ry+1);
    line(rx+d*+15, ry, rx+d*+15, ry-1);
    point(rx+d*+14, ry-2);
    point(rx+d*+13, ry-3);
    point(rx+d*+14, ry-4);
    point(rx+d*+15, ry-5);
    //right arm
    point(rx+d*+16, ry-4);
    line(rx+d*+17, ry-3, rx+d*+19, ry-3);
    point(rx+d*+20, ry-4);
    point(rx+d*+21, ry-5);
    point(rx+d*+22, ry-6);
    line(rx+d*+23, ry-7, rx+d*+23, ry-9);
    line(rx+d*+22, ry-10, rx+d*+20, ry-10);
    line(rx+d*+19, ry-9, rx+d*+19, ry-7);
    point(rx+d*+18, ry-7);
    //left arm
    line(rx+d*+5, ry-5, rx+d*+5, ry-8);
    line(rx+d*+4, ry-9, rx+d*+4, ry-10);
    line(rx+d*+3, ry-8, rx+d*+3, ry-7);
    line(rx+d*+2, ry-6, rx, ry-6);
    line(rx+d*-1, ry-7, rx+d*-1, ry-9);
    point(rx, ry-10);
    point(rx+d*+1, ry-11);
    line(rx+d*+2, ry-12, rx+d*+3, ry-12);
    point(rx+d*+3, ry-11);
    line(rx+d*+4, ry-13, rx+d*+6, ry-13);
    
    //head
    point(rx+d*+17, ry-8);
    line(rx+d*+18, ry-9, rx+d*+18, ry-14);
    line(rx+d*+17, ry-15, rx+d*+14, ry-15);
    point(rx+d*+14, ry-14);
    line(rx+d*+15, ry-13, rx+d*+16, ry-13);
    point(rx+d*+13, ry-16);
    point(rx+d*+16, ry-16);
    point(rx+d*+15, ry-17);
    line(rx+d*+14, ry-18, rx+d*+12, ry-18);
    line(rx+d*+12, ry-17, rx+d*+10, ry-17);
    point(rx+d*+9, ry-16);
    line(rx+d*+8, ry-15, rx+d*+8, ry-14);
    line(rx+d*+7, ry-13, rx+d*+7, ry-11);
    line(rx+d*+8, ry-10, rx+d*+8, ry-9);
    point(rx+d*+9, ry-8);
    point(rx+d*+10, ry-7);
    line(rx+d*+11, ry-6, rx+d*+15, ry-6);
    point(rx+d*+16, ry-7);
    rect(rx+d*+13, ry-11, 1, 1);
    line(rx+d*+16, ry-11, rx+d*+16, ry-10);
    line(rx+d*+12, ry-8, rx+d*+15, ry-8);
    
};//run forward frame 1
var rf2Megaman = function(rx, ry) {
    //all black pixels
    fill(0, 0, 0);
    stroke(0, 0, 0);
    //legs
    line(rx, ry, rx+d*+5, ry);
    point(rx+d*-1, ry-1);
    line(rx+d*-2, ry-2, rx+d*-2, ry-3);
    point(rx+d*-1, ry-4);
    line(rx, ry-5, rx+d*+1, ry-5);
    point(rx+d*+5, ry-1);
    line(rx+d*+4, ry-2, rx+d*+2, ry-2);
    point(rx+d*+4, ry-3);
    line(rx+d*+5, ry-4, rx+d*+5, ry-7);
    line(rx+d*+6, ry-8, rx+d*+9, ry-8);
    line(rx+d*+10, ry-9, rx+d*+10, ry-10);
    point(rx+d*+6, ry-5);
    line(rx+d*+7, ry-6, rx+d*+7, ry-9);
    //left arm
    line(rx+d*+1, ry-6, rx+d*+2, ry-6);
    point(rx, ry-7);
    point(rx+d*-1, ry-8);
    point(rx+d*-2, ry-9);
    line(rx+d*-3, ry-10, rx+d*-3, ry-11);
    line(rx+d*-4, ry-12, rx+d*-4, ry-13);
    point(rx+d*-3, ry-14);
    point(rx+d*-2, ry-15);
    point(rx+d*-1, ry-16);
    point(rx, ry-12);
    point(rx+d*+1, ry-11);
    line(rx+d*+2, ry-10, rx+d*+3, ry-10);
    line(rx+d*+4, ry-9, rx+d*+4, ry-8);
    point(rx+d*+3, ry-7);
    point(rx+d*+1, ry-9);
    point(rx+d*+8, ry-10);
    //head
    line(rx+d*+9, ry-11, rx+d*+4, ry-11);
    point(rx+d*+3, ry-12);
    point(rx+d*+2, ry-13);
    line(rx+d*+1, ry-14, rx+d*+1, ry-15);
    line(rx, ry-16, rx, ry-18);
    line(rx+d*+1, ry-19, rx+d*+1, ry-20);
    point(rx+d*+2, ry-21);
    line(rx+d*+3, ry-22, rx+d*+5, ry-22);
    line(rx+d*+5, ry-23, rx+d*+7, ry-23);
    point(rx+d*+8, ry-22);
    point(rx+d*+9, ry-21);
    point(rx+d*+6, ry-21);
    line(rx+d*+10, ry-20, rx+d*+7, ry-20);
    point(rx+d*+7, ry-19);
    line(rx+d*+8, ry-18, rx+d*+9, ry-18);
    line(rx+d*+11, ry-19, rx+d*+11, ry-14);
    point(rx+d*+10, ry-13);
    point(rx+d*+9, ry-12);
    rect(rx+d*+6, ry-16, 1, 1);
    line(rx+d*+9, ry-16, rx+d*+9, ry-15);
    line(rx+d*+5, ry-13, rx+d*+8, ry-13);
    
};//run forward frame 2
var rf3Megaman = function(rx, ry) {
    //all black pixels
    fill(0, 0, 0);
    stroke(0, 0, 0);
    //right leg
    line(rx, ry, rx+d*+9, ry);
    point(rx+d*+9, ry-1);
    line(rx+d*+8, ry-2, rx+d*+6, ry-2);
    line(rx+d*+7, ry-3, rx+d*+7, ry-4);
    point(rx+d*+6, ry-5);
    point(rx, ry-1);
    line(rx+d*+1, ry-2, rx+d*+1, ry-2);
    line(rx, ry-3, rx+d*-2, ry-3);
    //left leg
    point(rx+d*-3, ry-2);
    line(rx+d*-4, ry-1, rx+d*-6, ry-1);
    point(rx+d*-8, ry-3);
    line(rx+d*-7, ry-2, rx+d*-10, ry-2);
    line(rx+d*-11, ry-3, rx+d*-11, ry-4);
    point(rx+d*-10, ry-5);
    point(rx+d*-9, ry-6);
    line(rx+d*-8, ry-7, rx+d*-6, ry-7);
    line(rx+d*-6, ry-6, rx+d*-4, ry-6);
    point(rx+d*-5, ry-5);
    point(rx+d*-4, ry-7);
    line(rx+d*-3, ry-8, rx+d*-3, ry-9);
    //left hand
    line(rx+d*-4, ry-9, rx+d*-5, ry-9);
    point(rx+d*-5, ry-8);
    line(rx+d*-9, ry-8, rx+d*-9, ry-10);
    point(rx+d*-8, ry-11);
    line(rx+d*-7, ry-12, rx+d*-6, ry-12);
    line(rx+d*-5, ry-13, rx+d*-3, ry-13);
    //right hand
    line(rx+d*+9, ry-6, rx+d*+2, ry-6);
    point(rx+d*+1, ry-7);
    point(rx, ry-8);
    line(rx+d*+10, ry-7, rx+d*+10, ry-9);
    line(rx+d*+9, ry-10, rx+d*+7, ry-10);
    line(rx+d*+6, ry-9, rx+d*+4, ry-9);
    //head
    point(rx+d*+8, ry-11);
    line(rx+d*+9, ry-12, rx+d*+9, ry-15);
    line(rx+d*+8, ry-16, rx+d*+5, ry-16);
    point(rx+d*+7, ry-17);
    point(rx+d*+6, ry-18);
    line(rx+d*+5, ry-19, rx+d*+3, ry-19);
    point(rx+d*+4, ry-17);
    line(rx+d*+3, ry-18, rx+d*+1, ry-18);
    point(rx, ry-17);
    line(rx+d*-1, ry-16, rx+d*-1, ry-15);
    line(rx+d*-2, ry-14, rx+d*-2, ry-13);
    
};//run forward frame 3
var jMegaman = function(jx, jy) {
    //all black pixels
    stroke(0, 0, 0);
    fill(0, 0, 0);
    
    //left leg
    line(jx, jy, jx+d*+2, jy);
    line(jx+d*-1, jy-1, jx+d*-1, jy-5);
    line(jx+d*-2, jy-6, jx+d*-2, jy-16);
    line(jx+d*+2, jy-7, jx+d*+2, jy-9);
    line(jx+d*+3, jy-1, jx+d*+3, jy-6);
    line(jx+d*+3, jy-9, jx+d*+6, jy-9);
    
    //right leg
    line(jx+d*+7, jy-8, jx+d*+7,jy-6);
    point(jx+d*+8, jy-6);
    line(jx+d*+9, jy-5, jx+d*+12, jy-5);
    line(jx+d*+13, jy-6, jx+d*+13, jy-7);
    point(jx+d*+12, jy-8);
    line(jx+d*+11, jy-9, jx+d*+11, jy-11);
    point(jx+d*+10, jy-12);
    line(jx+d*+9, jy-13, jx+d*+7, jy-13);
    line(jx+d*+7, jy-14, jx+d*+7, jy-15);
    //right arm
    line(jx+d*+8, jy-16, jx+d*+8, jy-17);
    point(jx+d*+9, jy-18);
    point(jx+d*+10, jy-19);
    point(jx+d*+11, jy-20);
    point(jx+d*+12, jy-21);
    point(jx+d*+13, jy-22);
    point(jx+d*+14, jy-23);
    line(jx+d*+15, jy-24, jx+d*+15, jy-25);
    point(jx+d*+14, jy-26);
    line(jx+d*+13, jy-27, jx+d*+12, jy-27);
    point(jx+d*+11, jy-26);
    line(jx+d*+10, jy-25, jx+d*+10, jy-24);
    point(jx+d*+9, jy-23);
    line(jx+d*+11, jy-24, jx+d*+11, jy-23);
    //left arm
    line(jx+d*-3, jy-17, jx+d*-3, jy-18);
    point(jx+d*-4, jy-19);
    point(jx+d*-5, jy-20);
    point(jx+d*-6, jy-21);
    point(jx+d*-7, jy-22);
    point(jx+d*-8, jy-23);
    point(jx+d*-9, jy-24);
    line(jx+d*-10, jy-25, jx+d*-10, jy-26);
    point(jx+d*-9, jy-27);
    line(jx+d*-8, jy-28, jx+d*-7, jy-28);
    point(jx+d*-6, jy-27);
    line(jx+d*-5, jy-26, jx+d*-5, jy-25);
    point(jx+d*-4, jy-24);
    line(jx+d*-6, jy-25, jx+d*-6, jy-24);
    //head
    line(jx+d*-3, jy-24, jx+d*-3, jy-22);
    line(jx+d*-2, jy-25, jx+d*-2, jy-26);
    point(jx+d*-1, jy-27);
    line(jx, jy-28, jx+d*+2, jy-28);
    point(jx+d*+3, jy-27);
    line(jx+d*+2, jy-29, jx+d*+4, jy-29);
    point(jx+d*+5, jy-28);
    point(jx+d*+6, jy-27);
    line(jx+d*+7, jy-26, jx+d*+4, jy-26);
    line(jx+d*+8, jy-25, jx+d*+8, jy-20);
    point(jx+d*+7, jy-19);
    point(jx+d*+6, jy-18);
    line(jx+d*+5, jy-17, jx+d*+3, jy-17);
    point(jx+d*+1, jy-17);
    point(jx, jy-18);
    point(jx+d*-1, jy-19);
    point(jx+d*-2, jy-20);
    line(jx+d*-3, jy-21, jx+d*-3, jy-23);
    line(jx+d*+2, jy-18, jx+d*+5, jy-18);
    line(jx+d*+3, jy-19, jx+d*+5, jy-19);
    rect(jx+d*+3, jy-22, 1, 1);
    line(jx+d*+6, jy-22, jx+d*+6, jy-21);
    point(jx+d*+4, jy-25);
    line(jx+d*+5, jy-24, jx+d*+6, jy-24);
    
    //all dark blue pixels
    stroke(0, 35, 255);
    fill(0, 35, 255);
    //left leg
    rect(jx, jy-6, d*2, 5);
    line(jx+d*-1, jy-7, jx+d*+1, jy-7);
    point(jx+d*-1, jy-6);
    point(jx+d*+1, jy-8);
    //right leg
    
    //belt
    rect(jx+d*-1, jy-12, d*6, 1);
    line(jx+d*+1, jy-10, jx+d*+4, jy-10);
    point(jx+d*+6, jy-12);
    //left hand
    
    //right hand
    
    //helmet
    
    //all light blue pixels
    stroke(0, 225, 255);
    fill(0, 225, 255);
    
};  //jumping
var sMegaman = function(sx, sy){
     //all black pixels
    fill(0, 0, 0);
    stroke(0, 0, 0);
    //left leg    
    line(sx, sy, sx+8, sy);
};
