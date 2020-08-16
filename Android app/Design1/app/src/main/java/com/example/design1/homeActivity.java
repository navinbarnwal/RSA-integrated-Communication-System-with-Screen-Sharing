package com.example.design1;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;
import androidx.fragment.app.ListFragment;
import androidx.viewpager.widget.ViewPager;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;
import android.widget.Toolbar;

import com.google.android.material.tabs.TabLayout;

import java.util.ArrayList;
import java.util.List;

public class homeActivity extends AppCompatActivity {

    ImageView profile, search;
    private ViewPager viewPager;
    private TabLayout tabLayout;

    //fragments
//    private  ChatsFragment chatsFragment;
//    private AttendanceFragment attendanceFragment;
//    private LogsFragments logsFragments;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        //toolbar buttons
        profile = findViewById(R.id.profile);
        search = findViewById(R.id.search);

        //tab and pageviewr
//        viewPager = findViewById(R.id.view_page);
//        tabLayout = findViewById(R.id.tab_layout);

//        chatsFragment = new ChatsFragment();
//        attendanceFragment = new AttendanceFragment();
//        logsFragments = new LogsFragments();

//        tabLayout.setupWithViewPager(viewPager);

//        ViewPagerAdapter viewPagerAdapter = new ViewPagerAdapter(getSupportFragmentManager(),0);

//        tabLayout.getTabAt(0).setIcon(R.drawable.ic_chats);
//        tabLayout.getTabAt(1).setIcon(R.drawable.ic_attendance);
//        tabLayout.getTabAt(2).setIcon(R.drawable.ic_logs);

//        viewPagerAdapter.addFragment(chatsFragment,"CHATS");
//        viewPagerAdapter.addFragment(attendanceFragment,"ATTENDANCE");
//        viewPagerAdapter.addFragment(logsFragments,"LOGS");
//        viewPager.setAdapter(viewPagerAdapter);


        //profile button
        profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(homeActivity.this, "Profile", Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(homeActivity.this, profileActivity.class);
                startActivity(intent);
            }
        });

        //search button
        search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(homeActivity.this, "Search", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
// Page viewer
//    private class ViewPagerAdapter extends FragmentPagerAdapter
//    {
//        private List<Fragment> fragments = new ArrayList<>();
//        private List<String> fragmentTitle = new ArrayList<>();
//
//        public ViewPagerAdapter(@NonNull FragmentManager fm, int behavior) {
//            super(fm, behavior);
//
//        }
//
//        public void addFragment(Fragment fragment, String title1)
//        {
//            fragments.add(fragment);
//           // fragments.add(title1);
//        }
//
//        @NonNull
//        @Override
//        public Fragment getItem(int position) {
//            return fragments.get(position);
//        }
//
//        @Override
//        public int getCount()
//        {
//            return fragments.size();
//        }
//
//        @Nullable
//        @Override
//        public CharSequence getPageTitle(int position) {
//            return fragmentTitle.get(position);
//        }
//      }
