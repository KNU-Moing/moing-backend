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
public class NaverService {

    public String getNaverAccessToken (String code) {
        String access_Token = "";
        String refresh_Token = "";
        String reqURL = "https://nid.naver.com/oauth2.0/token";


        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            // 클라이언트 시크릿 값을 추가합니다.
            String clientSecret = "5B5HzUicvG"; // 클라이언트 시크릿 값으로 대체해야 합니다.
            conn.setRequestProperty("X-Naver-Client-Secret", clientSecret);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=FGkZ6bgGUKRbimQV2mFZ"); // TODO REST_API_KEY 입력
            sb.append("&client_secret=5B5HzUicvG");
            sb.append("&redirect_uri=http://localhost:8080/oauth/naver"); // TODO 인가코드 받은 redirect_uri 입력
            sb.append("&code=" + code);
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

            JsonElement accessTokenElement = element.getAsJsonObject().get("access_token");
            if (accessTokenElement != null && !accessTokenElement.isJsonNull()) {
                access_Token = accessTokenElement.getAsString();
            }

            JsonElement accessRefreshTokenElement = element.getAsJsonObject().get("refresh_token");
            if (accessRefreshTokenElement != null && !accessRefreshTokenElement.isJsonNull()) {
                refresh_Token = accessRefreshTokenElement.getAsString();
            }

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return access_Token;
    }

    public Map<String, Object> getNaverUserInfo(String access_token) throws IOException {
        String host = "https://openapi.naver.com/v1/nid/me";
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


            String id = response.has("id") ? response.get("id").getAsString() : "";
            String nickname = response.has("nickname") ? response.get("nickname").getAsString() : "";
            String profileImage = response.has("profile_image") ? response.get("profile_image").getAsString() : "";
            String email = response.has("email") ? response.get("email").getAsString() : "";
            String name = response.has("name") ? response.get("name").getAsString() : "";

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

    /*public void logout(String access_Token) {
        String reqURL = "https://kapi.kakao.com/v1/user/logout";
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", "Bearer " + access_Token);

            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            String result = "";
            String line = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }*/

}