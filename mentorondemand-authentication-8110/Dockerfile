FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8110
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-authentication.jar
ENTRYPOINT ["java","-jar","/mentorondemand-authentication.jar"]