FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8021
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-user.jar
ENTRYPOINT ["java","-jar","/mentorondemand-user.jar"]