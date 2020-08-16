package com.example.design1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.TextView;

import com.google.android.material.textfield.TextInputLayout;

import static androidx.core.os.HandlerCompat.postDelayed;

public class MainActivity extends AppCompatActivity {

    private static int SPLACH_TIMEOUT = 2000;


    //Hooks
    View first,second,third,fourth,fifth,sixth;
    TextView mid_line,bottom_line;

    //Animation
    Animation top_anim, bottom_anim,mid_anim;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_main);




        //Animation
        top_anim = AnimationUtils.loadAnimation(this,R.anim.top_anim);
        bottom_anim = AnimationUtils.loadAnimation(this,R.anim.bottom_anim);
        mid_anim = AnimationUtils.loadAnimation(this,R.anim.mid_anim);

        //Hooks
        first = findViewById(R.id.line1);
        second = findViewById(R.id.line2);
        third = findViewById(R.id.line3);
        fourth = findViewById(R.id.line4);
        fifth = findViewById(R.id.line5);
        sixth = findViewById(R.id.line6);

        mid_line = findViewById(R.id.mid_text);
        bottom_line = findViewById(R.id.bottom_text);

        //Setting animation
        first.setAnimation(top_anim);
        second.setAnimation(top_anim);
        third.setAnimation(top_anim);
        fourth.setAnimation(top_anim);
        fifth.setAnimation(top_anim);
        sixth.setAnimation(top_anim);

        mid_line.setAnimation(mid_anim);
        bottom_line.setAnimation(bottom_anim);

        //call next activity
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(MainActivity.this, regActivity.class);
                startActivity(intent);
                finish();
            }
        }, SPLACH_TIMEOUT) ;

    }

}

