package com.yusteyziboutique.restapi.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Map;
import java.util.HashMap;

@RestController
public class SubscribeEmail {
    

    @GetMapping("/subscribe")
    public Object respondSubscribe() {

        Map<String, String> object = new HashMap<>();
        
        object.put("something", "else");
        object.put("this is great", "amazing job");

        return object;
    }

    @PostMapping("/subscribe")
    public Object getMethodName() {

        Map<String, String> object = new HashMap<>();
        
        object.put("hello", "world");
        object.put("this is great", "amazing job");

        return object;
    }
    
}
