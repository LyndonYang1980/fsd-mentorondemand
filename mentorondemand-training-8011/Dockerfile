FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8011
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-training.jar
ENTRYPOINT ["java","-jar","/mentorondemand-training.jar"]