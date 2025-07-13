package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.util.JwtUtil;
import java.util.HashMap;
import java.util.Map;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> generateToken(@RequestHeader("Authorization") String authHeader) {
        String[] credentials = extractAndDecodeHeader(authHeader);
        String username = credentials[0];
        String password = credentials[1];

        // TODO: validate credentials (this assumes they're valid)
        String token = jwtUtil.generateToken(username);

        // Return JWT in response
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return response;
    }

    private String[] extractAndDecodeHeader(String header) {
        if (!header.toLowerCase().startsWith("basic ")) {
            throw new RuntimeException("Authorization header must start with Basic");
        }

        byte[] base64Token = header.substring(6).getBytes();
        byte[] decoded;
        try {
            decoded = Base64.getDecoder().decode(base64Token);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Failed to decode basic authentication token");
        }

        String token = new String(decoded);
        int delim = token.indexOf(":");
        if (delim == -1) {
            throw new RuntimeException("Invalid basic authentication token");
        }

        return new String[]{token.substring(0, delim), token.substring(delim + 1)};
    }
}
