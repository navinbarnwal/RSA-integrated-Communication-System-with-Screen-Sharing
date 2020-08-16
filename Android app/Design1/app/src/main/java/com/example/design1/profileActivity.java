package com.example.design1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

public class profileActivity extends AppCompatActivity {

    TextView mac2, name2, nick2, dept2;
    // shared preference
    SharedPreferences sharedPreferences;
    //create shared preference name and KEY

    private static final String SHARED_PREF_NAME = "regpref";
    private static final String KEY_MAC = "mac";
    private static final String KEY_NAME = "name";
    private static final String KEY_NICK = "nick";
    private static final String KEY_DEPT = "dept";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        mac2 = findViewById(R.id.mac1);
        name2 = findViewById(R.id.name1);
        nick2 = findViewById(R.id.nick1);
        dept2 = findViewById(R.id.dept1);

        sharedPreferences = getSharedPreferences(SHARED_PREF_NAME, MODE_PRIVATE);

        String mac = sharedPreferences.getString(KEY_MAC, null);
        String name = sharedPreferences.getString(KEY_NAME, null);
        String nick = sharedPreferences.getString(KEY_NICK, null);
        String dept = sharedPreferences.getString(KEY_DEPT, null);
        Toast.makeText(profileActivity.this, "running shared", Toast.LENGTH_SHORT).show();
        // NOT WORKING
        mac2.setText(mac);
        name2.setText(name);
        nick2.setText(nick);
        dept2.setText(dept);

    }
}
