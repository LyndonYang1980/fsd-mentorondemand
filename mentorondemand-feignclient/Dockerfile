FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 80
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-feignclient.jar
ENTRYPOINT ["java","-jar","/mentorondemand-feignclient.jar"]