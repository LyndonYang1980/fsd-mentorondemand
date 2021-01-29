FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8001
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-mentor.jar
ENTRYPOINT ["java","-jar","/mentorondemand-mentor.jar"]