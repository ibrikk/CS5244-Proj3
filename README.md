How to create a server in VSCode:

1. inside the server directory - gradle init --type java-application
   Project name: Enter server.
   Java version: Select the version you have installed (e.g., 17).
   Application structure: Choose Single application project (option 1).
   Build script DSL: Choose Groovy (option 2).
   Generate build using new APIs: Choose No (default).

2. Replace the build.gradle file content with:
   plugins {
   id 'java'
   id 'war'
   }

repositories {
mavenCentral()
}

dependencies {
implementation 'jakarta.servlet:jakarta.servlet-api:5.0.0' // Servlet API
providedCompile 'org.apache.tomcat.embed:tomcat-embed-core:9.0.0.M1' // Tomcat embedded core
testImplementation libs.junit
}

war {
archiveBaseName = 'IbrahimClientServer'
archiveVersion = ''
}

3. mkdir -p src/main/webapp/WEB-INF
   touch src/main/webapp/index.jsp

<!-- <html>
<body>
    <h1>Hello, World!</h1>
</body>
</html> -->

4. RUN ./gradlew clean build
   Then copy the build/lib/IbrahimClientServer.war file to tomcat's webapp/ folder.
   Start the server and Deploy the index.jsp servlet

5. Verify http://localhost:8080/server/index.jsp

# CS5244-Proj3
