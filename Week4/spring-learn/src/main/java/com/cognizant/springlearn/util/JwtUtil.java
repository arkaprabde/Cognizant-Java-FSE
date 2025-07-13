package com.cognizant.springlearn.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "Y219iI21gA1MVZN0T4/VOGAL/o94nwtxhfeP69DHDyZH0DDpxOI12/dKF5ONO1v4t5Z5jAJgy4CYZEvxnYA2mQ==";

    public String generateToken(String username) {
        long expirationTime = 1000 * 60 * 60;

        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
}
