package com.example.design1;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.ActivityChooserView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Handler;
import android.text.Editable;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Collections;
import java.util.List;

public class regActivity extends AppCompatActivity {

    //type cast to send on intent
    static final String EXTRA_TEXT = "com.example.design1.EXTRA_TEXT";
    static final String EXTRA_NUMBER = "com.example.design1.EXTRA_NUMBER";

    // initilise all button and textview
    private TextView textView;
    EditText username1, nickname1, deptname1;
    Button submit;

    // shared preference
    SharedPreferences sharedPreferences;
    //create shared preference name and KEY
    private static final String SHARED_PREF_NAME = "regpref";
    private static final String KEY_MAC = "mac";
    private static final String KEY_NAME = "name";
    private static final String KEY_NICK = "nick";
    private static final String KEY_DEPT = "dept";
    // permission
    private int PERMISSION = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reg);
        // assigning variable to its position
        textView = findViewById(R.id.macAddress);
        username1 = findViewById(R.id.username);
        nickname1 = findViewById(R.id.nickname);
        deptname1 = findViewById(R.id.deptname);
        submit = findViewById(R.id.submit);

        // Create shared preference name and modes
        sharedPreferences = getSharedPreferences(SHARED_PREF_NAME, MODE_PRIVATE);
        //When we opwn activity - to check first shared preferences data avalible or not
        String name1 = sharedPreferences.getString(KEY_NAME, null);
        if (name1 != null) {
            Intent intent2 = new Intent(regActivity.this, homeActivity.class);
            startActivity(intent2);
            finish();
        }

        //submit
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //shared preference
                SharedPreferences.Editor editor = sharedPreferences.edit();
                editor.putString(KEY_MAC, textView.getText().toString());
                editor.putString(KEY_NAME, username1.getText().toString());
                editor.putString(KEY_NICK, nickname1.getText().toString());
                editor.putString(KEY_DEPT, deptname1.getText().toString());

                Toast.makeText(regActivity.this, "Submit", Toast.LENGTH_SHORT).show();

                //Intent from reg to home
                Intent intent = new Intent(regActivity.this, homeActivity.class);
                startActivity(intent);
                finish();
            }
        });

        textView.addTextChangedListener(regTextWatcher);
        username1.addTextChangedListener(regTextWatcher);
        nickname1.addTextChangedListener(regTextWatcher);
        deptname1.addTextChangedListener(regTextWatcher);

    }

    // Validation for input
    private TextWatcher regTextWatcher = new TextWatcher() {
        @Override
        public void beforeTextChanged(CharSequence s, int start, int count, int after) {

        }

        @Override
        public void onTextChanged(CharSequence s, int start, int before, int count) {
            String macInput = textView.getText().toString().trim();
            String userInput = username1.getText().toString().trim();
            String nickInput = nickname1.getText().toString().trim();
            String deptInput = deptname1.getText().toString().trim();

            submit.setEnabled(!macInput.isEmpty() && !userInput.isEmpty() && !nickInput.isEmpty() && !deptInput.isEmpty());

        }

        @Override
        public void afterTextChanged(Editable s) {

        }
    };

    public void getmac(View view) {
        // Permission
        if (ContextCompat.checkSelfPermission(regActivity.this, Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED)
        {
            Toast.makeText(this, "storage permission", Toast.LENGTH_SHORT).show();
                // Not working
        }
        else
        {
            requestStoragePermission();
        }

        // Mac address
        try {
            List<NetworkInterface> networkInterfaceList = Collections.list(NetworkInterface.getNetworkInterfaces());

            String stringMac = "";

            for (NetworkInterface networkInterface : networkInterfaceList) {
                if (networkInterface.getName().equalsIgnoreCase("wlan0")) {
                    for (int i = 0; i < networkInterface.getHardwareAddress().length; i++) {
                        String stringMacByte = Integer.toHexString(networkInterface.getHardwareAddress()[i] & 0xFF);

                        if (stringMacByte.length() == 1) {
                            stringMacByte = "0" + stringMacByte;
                        }

                        stringMac = stringMac + stringMacByte.toUpperCase() + ":";
                        Toast.makeText(this, "mac address" + stringMac, Toast.LENGTH_SHORT).show();
                    }
                    break;
                }
            }
            textView.setText(stringMac.substring(0, stringMac.length() - 1));

        } catch (SocketException e) {
            e.printStackTrace();
        }
    }
    //method to check permission
    private  void requestStoragePermission()
    {
        if(ActivityCompat.shouldShowRequestPermissionRationale(this,Manifest.permission.INTERNET))
        {
            new AlertDialog.Builder(this)
                    .setTitle("Permission needed")
                    .setMessage("This permission is needed bec of ----")
                    .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            ActivityCompat.requestPermissions(regActivity.this,new String[] {Manifest.permission.INTERNET},PERMISSION);
                        }
                    })
                    .setNegativeButton("Cancle", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();
                        }
                    })
                    .create().show();

        }
        else
        {
            ActivityCompat.requestPermissions(this,new String[] {Manifest.permission.INTERNET},PERMISSION);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if(requestCode == PERMISSION)
        {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED)
            {
                Toast.makeText(this, "Permissioon Granted", Toast.LENGTH_SHORT).show();
            }
            else
            {
                Toast.makeText(this, "Permissioon Denied", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
