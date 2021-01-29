FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8051
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-payment.jar
ENTRYPOINT ["java","-jar","/mentorondemand-payment.jar"]