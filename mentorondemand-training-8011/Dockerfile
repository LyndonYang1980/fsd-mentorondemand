FROM openjdk:8-jdk-alpine
VOLUME /share/data
EXPOSE 8011
ARG JAR_FILE
COPY ${JAR_FILE} mentorondemand-training.jar
COPY ./wait-for-it.sh /wait-for-it.sh
RUN sh -c 'chmod 777 /wait-for-it.sh'
RUN sed -i 's/\r//g' /wait-for-it.sh
RUN apk add bash
ENTRYPOINT ["bash", "/wait-for-it.sh", "eurekahost:7001", "--", "java", "-jar", "/mentorondemand-training.jar"]