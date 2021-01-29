FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 9527
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-zuul.jar
ENTRYPOINT ["java","-jar","/mentorondemand-zuul.jar"]