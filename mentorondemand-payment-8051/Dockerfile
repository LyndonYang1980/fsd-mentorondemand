FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8051
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-payment.jar
COPY ./wait-for-it.sh /wait-for-it.sh
RUN sh -c 'chmod 777 /wait-for-it.sh'
RUN apk add bash
ENTRYPOINT ["bash", "/wait-for-it.sh", "eurekahost:7001", "--", "java", "-jar", "/mentorondemand-payment.jar"]