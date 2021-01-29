FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 7001
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-eureka.jar
ENTRYPOINT ["java","-jar","/mentorondemand-eureka.jar"]