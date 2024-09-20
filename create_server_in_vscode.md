
# How to Create a Server in VSCode

### Step 1: Initialize a New Server Project
Inside the `server` directory, run the following command to initialize a Gradle project:
```bash
gradle init --type java-application
```
- Project name: Enter `server`.
- Java version: Select the version you have installed (e.g., 17).
- Application structure: Choose **Single application project** (option 1).
- Build script DSL: Choose **Groovy** (option 2).
- Generate build using new APIs: Choose **No** (default).

### Step 2: Replace the `build.gradle` File Content
Replace the content of the `build.gradle` file with the following configuration:
```groovy
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
```

### Step 3: Create the Web Application Folder Structure
Run the following commands to create the necessary folder structure and JSP file:
```bash
mkdir -p src/main/webapp/WEB-INF
touch src/main/webapp/index.jsp
```

Edit the `index.jsp` file with the following content:
```html
<html>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

### Step 4: Build and Deploy the Application
1. Run the following command to clean the project and build the WAR file:
    ```bash
    ./gradlew clean build
    ```
2. Copy the generated `IbrahimClientServer.war` file to Tomcat’s `webapps` folder:
    ```bash
    cp build/libs/IbrahimClientServer.war /path/to/tomcat/webapps/
    ```

### Step 5: Verify Deployment
Start the Tomcat server and deploy the `index.jsp` servlet.

Then, open the following URL in a browser to verify:
```
http://localhost:8080/IbrahimClientServer/index.jsp
```

You should see a "Hello, World!" message.
