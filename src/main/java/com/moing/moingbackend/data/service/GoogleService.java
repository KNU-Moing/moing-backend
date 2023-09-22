package com.moing.moingbackend.data.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@Service
public class GoogleService {

    public String getGoogleAccessToken (String code) {
        String access_Token = "";
        String refresh_Token = "";
        //String reqURL = "https://oauth2.googleapis.com/token";
        String reqURL = "https://oauth2.googleapis.com/token";
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("&code=" + code);
            sb.append("&grant_type=authorization_code");
            sb.append("&client_id=569884170100-qithpn912dc88qiip3n5aaaa6t6mdbir.apps.googleusercontent.com"); // TODO REST_API_KEY 입력
            sb.append("&client_secret=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");
            sb.append("&redirect_uri=http://localhost:8080/oauth/google"); // TODO 인가코드 받은 redirect_uri 입력
            bw.write(sb.toString());
            bw.flush();

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);

            //Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            refresh_Token = element.getAsJsonObject().get("id_token").getAsString();

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return access_Token;
    }

    public Map<String, Object> getGoogleUserInfo(String access_token) throws IOException {
        String host = "https://www.googleapis.com/oauth2/v1/userinfo";
        Map<String, Object> result = new HashMap<>();
        try {
            URL url = new URL(host);

            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestProperty("Authorization", "Bearer " + access_token);
            urlConnection.setRequestMethod("GET");

            int responseCode = urlConnection.getResponseCode();
            System.out.println("responseCode = " + responseCode);


            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String line = "";
            String res = "";
            while((line=br.readLine())!=null)
            {
                res+=line;
            }

            System.out.println("res = " + res);


            JsonParser parser = new JsonParser();
            JsonObject obj = parser.parse(res).getAsJsonObject();
            JsonObject response = obj.getAsJsonObject("response");
            JsonObject properties = obj.has("properties") ? (JsonObject) obj.get("properties") : null;


            String id = obj.has("id") ? obj.get("id").getAsString() : "";
            String nickname = obj.has("given_name") ? obj.get("given_name").getAsString() : "";
            String profileImage = obj.has("picture") ? obj.get("picture").getAsString() : "";
            String email = obj.has("email") ? obj.get("email").getAsString() : "";
            String name = obj.has("name") ? obj.get("name").getAsString() : "";

            result.put("id", id);
            result.put("nickname", nickname);
            result.put("profileImage", profileImage);
            result.put("email", email);
            result.put("name", name);

            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

        return result;
    }
}